/**
 * Created by amarsoft on 2017/10/15.
 */

// import Index from '../Components/admin/index'
import Type from '../Components/admin/type'
import Video from '../components/admin/video'
import Audio from '../components/admin/audio'
import Opern from '../components/admin/opern'
import NotFound from '../404'
import Debug from '../Debug'

export default [
  {
    path: '/MusicHandManage/type',
    name: 'type',
    component: Type
  }, {
    path: '/MusicHandManage/video',
    name: 'video',
    component: Video
  }, {
    path: '/MusicHandManage/audio',
    name: 'audio',
    component: Audio
  }, {
    path: '/MusicHandManage/opern',
    name: 'opern',
    component: Opern
  }, {
    path: '/MusicHandManage/debug',
    name: 'debug',
    component: Debug
  }, {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
]
