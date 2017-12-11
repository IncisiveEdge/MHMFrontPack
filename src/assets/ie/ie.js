/**
 * Created by amarsoft on 2017/7/4.
 */
import $ from 'jquery'
import ieControl from './control'
import ieService from './service'
const ie = {df: {}}
$.extend(ie.df, ieService)
$.extend(ie, ieControl)
export default ie
