<style>

</style>

<style scoped>

</style>

<template>
    <div style="margin-top: 100px;height: 1000px;padding: 50px">
		<Button @click='newItem'>新增</Button>
		<Button type="primary" @click='test'>发送请求</Button>
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
	        index: -1
    	}
    },
    methods: {
    	newItem(){
    		this.modal.model = true
	        this.modalType = 'edit'
	        this.modal.title = '新增接口'
	        this.modal.width = 800
	        this.modal.textOk = '新增'
	        this.modal.onOk = () => {
	          if (this.item && this.item.type && this.item.api) {
	            this.push($.extend({},this.item))
	          }
	           this.item = {type:'get'}
	          this.modal.model = false
	        }
	        this.modal.onCancel = () => {
	          this.item = {type:'get'}
	          this.modal.model = false
	          this.modalType = 'close'
	        }
    	},
    	test(){
    		if(!this.selectedRow)return;
    		var row = $.extend({},this.selectedRow);
    		var index = this.getIndex(this.selectedRow)
    		row.api.indexOf('/') !== 0 && (row.api = '/' + row.api);
    		console.log(row.args)
    		row.args = !row.args? null:JSON.parse(row.args);
    		var flag = row.type === 'post';
    		resta[row.type](row.api, row.args, flag).done(res => {
    			row.return = JSON.stringify(res)
    			Vue.set(this.data, index, row)
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
    			console.log(this.data[i].index, item.index)
    			if(this.data[i].index === item.index){
    				return i;
    			}
    		}
			return -1;
    	}
    }
  }
</script>
