import $ from 'jquery'
// import rax from './rax/rax.js'
// import rax from './rax/rax'

const rax = {
  url () {
  },
  block () {

  },
  unblock () {

  }
}

let NavPageUtil = function () {
  function mainMenuResize (scope, obj) {
    $(window).resize(function () {
      // scope.width.contWidth = $('#main-nav').outerWidth()
      // if (scope.width.point + scope.width.contWidth >= scope.width.itemsWidth) {
      //   scope.width.point = scope.width.itemsWidth - scope.width.contWidth
      //   $('.layout-nav', $('#main-nav')).css('left', -scope.width.point + 'px')
      //   scope.rightActive = 0
      // } else {
      //   scope.rightActive = 1
      // }
      // if (scope.width.point < 0) {
      //   scope.width.point = 0
      //   $('.layout-nav', $('#main-nav')).css('left', scope.width.point + 'px')
      //   scope.leftActive = 0
      // }
      // tab页标签宽度自适应
      obj.tabsAutoLayout()
    })
  }
  function slipRightClick (scope) {
    scope.leftActive = 1
    if (scope.width.point >= 0 && scope.width.point < scope.width.itemsWidth - scope.width.contWidth) {
      let moveDistance = parseInt($('.layout-nav').css('left'))

      if (scope.width.point >= 0 && scope.width.point <= scope.width.itemsWidth - scope.width.contWidth) {
        if (scope.width.window < scope.width.itemsWidth - scope.width.contWidth - scope.width.point) {
          scope.width.point += scope.width.window
          moveDistance -= scope.width.window
        } else {
          scope.width.point = scope.width.itemsWidth - scope.width.contWidth
          moveDistance = -scope.width.point
          setTimeout(() => {
            scope.rightActive = 0
          }, 500)
        }
        $('.layout-nav').css('left', moveDistance + 'px')
      }
    }
  }
  function slipLeftClick (scope) {
    let moveDistance = parseInt($('.layout-nav').css('left'))
    scope.rightActive = 1
    if (scope.width.point >= 0 && scope.width.point <= scope.width.itemsWidth - scope.width.contWidth) {
      if (scope.width.window < scope.width.point) {
        scope.width.point -= scope.width.window
        moveDistance += scope.width.window
      } else {
        scope.width.point = 0
        moveDistance = -scope.width.point
        setTimeout(function () {
          scope.leftActive = 0
        }, 500)
      }
      $('.layout-nav').css('left', moveDistance + 'px')
    }
  }
  function pDMenuPosiAutoAdapt (elem) {
// 主导航内容
    const pElem = $('#main-nav')
// 弹出菜单内容
    const cElem = $('.pulldown-menu')
// 左滑动按钮
    // const sElem = $('#slipleft')
// 弹出菜单中的二级菜单项内容
    const section = $('.mega-menu-content')
// 弹出菜单盒模型padding+margin大小
    const boxOffset = parseInt(cElem.css('padding-left')) * 2 + parseInt(cElem.css('margin-left')) * 2
// console.log(pElem, cElem, sElem, section, boxOffset)
    const sumHeight = function (array, cols) {
      let height = 0
      let sum = 0
      // console.log(array.length/cols,array.length%cols)
      let rows = array.length % cols === 0 ? array.length / cols : parseInt(array.length / cols) + 1
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols && i * cols + j < array.length; j++) {
          if (array[i * cols + j] > height) {
            height = array[i * cols + j]
          }
        }
        sum += height
      }
      return sum
    }
    // 单个二级菜单内容宽度大于主导航内容的情况
    if (section.outerWidth() + boxOffset > pElem.outerWidth()) {
      return
    }

    // 左右边界
    let LeftBand = parseInt(pElem.offset().left)
    let RightBand = parseInt(pElem.offset().left + pElem.outerWidth())

    // 距离左右边界
    let toLeft = parseInt(elem.offset().left - LeftBand + elem.outerWidth() / 2)
    let toRight = parseInt(pElem.outerWidth() - toLeft)
    // 初始化靠左位置
    let left = LeftBand

    // 二级菜单内容总宽度
    let sumWidth = 0

    // 存储二级菜单高度
    let secHeight = []

    // 计算总宽度；三级菜单位置左对齐于二级菜单第一个字
    for (let i = 0; i < section.length; i++) {
      sumWidth += $(section[i]).outerWidth()
      // 获取二级菜单高度
      secHeight.push($(section[i]).outerHeight())
      let sec = $(section[i]).find('.sec-level-item').find('a').find('label').position().left - $(section[i]).find('.sec-level-item').position().left
      $(section[i]).find('.sub-mega-menu-content').css('padding-left', sec + 'px')
    }

    // 总宽度要加上盒模型宽度
    sumWidth += boxOffset

    // 自适应的列数、行数
    let nCol = 0

    // 行最大可容纳的列数
    let nSinLine = parseInt(pElem.outerWidth() / $('.mega-menu-content').outerWidth())

    // 弹出菜单宽度是否大于主导航宽度
    // 根据一级菜单相对于左右边界的位置和弹出菜单宽度可分为两种情况：
    // （1）小于时可分为三种情况：1，适合居中对齐；2，适合左对齐；3，适合右对齐
    // （2）大于时设置弹出菜单最大宽度为最大可容纳二级菜单内容的宽度，由于最大宽度可能小于主导航宽度，
    // 因此又可以分为三种情况，同小于主导航宽度的情形
    if (sumWidth > RightBand - LeftBand) {
      nCol = nSinLine
      sumWidth = RightBand - LeftBand - (RightBand - LeftBand - boxOffset) % $('.mega-menu-content').outerWidth()
      // 给滚动条腾出位置s
      if (sumHeight(secHeight, nCol) > cElem.outerHeight()) {
        sumWidth += 18
      }
      cElem.css('max-width', sumWidth + 'px')
      // 解决浏览器宽度加大时，弹出菜单没有跟随一级菜单项的bug
      cElem.css('width', sumWidth + 'px')
      if (sumWidth / 2 <= toLeft && sumWidth / 2 <= toRight) {
        cElem.css('left', left + toLeft - sumWidth / 2 + 'px')
      } else if (sumWidth / 2 < toLeft && sumWidth / 2 > toRight) {
        cElem.css('left', RightBand - sumWidth + 'px')
      } else if (sumWidth / 2 < toRight && sumWidth / 2 > toLeft) {
        cElem.css('left', left + 'px')
      } else {
        console.log('bug')
      }
    } else {
      nCol = (sumWidth - boxOffset) / $('.mega-menu-content').outerWidth()

      // 给滚动条腾出位置
      if (sumHeight(secHeight, nCol) > cElem.outerHeight()) {
        sumWidth += 18
      }
      // 解决浏览器宽度加大时，弹出菜单没有跟随一级菜单项的bug
      if (cElem.outerWidth() !== sumWidth) {
        cElem.css('width', sumWidth + 'px')
      }
      if (sumWidth / 2 <= toLeft && sumWidth / 2 <= toRight) {
        cElem.css('left', left + toLeft - sumWidth / 2 + 'px')
      } else if (sumWidth / 2 < toLeft && sumWidth / 2 > toRight) {
        cElem.css('left', RightBand - sumWidth + 'px')
      } else if (sumWidth / 2 < toRight && sumWidth / 2 > toLeft) {
        cElem.css('left', left + 'px')
      } else {
        console.log('bug')
      }
    }
  }

  function tabsAutoLayout () {
    if (this.tabsData.length === 0) return
    /* '$('.tabsmore').outerWidth()是浮动的，width不一定能读出来，用50代替 */
    let navTabsWidth = $('.nav-tabs').outerWidth() - 50
    let subWidth = navTabsWidth - this.oldNavTabsWidth
    if (Math.abs(subWidth) > 200) {
      let index = 0
      //   激活的tab
      let currTab = null
      if (this.tabsData.length) {
        for (let i = 0; i < this.tabsData.length; i++) {
          if (this.tabsData[i].active) {
            currTab = this.tabsData[i]
            this.tabsData.splice(i, 1)
            break
          }
        }
      }

      this.currTabsWidth = currTab.width ? currTab.width : 0
      let sumData = this.tabsData.slice().concat(this.tabsCollapse)

      for (let i = 1; i <= sumData.length; i++) {
        if (this.currTabsWidth + sumData[i - 1].width <= navTabsWidth) {
          this.currTabsWidth += sumData[i - 1].width
          index = i
        } else break
      }

      this.tabsData = sumData.splice(0, index)
      this.tabsData.push(currTab)
      this.tabsCollapse = sumData
    } else {
      let last = this.tabsCollapse[this.tabsCollapse.length - 1]
      let first = this.tabsData[this.tabsData.length - 1]
      if (first) {
        if (navTabsWidth <= this.currTabsWidth && this.tabsData.length > 1) {
          if (first.active) {
            first = this.tabsData[this.tabsData.length - 2]
            this.tabsData.splice(this.tabsData.length - 2, 1)
          } else {
            first = this.tabsData.pop()
          }
          this.tabsCollapse.push(first)
          this.currTabsWidth -= (first.width)
        }
      }
      if (last) {
        if (navTabsWidth - this.currTabsWidth > last.width) {
          last = this.tabsCollapse.pop()
          // this.tabsData.insertAt(this.tabsData.length - 1, last)
          this.tabsData.push(last)
          this.currTabsWidth += last.width
        }
      }
    }
    this.oldNavTabsWidth = navTabsWidth
  }

  function refreshTabContent (item, params) {
    this.$router.push({path: '/_empty'})
    setTimeout(() => {
      this.routeTo(item)
    })
  }

  function tabReplaceWidthAutoAdapt (newTab) {
    let tabsWidth = this.oldNavTabsWidth
    let firstWidth = 0
    this.currTabsWidth = 0
    for (let i = 0; i < this.tabsData.length - 1; i++) {
      this.currTabsWidth += this.tabsData[i].width
    }

    //  如果要显示的tab宽度与隐藏的tab宽度大于所剩空间，再隐藏一个tab
    if (this.currTabsWidth + newTab.width > tabsWidth) {
      firstWidth = this.tabsData[0].width
      this.currTabsWidth -= firstWidth
      this.tabsCollapse.push(this.tabsData.shift())
      if (this.currTabsWidth + newTab.width > tabsWidth) {
        firstWidth = this.tabsData[0].width
        this.currTabsWidth -= firstWidth
        this.tabsCollapse.push(this.tabsData.shift())
      }
    }
    this.currTabsWidth += newTab.width
  }

  function findTabItem (id, items) {
    items = items || this.tabsData
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        return items[i]
      }
    }
  }

  function openInTab (url, tabId, name, headerData, isCell) {
    if (this.tabsData.length + this.tabsCollapse.length >= 30) {
      // rax.popDomModal({
      //   'title': '请您选择',
      //   'content': '打开页面过多，请选择以下操作：',
      //   'buttons': [
      //     ['取消', 'cancel', 'glyphicon glyphicon-ban-circle', 'btn-default'],
      //     ['关闭其他', 'closeOthers', 'glyphicon glyphicon-warning-sign', 'btn-DetailInfo'],
      //     ['关闭所有', 'closeAll', 'glyphicon glyphicon-warning-sign', 'btn-danger']
      //   ]
      // }).done(function (r) {
      //   if (r.handle === 'closeOthers') {
      //     this.closeOtherTabs()
      //   }
      //   if (r.handle === 'closeAll') {
      //     this.closeAllTabs()
      //   }
      // }).fail(function () {
      //   rax.notify('自定义对话框取消了')
      // })
      return
    }
    let tabItem = this.findTabItem(tabId)
    // let contentItem = this.findTabContent(tabId)
    let allname = name
    if (!tabItem) {
      tabItem = {
        id: tabId,
        header: name,
        allName: allname,
        url: url,
        isCell: isCell,
        active: true
      }

      tabItem.breadcrumbData = headerData
      const collapseItem = this.findTabItem(tabId, this.tabsCollapse)
      if (collapseItem) {
        Array.prototype.splice.call(this.tabsCollapse, this.tabsCollapse.indexOf(collapseItem), 1)
        Array.prototype.splice.call(this.tabsDataStack, this.tabsDataStack.indexOf(collapseItem), 1)
      }
      this.tabsData.push(tabItem)
      this.tabsDataStack.push(tabItem)
    }
    // if (!contentItem) {
    //   contentItem = {
    //     id: tabId,
    //     url: url
    //   }
    //
    //   this.tabContents.push(contentItem)
    // }
    this.selectTabItem(tabItem)
    // 当前tab数总宽度超过tab面板宽度时，隐藏tabsData中的若干tab到tabsCollapse中,达到自适应效果
    setTimeout(() => {
      // 窗口未变化时tab容器（父元素）的宽度
      let tabsmoreWidth = $('.tabsmore').outerWidth() || 0
      this.oldNavTabsWidth = +$('.nav-tabs').outerWidth() - tabsmoreWidth
      // tab加载完成后求解tab宽度并绑定到tab中
      tabItem.width = $('#tab-nav-' + tabItem.id).outerWidth()
      // tab容器宽度自适应
      this.tabReplaceWidthAutoAdapt(tabItem)
    })
  }

  function parseQuery (url) {
    if (!url) return
    const index = url.indexOf('?')
    if (index !== -1) {
      const paramString = url.substring(index + 1).split('&')
      let query = {}
      paramString.forEach(item => {
        const itemSplit = item.split('=')
        if (itemSplit && itemSplit.length === 2) {
          query[itemSplit[0].trim()] = itemSplit[1].trim()
        }
      })
      return query
    }
  }

  function routeTo (menuItem, keepAlive) {
    let path = menuItem.url.replace('.jsp', '')
    path.indexOf('/') === 0 && (path = path.substring(1))
    let index = path.indexOf('?')
    const query = parseQuery(path)
    if (index !== -1) {
      path = path.substring(0, index)
    }
    path = '/' + path
    const route = {
      path,
      query,
      meta: { keepAlive: true }
    }
    this.$router.push(route)
  }

  function openCollapseMenuInTabs (menuItem) {
    // console.log(menuItem.header);

    // console.log($scope.tabsCollapse.splice(findItemIndex($scope.tabsCollapse, menuItem),1)[0]);
    this.tabsCollapse.push(this.tabsData.shift())

    let currItem = this.tabsCollapse.splice(this.tabsCollapse.indexOf(menuItem), 1)[0]
    this.tabsData.push(currItem)
    // tab容器宽度自适应
    this.tabReplaceWidthAutoAdapt(currItem)
    this.selectTabItem(currItem)
    // 这里注意tabs的布局没有监控，可能出现异常！！！！
  }

  function openMenuInTabs (menuItem) {
    // 页面刷新后保留刷新前当前tab页，将它置入tabsData中
    if (!this.tabsData) {
      this.tabsData.push(menuItem)
    }
    this.openInTab(menuItem.url, menuItem.id, menuItem.name, this.buildBreadcrumb(menuItem).reverse(), 0)
  }

  function openPageInTabs (url, tabName, header) {
    let tabId = $.md5(url)
    this.openInTab(url, tabId, tabName, [{'name': header}], 1)

    // 构造一个假的菜单出来，之前设计有考虑不周全
    setTimeout(function () {
      // openMenuContent({ "id": tabId, "url": url, "accessType": "iframe" });
      // this.openMenuContent({
      //   'accessType': 'iframe',
      //   'children': [],
      //   'iconClass': '',
      //   'id': tabId,
      //   'name': tabName,
      //   'param': '',
      //   'url': url
      // })
    })
  }

  function selectTabItem (tabItem, isNav) {
    for (let i = 0; i < this.tabsData.length; i++) {
      this.tabsData[i].active = false
    }
    tabItem.active = true
    for (let j = 0; j < this.tabContents.length; j++) {
      this.tabContents[j].active = false
    }
    for (let j = 0; j < this.tabContents.length; j++) {
      if (tabItem.id === this.tabContents[j].id) {
        this.tabContents[j].active = true
      }
    }
    if (!tabItem.isCell) {
      // $location.hash(tabItem.id)
    }
    this.routeTo(tabItem)
    this.activeTabItem = tabItem
  }

  function closeAllTabs () {
    this.tabsData = []
    this.tabsDataStack = []
    this.tabsCollapse = []
    this.tabContents = []
    this.currTabsWidth = []
  }

  function closeOtherTabs () {
    let activeItem = this.tabsData[this.findActiveTabIdx()]
    let activeContent = this.findActiveContent()
    this.tabsData = []
    this.tabsDataStack = []
    this.tabsCollapse = []
    this.tabContents = []
    if (activeItem) {
      this.tabsData.push(activeItem)
      this.tabsDataStack.push(activeItem)
      this.currTabsWidth = activeItem.width
    }
    if (activeContent) {
      this.tabContents.push(activeContent)
    }
  }

  function findActiveTabIdx () {
    let activeTabIdx
    for (let i = 0; i < this.tabsData.length; i++) {
      if (this.tabsData[i].active === true) {
        activeTabIdx = i
        break
      }
    }
    return activeTabIdx
  }

  function findActiveContent () {
    let activeContent
    for (let i = 0; i < this.tabContents.length; i++) {
      if (this.tabContents[i].active === true) {
        activeContent = this.tabContents[i]
        break
      }
    }
    return activeContent
  }

  function getActiveTab () {
    for (let i = 0; i < this.tabsData.length; i++) {
      if (this.tabsData[i].active === true) {
        return this.tabsData[i]
      }
    }
    return
  }

  function closeCollapseTabItem (tabItem, $event) {
    $event.stopPropagation()
    this.tabsCollapse.splice(this.tabsCollapse.indexOf(tabItem), 1)
    this.tabsDataStack.splice(this.tabsDataStack.indexOf(tabItem), 1)
  }

  function closeCurrTab (index) {
    let idx = index || this.findActiveTabIdx()
    let tabItem = this.tabsData[idx]
    let preTab

    if (this.tabsCollapse.length === 0 && this.tabsData.length === 1) {
      this.tabsData.splice(idx, 1)
      this.tabsDataStack = []
      this.tabContents = []
      return
    }

    if (this.tabsDataStack.indexOf(tabItem) === 0) {
      preTab = this.tabsDataStack[1]
    } else {
      preTab = this.tabsDataStack[this.tabsDataStack.indexOf(tabItem) - 1]
    }

    if (this.tabsCollapse.indexOf(preTab) === -1) {
      this.selectTabItem(preTab)
      this.tabsData.splice(idx, 1)
      this.tabsDataStack.splice(this.tabsDataStack.indexOf(tabItem), 1)
      if (this.tabsCollapse.length) {
        this.tabCollapseToData()
      }
    } else {
      this.tabsData.splice(idx, 1)
      this.tabsCollapse.splice(this.tabsCollapse.indexOf(preTab), 1)
      this.tabsData.push(preTab)
      this.selectTabItem(preTab)
      this.tabsDataStack.splice(this.tabsDataStack.indexOf(tabItem), 1)
      this.tabReplaceWidthAutoAdapt(preTab)
    }
  }

  function closeTabItem (tabItem) {
    let idx = this.tabsData.indexOf(tabItem)
    let idxActive = this.findActiveTabIdx()

    if (idx !== idxActive) {
      this.tabsData.splice(idx, 1)
      this.tabsDataStack.splice(this.tabsDataStack.indexOf(tabItem), 1)
      if (this.tabsCollapse.length) {
        this.tabCollapseToData()
      }
    } else {
      this.closeCurrTab(idx)
    }
  }

  function tabCollapseToData () {
    let currItem = this.tabsCollapse.shift()
    this.tabsData.push(currItem)
    // tab容器宽度自适应
    this.tabReplaceWidthAutoAdapt(currItem)
    // $scope.selectTabItem(currItem);
  }

  function buildBreadcrumb (menuItem) {
    let bcru = []
    let current = menuItem
    while (current) {
      bcru.push(current)
      current = current.parent
    }
    return bcru
  }

  function parseParam (parameters) {
    let pObject = {}
    parameters.split('&').forEach(function (param) {
      param = param.split('=')
      pObject[param[0]] = param[1]
    })
    return pObject
  }

  function _getParaString (sPara) {
    if (typeof (sPara) === 'undefined' || sPara === '') {
      return ''
    } else if (sPara.substring(0, 1) === '&') {
      return encodeURI(encodeURI(sPara))
    } else {
      return '&' + encodeURI(encodeURI(sPara))
    }
  }

  function openMenuContent (menuItem) {
    // 由于ng-repeat可能没有渲染完毕，因此这里用个定时器等一下，完成后，就清除定时是器
    // console.log("open in tabs:"+menuItem.name);
    if (!menuItem.url) return
    let timer = setInterval(function () {
      // console.log("定时器。。。")
      // var container = $(".tab-content",$("#containter-"+menuItem.id))
      let container = $('.tab-content').find('#containter-' + menuItem.id)
      if (container.size() > 0) {
        clearInterval(timer)
        // console.log("定时器-end。。。");
        // this.loadFileToFrame(container, menuItem)
      }
    }, 100)
  }

  function alsOpenComponent (iframe, menuItem, params) {
    // let ifrname = this.genIframeName(menuItem)
    // var sPageURL = rax.url("/Redirector")+"?ComponentURL="+menuItem.url+_getParaString(menuItem.param);
    // iframe.attr("src",sPageURL);
    // window.open(sPageURL, ifrname)
    if (params) {
      let paramsStr = ''
      for (let i in params) {
        paramsStr += (i + '=' + params[i]) + '&'
      }
      menuItem.param = menuItem.param || ''
      if (menuItem.param) {
        menuItem.param += '&'
      }
      menuItem.param += paramsStr.substring(0, paramsStr.length - 1)
    }
    let urlParam = this._getParaString(menuItem.param)
    if (urlParam.startWith('&')) urlParam = urlParam.substring(1)
    urlParam = urlParam ? ('?' + urlParam) : ''
    console.log('load:' + rax.url(menuItem.url) + urlParam)
    iframe.attr('src', rax.url(menuItem.url) + urlParam)

    // var blockContainer = "#tab-content-" + menuItem.id;
    let blockContainer = $('#containter-' + menuItem.id)

    blockContainer.css('height', this.iframeAutoAdaptHeight() + 'px')

    // 设置主内容容器高度为自适应屏幕高度
    const iframeWait = () => {
      // rax.blockUI({
      //     target:blockContainer,
      //     message: '加载中...'
      // });
      rax.block('加载中...', blockContainer)
    }

    const iframeComplete = iframe => {
      iframe.binding = this
      // angular.element('.content-iframe').css('height', iframeAutoAdaptHeight() + 'px');
      rax.unblock(blockContainer)
    }

    iframeWait()

    if (iframe[0].attachEvent) {
      iframe[0].attachEvent('onload', function () {
        iframeComplete(iframe[0])
      })
    } else {
      iframe[0].onload = function () {
        iframeComplete(iframe[0])
      }
    }
  }

  function treeIterator (data, attr, value) {
    console.warn(222222, data, attr, value)
    function ti (data, index) {
      let node = data
      let children = node.children
      if (!(children && children.length)) {
        return
      }

      while (index < children.length) {
        if (typeof attr === 'function') {
          attr(children[index])
        } else {
          children[index][attr] = value
        }
        ti(children[index], 0)
        index++
      }
    }
    ti(data, 0)
  }

  return {
    buildBreadcrumb,
    closeAllTabs,
    closeCollapseTabItem,
    closeCurrTab,
    closeOtherTabs,
    closeTabItem,
    findActiveContent,
    findActiveTabIdx,
    findTabItem,
    getActiveTab,
    _getParaString,
    mainMenuResize,
    openCollapseMenuInTabs,
    openInTab,
    openMenuContent,
    openMenuInTabs,
    openPageInTabs,
    parseParam,
    pDMenuPosiAutoAdapt,
    refreshTabContent,
    routeTo,
    selectTabItem,
    slipLeftClick,
    slipRightClick,
    tabCollapseToData,
    tabReplaceWidthAutoAdapt,
    tabsAutoLayout,
    treeIterator,
    alsOpenComponent
  }
}

const navPageFactory = NavPageUtil()
export default navPageFactory

