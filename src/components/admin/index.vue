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

  .ivu-menu-vertical .ivu-menu-item{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    height: calc(100% - 73px);
  }

  .router-content{
    height: calc(100% - 40px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .content-router-view{
    height: 100%;
  }

  .layout-content-addition{
    font-size: larger;
    color: #aaa;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    padding: 10px 5px;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 2px 2px 0 0;
    text-align: center;
    width: 100%;
    color: #9ea7b4;
    position: absolute;
    bottom: 0;

  }

  .layout-menu-left {
    background: #464c5b;
    overflow: auto;
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
    /*background: #5b6270;*/
    background-color: white;
    color: #666;
    /*text-align: center;*/
    padding-left: 10px;
    border-radius: 3px;
    margin: 15px auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: larger;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
    height: 100%;
  }

  .ivu-tabs {
    height: 100%;
  }

  .ivu-tabs-bar{
    margin-bottom: 0;
  }

  .main-tabs-container > ul.nav-tabs > li.active {
    position: relative;
  }

  .tab-close,.tab-refresh{
    display: none;
    position:absolute;
    z-index:880;
    color:#ccc;
    -webkit-font-size:xx-small;
    -moz-font-size:x-small;
    font-size:xx-small;
    cursor: pointer;
  }
  .tab-close{
    top:4px;
    right:6px;
  }

  .tab-refresh{
    top:5px;
    left:2px;
  }

  li:hover >.tab-close{
    display: block;
  }

  li.active >.tab-close {
    display: block;
  }

  li.active:hover >.tab-refresh {
    display: block;
  }

  .tabsmore {
    float: right;
    position: relative;
    list-style: none;
    margin-top: -30px;
    padding-right: 5px;
  }
  .tabsmore a {
    text-decoration: none;
    color: #777;
  }

  .tabsmore a:hover {
    cursor: pointer;
  }

  .tabsmore .ivu-dropdown-menu>.ivu-dropdown-item{
    padding-right:5px !important;
  }


  .tabdrop {
    position: relative;
    list-style: none;
    margin-top: 10px;
    padding-right: 20px;
  }

  .tabdrop a {
    text-decoration: none;
    color: #777;
    cursor: pointer;
    z-index:900;
  }

  .collapse-tab {
    position: relative;
  }

  .remove-collapse-tab {
    color: #ccc;
    float: right;
  }

</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1" theme="dark" width="auto"  @on-select="selectItem" accordion>
          <div class="layout-logo-left">
            © Amarsoft
          </div>
          <MenuItem v-if="menuItem.visible !== false" v-for="(menuItem, index) in menuData" :id="'menu-item-'+ menuItem.id" :key="index" :name="index">
            <Icon :type="menuItem.icon" :size="iconSize"></Icon>
            <span class="layout-text" v-text="menuItem.name"></span>
          </MenuItem>
          <!--<Submenu v-for="(menuItem, index) in menuData" :id="'menu-item-'+ menuItem.id" :key="index" :name="index">-->
            <!--<template slot="title">-->
              <!--<Icon :type="menuItem.icon" :size="iconSize"></Icon>-->
              <!--<span class="layout-text" v-text="menuItem.name"></span>-->
            <!--</template>-->
            <!--<MenuItem v-if="menuItem.children && menuItem.children.length" v-for="(subMenuItem, subIndex) in menuItem.children" :id="'menu-item-'+ menuItem.id + '-' +subMenuItem.id" :key="subIndex" :name="index + '-' +subIndex">-->
              <!--<template>-->
                <!--<Icon :type="subMenuItem.icon" :size="iconSize"></Icon>-->
                <!--<span class="layout-text" v-text="subMenuItem.name"></span>-->
              <!--</template>-->
            <!--</MenuItem>-->
          <!--</Submenu>-->
        </Menu>
        <div class="layout-copy">
          2011-2017 &copy; Incisive Edge
        </div>
      </Col>
      <Col :span="spanRight" style="height: 100%">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
        <Dropdown trigger="click"  @on-click="closeTab">
          <Button type="text" style="padding: 6px 10px 6px 0">
            关闭
            <Icon type="arrow-down-b"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem name="other">关闭其他</DropdownItem>
            <DropdownItem name="all">关闭所有</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div class="layout-breadcrumb">
          <Breadcrumb v-if="activeTabItem && activeTabItem.breadcrumbData">
            <BreadcrumbItem href="#" v-for="(bcruItem, index) in activeTabItem.breadcrumbData" :key="index" v-text="bcruItem.name"></BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div style="position: absolute; right: 15px; top: 15px">
          <Dropdown trigger="click" style="margin-left: 20px"  @on-click="userOptions">
            <Button type="primary">
              用户：{{user.name}}
              <Icon type="arrow-down-b"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="view">查看</DropdownItem>
              <DropdownItem name="modify">修改</DropdownItem>
              <DropdownItem name="" disabled>管理</DropdownItem>
              <DropdownItem name="logout" divided>注销登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div class="layout-content">
        <div class="page-content-wrapper" id="main-content">
          <div class="page-content">
            <div class="main-tabs-container">
              <ul class="nav nav-tabs" ng-if="tabsData.length || tabsCollapse.length">
                <li v-for="(tabItem, index) in tabsData" :key="index" :class="{'active':tabItem.active}">
                  <div class="glyphicon glyphicon-remove tab-close" @click="closeTabItem(tabItem)"></div>
                  <div class="glyphicon glyphicon-refresh tab-refresh" @click="refreshTabContent(tabItem)"></div>
                  <a :title="tabItem.allName" @click="selectTabItem(tabItem)" :id="'tab-nav-'+tabItem.id" v-text="tabItem.header">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Dropdown class="tabsmore" v-if="tabsCollapse && tabsCollapse.length" placement="bottom-end" trigger="click">
          <a href="javascript:void(0)">
            <span class="badge" v-cloak v-text="tabsCollapse.length"></span>
            <b class="caret"></b>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item  v-for="(tabItem, index) in tabsCollapse" :key="index">
              <a class="collapse-tab" @click="openCollapseMenuInTabs(tabItem)">
                {{tabItem.header}}
                <b class="glyphicon glyphicon-remove remove-collapse-tab" @click="closeCollapseTabItem(tabItem,$event)">
                </b>
              </a>
            </Dropdown-item>
          </Dropdown-menu>
        </Dropdown>

        <div class="router-content" v-if="tabsDataStack.length">
          <!--<transition class="animate-content" mode="out-in" :enter-active-class="'animated '+config.animateIn" :leave-active-class="'animated '+config.animateOut">-->
            <!--<keep-alive>-->
          <router-view class="content-router-view"></router-view>
            <!--</keep-alive>-->
          <!--</transition>-->
        </div>
        <div class="layout-content-addition" v-else>
          暂无页面数据
        </div>
        <!--<Tabs type="card" closable :animated="false" @on-tab-remove="handleTabRemove">-->
          <!--<TabPane v-for="(item, index) in tabItems" :key="index" v-if="item.active" :label="item.name" :id="'tab-item-'+ item.id">-->
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
        <!--</Tabs>-->
        <!--<div class="layout-content-main">内容区域</div>-->
      </div>
      </Col>
    </Row>

  </div>
</template>
<script>
  import $ from 'jquery'
  import navPageFactory from '../../assets/js/nav-controller'
  import {resta} from '../../assets/rest'
  export default {
    name: 'AdminIndex',
    data () {
      return {
        spanLeft: 5,
        spanRight: 19,
        menuData: [{
          id: 'images',
          url: '/admin/images',
          name: '轮播图片',
          icon: 'aperture'
        }, {
          id: 'news',
          url: '/admin/news',
          name: '新闻管理',
          icon: 'compose'
        }, {
          id: 'matchs',
          url: '/admin/matchs',
          name: '赛事营地',
          icon: 'filing'
        }, {
          id: 'products',
          url: '/admin/products',
          name: '产品管理',
          icon: 'cube'
        }, {
          id: 'reports',
          url: '/admin/reports',
          name: '报告信息',
          icon: 'android-contacts'
        }],
        tabsData: [],
        tabsCollapse: [],
        tabsDataStack: [],
        tabContents: [],
        width: {},
        activeTabItem: {},
        user: {}
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      closeTab (name) {
        if (name === 'other') {
          this.closeOtherTabs()
        }
        if (name === 'all') {
          this.closeAllTabs()
        }
      },
      userOptions (name) {
        if (name === 'logout') {
          resta.get('/logout').done((res) => {
            if (res.body) {
              this.$Message.success('用户已注销！请重新登录')
              setTimeout(() => {
                this.$router.push({path: '/login'})
                window.location.reload()
              }, 2000)
            }
          })
        } else if (name === 'view') {
          const item = {
            id: 'user',
            url: '/admin/user',
            name: '用户信息查看',
            icon: 'cube',
            visible: false
          }
          this.menuData.push(item)
          this.selectMegaMenuItem(item)
        }
      },
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
      },
      selectItem (name) {
        name += ''
        const nameSplit = name.split('-')
        let item = {children: this.menuData}
        for (let i = 0; i < nameSplit.length; i++) {
          if (item && item.children && item.children.length) {
            item = item.children[Number(nameSplit[i])]
          }
        }
        this.selectMegaMenuItem(item)
      },
      selectMegaMenuItem (menuItem, flag) {
        // 点击三级菜单项弹出四级菜单项
//        if (flag && menuItem.children && menuItem.children.length) {
//          menuItem.isCollapse = !menuItem.isCollapse
//        }
//        if (!menuItem.children || !menuItem.children.length) {
//          this.openMenuInTabs(menuItem)
//        }
        this.openMenuInTabs(menuItem)
      },
      searchItemByUrl (url, items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].url === url) {
            return items[i]
          }
        }
      }
    },
    created () {
      resta.get('/getSessionUser').done((res) => {
        if (res.body) {
          this.user = res.body
        }
      })
      $.extend(this, navPageFactory)
      setTimeout(() => {
        const tabItem = this.searchItemByUrl(this.$route.path, this.menuData)
        if (tabItem) {
          tabItem.active = true
          this.selectMegaMenuItem(tabItem)
        }
//        this.selectMegaMenuItem(this.menuData[0])
        this.mainMenuResize(this, this)
        $('.ivu-tabs-bar').css('margin-bottom', '0')
        $('.ivu-tabs-content').css({'height': 'calc(100% - 48px)', 'overflow-y': 'auto', 'overflow-x': 'hidden', 'padding': '10px'})
      })
    }
  }
</script>

