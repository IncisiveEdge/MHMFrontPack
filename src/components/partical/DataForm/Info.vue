<style>

</style>

<style scoped>
  .dataform-info-wrapper{
    padding: 10px;
  }

  .ie-fieldset{
    margin: 0 10px 50px;
  }

  .form-group{
    width: 100%;
    margin-top: 15px;
  }

</style>

<template>
    <div class="dataform-info-wrapper">
        <ie-fieldset v-for="{name, sortNo, items} in template" ref="Panel" :name="name" :key="sortNo" :id="'fieldset-' + sortNo">
          <div slot="content" class="fieldset-content">
            <Form :label-width="80" class="form-group clearfloat">
              <ie-form-item v-if="items && items.length" v-for="(item, index) in items" :key="index" :item="item" :data="data"></ie-form-item>
            </Form>
          </div>
        </ie-fieldset>
    </div>
</template>

<script>
  import ieFieldset from './Fieldset'
  import ieFormItem from './FormItem'
  export default {
    name: 'detailInfo',
    components: {
      ieFieldset,
      ieFormItem
    },
    props: {
      template: {
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
