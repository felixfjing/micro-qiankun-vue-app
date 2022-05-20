<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <section>Micro-App-Message</section>

    <section v-if="state">
      <section>{{ state.original }}</section>

      <section v-if="state.message">主应用发来的消息：{{ state.message }}</section>
    </section>
  </div>
</template>

<script>
import actions from '@/core/actions'

export default {
  name: 'home',
  components: {},

  data() {
    return {
      state: null
    }
  },

  mounted() {
    // 添加观察者
    // onGlobalStateChange 第二个入参为 true，代表立即执行一次观察者函数
    actions.onGlobalStateChange((nextState) => {
      console.log('Message', nextState)
      this.state = nextState
    }, true)
  }
}
</script>
