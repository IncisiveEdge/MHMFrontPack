const objectkit = {
  isJSON: function (obj) {
    let isjson = typeof (obj) === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length
    return isjson
  },
  deepClone: function (obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  equals: function (v1, v2) {
    if (typeof (v1) === 'object' && objectkit.isJSON(v1) && typeof (v2) === 'object' && objectkit.isJSON(v2)) {
      return JSON.stringify(v1) === JSON.stringify(v2)
    } else {
      return v1 === v2
    }
  }
}

