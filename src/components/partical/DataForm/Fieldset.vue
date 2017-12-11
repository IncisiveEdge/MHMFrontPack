<style>

</style>

<style scoped>
  .ie-fieldset{
    border: none;
    margin-top: 15px;
  }
  .ie-legend{
    border: none;
    position: relative;
  }
  .legend-title{
    top: -15px;
    left: 0;
    position: absolute;
    font-size: x-small;
    text-decoration: none;
    background-color: #666;
    color: white;
    display: inline-block;
    padding:5px;
    margin-left:20px;
    border-radius: 5px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 200px;
    text-overflow: ellipsis;
    z-index: 900;
  }

  .group-field{
    padding: 20px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 5px 5px 0 0;
    overflow-x: auto;
  }

  .group-field-noborder{
    border: transparent;
  }

  .group-content-addition{
    cursor: pointer;
  }
</style>

<template>
  <fieldset class="ie-fieldset" :id="id">
    <legend class="ie-legend">
      <a class="legend-title" href="javascript:void(0);" @click="toggle">
        <i v-if="active" class="ivu-icon ivu-icon-minus"></i>
        <i v-else class="ivu-icon ivu-icon-plus"></i>
        <i v-if="icon" v-class="icon"></i>
        <span class="legend-title-label" v-text="name"></span>
      </a>
    </legend>
    <div class="group-field">
    <collapse-transition>
      <div class="group-content" v-if="active"><slot name="content"></slot></div>
      <span class="group-content-addition" @click="toggle" v-else>...</span>
    </collapse-transition>
    </div>

  </fieldset>
</template>

<script>
  import collapseTransition from '../../../../node_modules/iview/src/components/base/collapse-transition'
  export default {
    name: 'ieFieldset',
    props: ['name', 'id', 'icon'],
    components: {
      collapseTransition
    },
    data () {
      return {
        active: true
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      }
    }
  }
</script>
