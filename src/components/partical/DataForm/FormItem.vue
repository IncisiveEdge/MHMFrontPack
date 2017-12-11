<style>

</style>

<style scoped>
  .form-item{
    position: relative;
    margin-bottom: 10px;
    padding-right: 30px;
  }

  .form-cell{
    /*min-width: 200px;*/
  }

  .form-required{
    color: red;
    position: absolute;
    left: -10px;
    top: -2px;
  }
</style>

<template>
  <Form-item class="form-item" :label="item.name" :class="'response-layout-' + item.elementUIHint.layoutCols">
    <i class="form-required" v-if="item.elementUIHint.required">*</i>
    <Input readonly class="form-cell" v-if="item.elementUIHint.editStyle === 'Text'" v-model="data[item.code]" placeholder="请输入"/>
    <Select class="form-cell" v-if="item.elementUIHint.editStyle === 'DictCodePicker'" placeholder="请选择">
      <Option value="beijing">北京市</Option>
    </Select>
    <Date-picker class="form-cell" v-if="item.elementUIHint.editStyle === 'DatePicker'" type="date" placeholder="选择日期" >
    </Date-picker>
    <Date-picker class="form-cell" v-if="item.elementUIHint.editStyle === 'YearMonthPicker'" type="month" placeholder="选择年月" >
    </Date-picker>
    <Radio-group class="form-cell" v-if="item.elementUIHint.editStyle === 'RadioBox'">
      <Radio label="male">男</Radio>
      <Radio label="female">女</Radio>
    </Radio-group>
    <Checkbox-group class="form-cell" v-if="item.elementUIHint.editStyle === 'CheckBox'">
      <Checkbox label="吃饭"></Checkbox>
      <Checkbox label="睡觉"></Checkbox>
    </Checkbox-group>
    <Input class="form-cell" v-if="item.elementUIHint.editStyle === 'TextArea'" v-model="data[item.code]" type="textarea" placeholder="请输入..."/>
  </Form-item>
</template>

<script>
  export default {
    name: 'formItem',
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      },
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>
