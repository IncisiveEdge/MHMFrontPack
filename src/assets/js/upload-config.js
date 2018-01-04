/**
 * Created by amarsoft on 2017/12/17.
 */

export function getUploadConfig (config, object, target, attr) {
  const name = config.name || '上传'
  const method = config.method || 'uploadfile'
  const accept = config.accept || '*'
  const maxSize = config.maxSize || 500
  const format = config.format || []
  const methodName = config.methodName || ''
  return {
    name,
    method,
    methodName,
    accept,
    maxSize,
    format,
    defaultFiles: (() => {
      if (target[attr]) {
        let fileName = target[attr].split('/')
        fileName = fileName[fileName.length - 1]
        return [{
          name: fileName,
          url: target[attr]
        }]
      }
    })(),
    before: () => {
      if (target[attr]) {
        object.$Message.warning('上传文件已存在，如需重新上传请先移除')
      }
      return !target[attr]
    },
    success: (res, file, fileList) => {
      if (res) {
        target[attr] = res.url
        object.$Message.success(res.original + ' 上传成功')
      }
    },
    remove: (file, fileList) => {
      target[attr] = ''
      object.$Message.success(file.name + ' 已移除')
    },
    preview: (file) => {
      const url = file.url || (file.response && file.response.url)
      if (!url) {
        object.$Message.warning('文件地址错误，请查询')
        return
      }
      // url && object.$refs.viewer.show(ie.url(url))
    }
  }
}
