<template>
  <div style="margin: 10px;">
    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 500px">
      <FormItem label="选择模块"
                :rules="{required: true, message: '请指定待变更类别的模块', trigger: 'change'}">
        <Select v-model="typeClass" style="width:200px" @on-change="classChanged">
          <Option value="">-- 请选择 --</Option>
          <Option v-for="(item, index) in classList" :value="item.value" :key="index">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <FormItem >
        <Button style="width: 80%;" v-if="typeClass" type="dashed" long @click="handleAdd" icon="plus-round">添加类别</Button>
      </FormItem>
      <FormItem
        v-for="(item, index) in formDynamic.items"
        v-if="typeClass && item.visible !== false"
        :key="index"
        :label="'类别 ' + (index + 1)"
        :prop="'items.' + index + '.value'"
        :rules="{required: true, message: '类别 ' + (index+1) +' 不能为空', trigger: 'blur'}">
        <Row>
          <Col span="12">
          <Input type="text" v-model="item.value" placeholder="输入类别名..."></Input>
          </Col>
          <Col span="10" offset="1">
          <Button v-if="item.save" type="success" @click="handleSave(item, index)">保存</Button>
          <Button v-if="item.update" type="info" @click="handleUpdate(item, index)">更新</Button>
          <Button v-if="item.remove" type="warning" @click="handleRemove(item, index)">移除</Button>
          <Button v-if="item.del" type="error" @click="handleDelete(item, index)">删除</Button>
          </Col>
        </Row>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {resta} from '../../assets/rest'
  export default {
    data () {
      return {
        index: 1,
        formDynamic: {
          items: [
            {
              value: ''
            }
          ]
        },
        classList: [{
          value: 'video',
          name: '视频类别'
        }, {
          value: 'audio',
          name: '音频类别'
        }, {
          value: 'musicmap',
          name: '曲谱类别'
        }],
        typeClass: ''
      }
    },
    methods: {
      classChanged (value) {
        if (!value) return
        resta.get('/get' + value + 'type.do').done((res) => {
          this.formDynamic.items = res.typelist.map((type) => {
            return {
              id: type.id,
              value: type.typename,
              update: true,
              save: false,
              del: true
            }
          })
        })
      },
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('保存成功!')
          } else {
            this.$Message.error('保存失败!')
          }
        })
      },
      handleAdd () {
        this.index++
        this.formDynamic.items.unshift({
          value: '',
          update: false,
          save: true,
          del: false,
          remove: true
        })
      },
      handleSave (item, index) {
        if (item && item.value) {
          resta.post('/insert' + this.typeClass + 'type.do', {typename: item.value}, true).done((res) => {
            this.$Message.success('新增类别保存成功')
            item.id = res.id
            item.del = true
            item.remove = false
            item.update = true
            item.save = false
          })
        }
      },
      handleUpdate (item, index) {
        if (item && item.id && item.value) {
          resta.post('/update' + this.typeClass + 'type.do', {id: item.id, typename: item.value}, true).done((res) => {
            this.$Message.success('更新类别成功')
          })
        }
      },
      handleRemove (item, index) {
        this.formDynamic.items.splice(index, 1)
        this.$Message.success('类别已移除')
      },
      handleDelete (item, index) {
        if (item && item.id) {
          resta.post('/delete' + this.typeClass + 'type.do', {id: item.id}, true).done((res) => {
            this.formDynamic.items.splice(index, 1)
            this.$Message.success('删除类别成功')
          })
        }
      }
    }
  }
</script>
