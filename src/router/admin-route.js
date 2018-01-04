/**
 * Created by amarsoft on 2017/10/15.
 */

import Video from '../components/admin/video'
import Audio from '../components/admin/audio'
import Opern from '../components/admin/opern'
import Debug from '../Debug'

export default [
  {
    path: '/video',
    name: 'video',
    component: Video
  }, {
    path: '/audio',
    name: 'audio',
    component: Audio
  }, {
    path: '/opern',
    name: 'opern',
    component: Opern
  }, {
    path: '/debug',
    name: 'debug',
    component: Debug
  }
]
