<style>

</style>

<style scoped>
  .customize-table{
    width: 100%;
    border: 1px solid #eee;
    border-collapse: collapse;
  }


  .customize-table td{
    border: 1px solid #eee;
    padding:20px;
  }

  .customize-table tbody>tr:nth-last-child(1) > td{
    border-bottom: none;
  }

  .customize-table tbody>tr>td:nth-child(1){
    border-left: none;
  }

  .customize-table tbody>tr>td:nth-last-child(1){
    border-right: none;
  }

  .customize-table .left{
    width: 30%;
    text-align: center;
  }

  .customize-table .right{
    padding: 0;
    width: 70%;
    vertical-align: top;
  }

  .comment-panel > p{
    padding-left: 20px;
    padding-right: 20px;
  }
  .reply-table{
    border: none;
  }
  .reply-table td {
    padding: 10px;
    vertical-align: middle;
  }

  .reply-table .left{
    width: 20%;
    text-align: left;
  }

  .reply-table .right{
    width: 80%;
  }
  .reply-table .comment-panel{
    height: 100%;
    padding-top: 10px;
  }

  .reply-panel{
    position: relative;
  }

  .reply-panel .reply-del{
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .comment-panel .comment-del,
  .reply-panel .reply-del{
    color: #2d8cf0;
    cursor: pointer;
    user-select: none;
    /*font-size: small;*/
    visibility: hidden;
  }
  .comment-panel:hover .comment-del,
  .reply-panel:hover .reply-del{
    visibility: visible;
  }



</style>

<template>
    <div>
      <div style="display: flex; justify-content: flex-end">
        <Page :total="total" show-sizer show-elevator show-total @on-change="onChange" @on-page-size-change="onPageSizeChange"></Page>
      </div>
      <div style="display: flex; justify-content: center">
        <span v-if="!total">暂无数据</span>
      </div>
      <div style="position: relative">
        <div style="position: absolute; width: 100%; height: 100%; background-color: rgba(255, 255, 255, .5)" v-if="loading">
          <Spin></Spin>
        </div>
        <table class="customize-table" cellspacing="1" v-if="total">
          <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td class="left">
              <div class="user-panel">
                <img v-if="item.avatar" :src="item.avatar"/>
                <div style="display: flex; justify-content: center">
                  <avatar :username="item.username" :size="avatarSize"></avatar>
                </div>
                <div style="padding-top: 10px;">{{item.username}}</div>
              </div>
            </td>
            <td class="right">
              <div class="comment-panel">
                <div style="padding:10px 20px; font-weight: bold; border-bottom: 1px solid #eee; display: flex; justify-content: space-between">
                  <span>{{item.sourcetype}} / {{item.title}}</span>
                  <span class="comment-del" @click="commentDel($event, item)"><Icon type="trash-a" size="20"></Icon></span>
                </div>
                <p>{{item.content}}</p>
                <p style="text-align: right">{{item.commenttime}}</p>
                <p style="text-align: right; color: #2d8cf0; cursor: pointer; user-select: none" @click="toggleReply($event, item)">
                  <span v-if="!item.replyVisible">
                    <Icon type="arrow-right-b" v-if="!item.loading"></Icon>
                    <Spin v-if="item.loading" style="display: inline-block"></Spin>
                    查看回复
                  </span>
                  <span v-if="item.replyVisible">
                    <Icon type="arrow-down-b" v-if="!item.loading"></Icon>
                    <Spin v-if="item.loading" style="display: inline-block"></Spin>
                    收起回复
                  </span>
                </p>
                <div v-if="item.replyVisible">
                  <table class="customize-table reply-table" v-if="item.replylist && item.replylist.length">
                    <tbody>
                    <tr v-for="(reply, index) in item.replylist" :key="index">
                      <td class="left">
                        <div class="user-panel">
                          <img v-if="reply.avatar" :src="reply.avatar"/>
                          <avatar style="display: inline-block;" :username="reply.username" :size="avatarSize2"></avatar>
                          <span style="padding-top: 10px;">{{reply.username}}</span>
                        </div>
                      </td>
                      <td class="right">
                        <div class="comment-panel reply-panel">
                          <span class="reply-del" @click="replyDel($event, reply, item.replylist)"><Icon type="trash-a" size="20"></Icon></span>
                          <p style="padding-right: 40px;">{{reply.content}}</p>
                          <p style="text-align: right; font-size: small">{{reply.commenttime}}</p>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div style="text-align: center; padding: 10px; border-top: 1px solid #eee;" v-else>
                    暂无回帖
                  </div>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
  import {resta} from '@/assets/rest'
  import Avatar from 'vue-avatar'
  export default {
    name: '',
    props: ['type'],
    components: {
      Avatar
    },
    data () {
      return {
        data: [],
        avatarSize: 80,
        avatarSize2: 40,
        total: 0,
        pageNum: 1,
        pageSize: 10,
        loading: false
      }
    },
    methods: {
      toggleReply (event, item) {
        item.replyVisible = !item.replyVisible
        if (item.replylist === null) {
          item.loading = true
          resta.get('/getcommentreplybythemeid.do', {themeid: item.id}, true).done(res => {
            item.loading = false
            item.replylist = res.list
            console.log(item.replylist)
          })
        }
      },
      onChange (page) {
        this.pageNum = page
        this.renderComment()
      },
      onPageSizeChange (size) {
        this.pageSize = size
        this.renderComment()
      },
      renderComment (pageNum = this.pageNum, pageSize = this.pageSize, type = this.type) {
        this.loading = true
        resta.get('/getcommentthemebypage.do', {page: pageNum, pagesize: pageSize, sourcetype: type}, true).done((res) => {
          this.loading = false
          if (res && res.comment) {
            if (res.comment.total) {
              this.total = res.comment.total
            }
            if (res.comment.list) {
              this.data = res.comment.list.map(item => {
                item.replyVisible = false
                item.reply = []
                item.replylist = null
                return item
              })
            }
          }
        })
      },
      replyDel (event, item, list) {
        this.$Modal.confirm({
          title: '确认删除',
          content: `<Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
                    <p>点击删除后，当前跟帖将永久性删除</p>
                  <p>是否继续删除？</p>`,
          okText: '删除',
          cancelText: '取消',
          loading: true,
          onOk: () => {
            resta.post('/deletecommentreplybyid.do', {id: item.id}, true).done((res) => {
              this.$Modal.remove()
              if (res.code === 0) {
                list.splice(list.indexOf(item), 1)
                this.$Message.success('删除跟帖成功！')
              } else {
                this.$Message.error('删除跟帖失败！')
              }
            })
          }
        })
      },
      commentDel (event, item) {
        this.$Modal.confirm({
          title: '确认删除',
          content: `<Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
                    <p>点击删除后，当前评论及评论下的跟帖将永久性删除</p>
                  <p>是否继续删除？</p>`,
          okText: '删除',
          cancelText: '取消',
          loading: true,
          onOk: () => {
            resta.post('/deletecommentthemebyid.do', {id: item.id}, true).done((res) => {
              this.$Modal.remove()
              if (res.code === 0) {
                this.data.splice(this.data.indexOf(item), 1)
                this.$Message.success('删除回帖成功！')
              } else {
                this.$Message.error('删除回帖失败！')
              }
            })
          }
        })
      }
    },
    mounted () {
      this.renderComment()
    }
  }
</script>
