<style scoped>
  html, body {
    height: 100%;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .ivu-row-flex {
    height: 100%;
  }

  .layout-breadcrumb {
    padding: 0 15px;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px 0;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    height: calc(100% - 140px);
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
  }

  .layout-logo-left {
    width: 90%;
    height: 40px;
    line-height: 40px;
    background: #5b6270;
    /*text-align: center;*/
    padding-left: 10px;
    border-radius: 3px;
    margin: 15px auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }

  .ivu-tabs {
    height: 100%;
  }

  .ivu-tabs-bar{
    margin-bottom: 0;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1" theme="dark" width="auto">
        <div class="layout-logo-left">
          <span style="color: rgb(45, 140, 240);font-size: larger">
            Ice 创客基地管理系统
          </span>
        </div>
        <MenuItem v-for="(item, index) in navData" :id="'menu-item-'+ item.field" :key="index" :name="index">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text" v-text="item.name"></span>
        </MenuItem>
      </Menu>
      </Col>
      <Col :span="spanRight" style="height: 100%">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="#">首页</BreadcrumbItem>
            <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
            <BreadcrumbItem>某应用</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>

      <div class="layout-content">
        <Tabs type="card" closable :animated="false" @on-tab-remove="handleTabRemove">
          <!--<TabPane v-for="(item, index) in tabItems" :key="index" v-if="item.active" :label="item.name" :id="'tab-item-'+ item.field">-->
          <!--</TabPane>-->
          <!--<TabPane label="标签一">-->
          <!--<div class="layout-content-main">-->
          <!--<router-view></router-view>-->
          <!--</div>-->
          <!--</TabPane>-->
          <!--<TabPane label="标签二" v-if="tab1">-->
          <!--</TabPane>-->
          <!--<TabPane label="标签三" v-if="tab2">-->
          <!--</TabPane>-->
        </Tabs>
        <!--<div class="layout-content-main">内容区域</div>-->
      </div>

      <div class="layout-copy">
        2011-2017 &copy; Ice
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    name: 'AdminIndex',
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        navData: [{
          field: 'images',
          name: '轮播图片',
          icon: 'aperture'
        }, {
          field: 'news',
          name: '新闻管理',
          icon: 'compose'
        }, {
          field: 'matchs',
          name: '赛事营地',
          icon: 'filing'
        }, {
          field: 'products',
          name: '产品管理',
          icon: 'cube'
        }, {
          field: 'reports',
          name: '报告信息',
          icon: 'android-contacts'
        }],
        tabsData: []
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      },
      handleTabRemove (name) {
        this['tab' + name] = false
      }
    },
    created () {
      setTimeout(function () {
        $('.ivu-tabs-bar').css('margin-bottom', '0')
        $('.ivu-tabs-content').css({'height': 'calc(100% - 48px)', 'overflow-y': 'auto', 'overflow-x': 'hidden', 'padding': '10px'})
      })
    }
  }
</script>

