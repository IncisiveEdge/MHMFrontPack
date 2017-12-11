/**
 * Created by amarsoft on 2017/10/18.
 */
const cookie = {
  set (name, value, days) {
    const d = new Date()
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString()
  },
  get (name) {
    const v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  },
  delete (name) {
    console.log(this, name)
    this.set(name, '', -1)
  }
}

export default cookie
