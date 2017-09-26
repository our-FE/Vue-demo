<template>
  <div>
    <panel header="联系人列表"  :list="list" type="3"></panel>
    <!--<panel header="对话列表" :footer="footer" :list="list" ></panel>-->
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
        type: '3',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '一',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '用户二',
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
