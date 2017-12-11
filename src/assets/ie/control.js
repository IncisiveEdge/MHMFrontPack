/**
 * Created by amarsoft on 2017/7/4.
 */
  import $ from 'jquery'

  const ieControl = {}
  ieControl.block = (_message, _container) => {
    if (!(_container && _container instanceof Object && _container.length)) {
      console.error('遮罩容器不存在！')
      return
    }
    _message = _message || 'loading'
    const block = $(`<div class="loading-block">
                      <div>
                        <i class="ivu-icon ivu-icon-load-c spin-icon-load"></i>
                        <br/>
                        <span>${_message}</span>
                      </div>
                     </div>`)
    _container.css('position', 'relative')
    _container.prepend(block)
  }

  ieControl.unblock = (_container) => {
    if (!(_container && _container instanceof Object && _container.length)) {
      console.error('遮罩容器不存在！')
      return
    }
    $('.loading-block', _container).remove()
  }

  ieControl.url = (_url) => {
    return '/api' + _url
  }

  export default ieControl
