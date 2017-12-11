<style>

</style>

<style scoped>

</style>

<template>
  <div style="margin-top: 20px">
    <Form :model="setting" :label-width="100">
      <Row>
        <Col :xs="24" :sm="24" :md="12" :lg="12">
        <FormItem label="图片设置">
          <ButtonGroup>
            <Button type="primary" icon="social-designernews" @click="popModal(1)">图片池</Button>
            <Button type="warning" icon="ionic" @click="popModal(2)">轮播图片设置</Button>
          </ButtonGroup>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="12" :lg="12">
        <FormItem label="自动切换速度">
          <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="12" :lg="12">
        <FormItem label="宽高比(1 - 4)">
          <Slider v-model="pictureRadio" :tip-format="format" :min="25"></Slider>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="12" :lg="12">
        <FormItem label="指示器位置">
          <RadioGroup v-model="setting.dots" type="button">
            <Radio label="inside">内部</Radio>
            <Radio label="outside">外部</Radio>
            <Radio label="none">不显示</Radio>
          </RadioGroup>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="12" :lg="12" span="12">
        <FormItem label="切换箭头">
          <RadioGroup v-model="setting.arrow" type="button">
            <Radio label="hover">悬停时显示</Radio>
            <Radio label="always">一直显示</Radio>
            <Radio label="never">不显示</Radio>
          </RadioGroup>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="8" :lg="8" span="8">
        <FormItem label="自动切换">
          <i-switch v-model="setting.autoplay">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </i-switch>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="8" :lg="8" span="8">
        <FormItem label="指示器触发方式">
          <RadioGroup v-model="setting.trigger" type="button">
            <Radio label="click">点击</Radio>
            <Radio label="hover">悬停</Radio>
          </RadioGroup>
        </FormItem>
        </Col>
        <Col :xs="24" :sm="24" :md="8" :lg="8" span="8">

        </Col>
      </Row>
    </Form>
    <i-modal :modal="modal">
      <div slot="content">
        <div v-show="modalType === 1">
          <img-modify ref="modify" :model="images"></img-modify>
        </div>
        <div v-show="modalType === 2">
          <img-transfer :data="selectableImages" :target="selectedImages" :setting="transferSetting">
          </img-transfer>
        </div>
      </div>
    </i-modal>
  </div>

</template>

<script>
  import IModal from '../Modal'
  import ImgTransfer from './ImageTransfer'
  import {IEListObject} from '../../../assets/IEList'
  import ImgModify from './imageModify'
  import $ from 'jquery'

  export default {
    name: 'ImgCarouselController',
    props: ['setting'],
    components: {
      IModal,
      ImgTransfer,
      ImgModify
    },
    data () {
      return {
        images: new IEListObject('ieList', this),
        modal: {
          model: false,
          title: '测试',
          textOk: '保存',
          textCancel: '取消',
          onOk: () => {
            this.modal.model = false
          },
          onCancel: () => {
            this.modal.model = false
          }
        },
        modalType: 0,
        selectableImages: [],
        selectedImages: [],
        transferSetting: {
          render: function (item) {
            return item.key + ':' + item.description
          },
          onChange: (targetKey, direction, moveKey) => {
            this.selectedImages = targetKey
            const bool = direction === 'right'
            moveKey.forEach(key => {
              this.selectableImages[+key - 1].visible = bool
            })
            this.selectableImages.sort((a, b) => +a.key - +b.key)
            this.selectedImages.sort((a, b) => +a - +b)
          },
          filterable: true,
          filterMethod: function () {

          },
          bridgeName: ['移除', '添加'],
          listStyle: {
            width: '340px',
            height: '400px'
          },
          placeholder: '',
          filterPlaceholder: '检索图片...',
          titles: ['可选图片', '轮播图片'],
          selectedKeys: [],
          options: []
        },
        listData: this.selectableImages,
        tplData: [{
          key: 'description',
          title: '描述'
        }, {
          key: 'disabled',
          title: '禁用'
        }, {
          key: 'key',
          title: '编号'
        }, {
          key: 'label',
          title: '标签'
        }]
      }
    },
    computed: {
      pictureRadio: {
        get () {
          return this.setting.imageRadio / 4 * 100
        },
        set (value) {
          this.setting.imageRadio = Number((value / 100 * 4).toFixed(2))
        }
      }
    },
    methods: {
      format (val) {
        return (val / 100 * 4).toFixed(2)
      },
      popModal (type) {
        this.modalType = type
        if (type === 1) {
          const m = {
            width: 900,
            title: '轮播图片'
          }
          $.extend(this.modal, m)
        } else if (type === 2) {
          const m = {
            width: 800,
            title: '轮播图片设置'
          }
          this.selectedImages = this.getTargetKeys()
          $.extend(this.modal, m)
        }
        this.modal.model = true
      },
      getMockData () {
        let mockData = []
        for (let i = 1; i <= 20; i++) {
          mockData.push({
            key: i.toString(),
            label: '内容' + i,
            description: '内容' + i + '的描述信息',
            visible: false,
            src: parseInt(new Date().getTime() * Math.random())
//            disabled: Math.random() * 3 < 1
          })
        }
        return mockData
      },
      getTargetKeys () {
        return this.selectableImages
          .filter((item) => item.visible)
          .map(item => item.key)
      }
    },
    created () {
      this.selectableImages = this.getMockData()
      this.selectedImages = this.getTargetKeys()
      this.images.setItemsPerPage(5)
      const tplData = [{
        key: 'description',
        title: '描述'
      }, {
        key: 'visible',
        title: '是否开启轮播'
      }, {
        key: 'key',
        title: '编号'
      }, {
        key: 'label',
        title: '标签'
      }, {
        key: 'src',
        title: '图片地址'
      }]

      this.images.setElement({
        key: 'visible',
        render: (h, params) => {
          return h('iSwitch', {
            props: {
              value: params.row.visible
            },
            on: {
              'on-change': (value) => {
                for (let i = 0; i < this.images.listData.length; i++) {
                  if (this.images.listData[i].key === params.row.key) {
                    this.images.listData[i].visible = value
                    return
                  }
                }
              }
            },
            scopedSlots: {
              open: props => h('span', '开'),
              close: props => h('span', '关')
            }
          })
        }
      })

      this.images.renderOnly(this.selectableImages, tplData)
    }
  }
</script>
