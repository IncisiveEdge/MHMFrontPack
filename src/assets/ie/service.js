/**
 * Created by amarsoft on 2017/7/4.
 */
// import $ from 'jquery'

class DFInfoService {
  queryInfoTplElements (dono) {
    console.log(dono)
  }

  queryInfoData (dono, dfArgs, hasCodeMap, _hasCodeParam) {
    console.log(dono, dfArgs, hasCodeMap, _hasCodeParam)
  }

  queryInfo (dono, owArgs, _hasCodeParam) {
    console.log(dono, owArgs, _hasCodeParam)
  }

  saveInfoData (dono, data) {
    console.log(dono, data)
  }

  saveInfoDataSync (dono, data) {
    console.log(dono, data)
  }

  validate (dono, data) {
    return new DFValidateService().validate(dono, [data])
  }
}

class DFValidateService {
  validate (dono, data) {
    console.log(dono, data)
  }
}

export default {
  DFInfoService,
  DFValidateService

}
