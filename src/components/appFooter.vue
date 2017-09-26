<template>
  <tabbar>
    <tabbar-item badge="2" link="/">
      <img slot="icon" src="../assets/news.png">
      <span slot="label">微信</span>
    </tabbar-item>
    <tabbar-item show-dot link="list">
      <img slot="icon" src="../assets/list.png">
      <span slot="label">通讯录</span>
    </tabbar-item>
    <tabbar-item selected >
      <img slot="icon" src="../assets/wechat.png">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item link="personal">
      <img slot="icon" src="../assets/success.png">
      <span slot="label">我</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'app-footer',
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
//        msg: 'Hello World!'
      }
    }
  }
</script>

