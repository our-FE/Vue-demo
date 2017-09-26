<template>
  <div>
    <panel header="对话列表"  :list="list" ></panel>
    <app-footer></app-footer>
  </div>

</template>

<script>
  import { Panel, Group, Radio } from 'vux'
  import AppFooter from '../components/appFooter'
  export default {
//    name: 'user-list',
    components: {
      Panel,
      Group,
      Radio,
      AppFooter
    },
    data () {
      return {
        type: '5',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '用户一',
          desc: '这是我和你的对话',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '用户二',
          desc: '哩个系俄同你葛对话',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }],
        footer: {
          title: '查看更多',
          url: 'http://vux.li'
        }
      }
    }
  }
</script>

