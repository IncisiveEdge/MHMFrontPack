<style>

</style>

<style scoped>

</style>

<template>
    <div style="margin-top: 20px;">
        <Affix>
            <span>本地存储：</span>
            <i-switch v-model="storage" size="large" @on-change="changeStorage">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
            <Button @click='newItem' type="primary">新增</Button>
            <Button @click='editItem' type="success">编辑</Button>
            <Button @click='deleteItem' type="error">删除</Button>
            <Button type="primary" @click='testSingle'>测试单个</Button>
            <Button type="primary" @click='testAll'>测试全部</Button>
        </Affix>
		<br/><br/>
    	<Table :highlight-row='flag' :columns="columns" @on-current-change="getSelectedRow" :data="data"></Table>
	    <i-modal :modal="modal">
	      <div slot="content">
	      <Form ref="form" :model="item" inline>
	      	<FormItem label="请求类型">
	      		<RadioGroup v-model="item.type">
                <Radio label="get">get</Radio>
                <Radio label="post">post</Radio>
            </RadioGroup>
	      	</FormItem>
	      	<FormItem label="接口名">
	      		<Input type="text" v-model="item.api" placeholder="api">
	      		</Input>
	      	</FormItem>
	      	<FormItem label="参数">
	      		<Input type="textarea"  v-model="item.args" placeholder="args">
	      		</Input>
	      	</FormItem>
      	</Form>
      	</div>

	    </i-modal>
    </div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import {resta} from '@/assets/rest.js'
	import IModal from '@/components/partical/Modal'
  export default {
    name: 'Blank',
    components:{
    	IModal
    },
    data () {
    	return {
    		columns: [{
    			key: 'type',
    			title: '请求类型'
    		},{
    			key: 'api',
    			title: '接口'
    		}, {
    			key: 'args',
    			title: '参数'
    		}, {
    			key: 'return',
    			title: '返回值'
    		}],

    		data: [],

    		modal: {
	          model: false
	        },

	        item: {type:'get'},
	        selectedRow: null,
	        flag: true,
	        index: -1,
            storage: localStorage.getItem('debugStoreOn') === 'true'
    	}
    },
    methods: {
    	newItem(){
    		this.modal.model = true
	        this.modal.title = '新增接口'
	        this.modal.width = 800
	        this.modal.textOk = '新增'
	        this.modal.onOk = () => {
	          if (this.item && this.item.type && this.item.api) {
	            this.push($.extend({},this.item))
                this.openStorage()
	          }
	          this.item = {type:'get'}

	          this.modal.model = false
	        }
	        this.modal.onCancel = () => {
	          this.item = {type:'get'}
	          this.modal.model = false
	        }
    	},
        editItem(){
            if(!this.selectedRow)return;
            this.item = this.selectedRow;
            this.modal.model = true
            this.modal.title = '编辑接口'
            this.modal.width = 800
            this.modal.textOk = '确定'
            this.modal.onOk = () => {
              if (this.item && this.item.type && this.item.api) {
                var index = this.getIndex(this.selectedRow)
                if(index >= 0){
                    Vue.set(this.data,index,this.item);
                    this.openStorage()
                }
              }
              this.item = {type:'get'}
              this.modal.model = false
            }
            this.modal.onCancel = () => {
              this.item = {type:'get'}
              this.modal.model = false
            }
        },
        deleteItem(){
            if(!this.selectedRow)return;
            this.$Modal.confirm({
                title: '删除接口',
              content: `<Icon type="information-circled" style="font-size: 30px;color:#f60;float:left"></Icon>
              <p>是否继续删除当前测试接口？</p>`,
              okText: '删除',
              cancelText: '取消',
              onOk: () => {
                var index = this.getIndex(this.selectedRow)
                if(index >= 0){
                    this.data.splice(index,1);
                    this.openStorage()
                }
            }
        })
        },
        test(_row){
            if(!_row)return;
            var row = $.extend({},_row);
            var index = this.getIndex(row)
            row.api.indexOf('/') !== 0 && (row.api = '/' + row.api);
            row.args = !row.args? null:JSON.parse(row.args);
            var flag = row.type === 'post';
            return resta[row.type](row.api, row.args, flag).done(res => {
                _row.return = JSON.stringify(res)
                Vue.set(this.data, index, _row)
            })
        },
        testSingle(){
            var _row = this.selectedRow;
            console.log(this.test(_row));
        },
        testAll(){
            var promises = [];
            this.data.map(row => {
                promises.push(this.test(row))
            })
            $.when.call(null,promises).then(()=>{
                this.$Message.success('测试完成')
                console.log('测试完成')
            })

        },
    	getSelectedRow(row){
    		this.selectedRow = row;
    	},
    	push(item){
    		item.index = new Date().getTime()
    		this.data.push(item)
    	},
    	getIndex(item){
    		for(var i=0; i<this.data.length; i++){
    			if(this.data[i].index === item.index){
    				return i;
    			}
    		}
			return -1;
    	},
        changeStorage(status){
            if(!localStorage){
                this.$massage.warning('浏览器暂不支持本地存储功能');
                return;
            }
            status?this.openStorage():this.closeStorage()
        },
        openStorage(){
            var debugStore = localStorage.getItem('debugStore') || {};
            localStorage.setItem('debugStoreOn','true');
            debugStore = JSON.stringify(this.data)
            localStorage.setItem('debugStore',debugStore)
        },
        closeStorage(){
            localStorage.setItem('debugStoreOn','false');
            localStorage.removeItem('debugStore')
        }
    },
    mounted(){
        if(localStorage && localStorage.getItem('debugStoreOn') === 'true'){
            var storageData = localStorage.getItem('debugStore')
            storageData = storageData? JSON.parse(storageData) : [];
            this.data = this.data.concat(storageData);
        }
    }
  }
</script>
