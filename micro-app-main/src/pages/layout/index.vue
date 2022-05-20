<template>
  <el-container class="global-layout-container">
    <el-header class="global-header-container">
      <div @click="$router.push('/app/message')">Message</div>
      <div @click="$router.push('/app/user')">User</div>
<!--      <div @click="$router.push('/app/order')">Order</div>-->

      <div style="font-size: 14px" @click="handleSend">发消息给子应用（Message）</div>
    </el-header>

    <el-main class="global-main-container">
      <template v-if="$route.name">
        <keep-alive>
          <router-view v-if="$route.meta.$keepAlive" />
        </keep-alive>

        <router-view v-if="!$route.meta.$keepAlive" />
      </template>

      <div id="frame"></div>
    </el-main>
  </el-container>
</template>

<script>
import StartQianKun from '@/core/index.js'
import actions from '@/core/actions'

export default {
  name: 'index',
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      StartQianKun()
    }

    // actions.onGlobalStateChange((nextState, prevState) => {
    //   console.log(nextState, prevState)
    // })
  },

  methods: {
    handleSend() {
      if (this.$route.path !== '/app/message') {
        alert('暂时只能给Message子应用发消息')
        return false
      }

      const message = prompt('请输入您要发的消息：')
      actions.setGlobalState({ message: message })
    }
  }
}
</script>

<style scoped lang="less">
.global-layout-container {
  height: 100%;

  .global-main-container {
    background-color: #e9eef3;
    overflow-y: auto;
  }

  .global-header-container {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;

    div {
      display: inline-block;
      font-size: 20px;
      padding: 0 20px;
      cursor: pointer;
    }
  }
}
</style>
