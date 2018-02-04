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

</style>

<template>
    <div>
      <table class="customize-table" cellspacing="1">
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
                <p style="padding:10px 20px; font-weight: bold; border-bottom: 1px solid #eee">{{item.sourcetype}} / {{item.title}}</p>
                <p>{{item.content}}</p>
                <p style="text-align: right">{{item.commenttime}}</p>
                <p style="text-align: right; color: #2d8cf0; cursor: pointer; user-select: none" @click="toggleReply($event, item)"><span v-if="!item.replyVisible"><Icon type="arrow-right-b"></Icon> 查看回复</span><span v-else><Icon type="arrow-down-b"></Icon> 收起回复</span></p>
                <div v-if="item.replyVisible && item.replylist && item.replylist.length">
                  <table class="customize-table reply-table">
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
                          <div class="comment-panel">
                            <p>{{item.content}}</p>
                            <p style="text-align: right; font-size: small">{{item.commenttime}}</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
        avatarSize2: 40
      }
    },
    methods: {
      toggleReply (event, item) {
        item.replyVisible = !item.replyVisible
        if (item.replylist === null) {
          resta.get('/getcommentreplybythemeid.do', {themeid: item.id}, true).done(res => {
            item.replylist = res.list
            console.log(item.replylist)
          })
        }
      }
    },
    mounted () {
      resta.get('/getcommentthemebypage.do', {page: 1, pagesize: 10, sourcetype: this.type}, true).done((res) => {
        if (res && res.comment && res.comment.list) {
          this.data = res.comment.list.map(item => {
            item.replyVisible = false
            item.reply = []
            item.replylist = null
            return item
          })
          console.log(this.data)
        }
      })
    }
  }
</script>
