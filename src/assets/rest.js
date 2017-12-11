/**
 * Created by amarsoft on 2017/8/23.
 */
const $ = require('jquery')
let rest = {}
let resta = {}
const ctxPath = '/api'
function restAjax (method, url, parameter, _isAsync, objectTransfer) {
  const _deferred = $.Deferred()
  let returnVal = _deferred
  const reqURL = rest.path(url)
  const _object_mode = objectTransfer || false
  let _contentType = 'application/x-www-form-urlencoded charset=UTF-8'
  let _processData = true
  let hasArray = false
  if (!_object_mode) {
    if ($.type(parameter) === 'string' && parameter.indexOf('&') > 0) {
      const strParameter = parameter
      const items = strParameter.split('&')
      parameter = {}
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let pair = item.split('=')
        if (pair.length === 0) continue
        if (pair.length === 1) pair[1] = ''
        parameter[pair[0]] = pair[1]
      }
    }
    // 如果是json对象，则处理下编码问题
    if ($.isPlainObject(parameter)) {
      for (let k in parameter) {
        let v = parameter[k]
        if (!$.isArray(v)) {
          parameter[k] = encodeURI(encodeURI(parameter[k]))
        } else {
          hasArray = true
        }
      }
    }
  } else {
    _contentType = 'application/json; charset=utf-8'
    _processData = false
    if ($.isPlainObject(parameter)) {
      parameter = JSON.stringify(parameter)
    }
  }
  if (hasArray) parameter = $.param(parameter, true)
  //  如果callback有值，则使用异步模式
  let _async = _isAsync || false
  $.ajax({
    type: method,
    url: reqURL,
    dataType: 'json',
    async: _async,
    cache: false,
    data: parameter,
    contentType: _contentType,
    processData: _processData,
    beforeSend: function (xmlHttpRequest) {
      // xmlHttpRequest.setRequestHeader('Allow','GET,POST,DELETE,PUT,OPTIONS');
      // xmlHttpRequest.setRequestHeader('Accept','application/json');
      // xmlHttpRequest.setRequestHeader('Content-Type','application/json; charset=UTF-8');
    },
    error: function (xmlHttpRequest, textStatus, errorThrown) {
      if (_isAsync && _deferred) {
        _deferred.reject()
      }
      if (xmlHttpRequest.status === 404) {
        alert('pfm.rest.PageNotFound', reqURL)
        return
      } else if (xmlHttpRequest.status === 401) {
        // rax.showSessionTimeout()
      } else if (xmlHttpRequest.status === 0) {
        console.warn('HTTP返回状态0')
      } else {
        console.error(xmlHttpRequest.responseText)
        alert('请求URL[' + reqURL + ']出错。错误代码:' + xmlHttpRequest.status)
        this // 调用本次AJAX请求时传递的options参数
      }
      returnVal = {}
    },
    success: function (data, textStatus) {
      // if (!data) {
      //   alert('pfm.rest.RspDataIsNull', reqURL)
      //   return
      // }
      // if (!data.header) {
      //   alert('pfm.rest.RspHeaderIsNull', reqURL)
      //   return
      // }
      // if (!data.header.code === 'SUCESS') {
      //   if (!data.body) {
      //     alert('pfm.rest.RspBodyIsNull', reqURL)
      //     return
      //   }
      //   if (!data.body.content) {
      //     alert('pfm.rest.RspBodyContentIsNull', reqURL)
      //     return
      //   }
      // }
      let repData = data
      // 异步模式下，进行promise处理
      if (_isAsync) {
        _deferred.resolve(repData)
      } else {
        returnVal = repData
      }
    }
  })
  return returnVal
}

rest.path = function (url) {
  return ctxPath + url
}
rest.get = function (url, parameter) {
  return restAjax('GET', url, parameter, false)
}
rest.post = function (url, parameter, objectTransfer) {
  return restAjax('POST', url, parameter, false, objectTransfer)
}
rest.put = function (url, parameter, objectTransfer) {
  return restAjax('PUT', url, parameter, false, objectTransfer)
}
rest.del = function (url, parameter) {
  return restAjax('DELETE', url, parameter, false)
}
// 异步API：对外公开接口
resta.get = function (url, parameter) {
  return restAjax('GET', url, parameter, true)
}
resta.post = function (url, parameter, objectTransfer) {
  return restAjax('POST', url, parameter, true, objectTransfer)
}
resta.put = function (url, parameter, objectTransfer) {
  return restAjax('PUT', url, parameter, true, objectTransfer)
}
resta.del = function (url, parameter) {
  return restAjax('DELETE', url, parameter, true)
}

export {
  rest,
  resta
}
