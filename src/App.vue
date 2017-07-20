<template>
  <div id="app">
    <loading v-if="isLoading" />
    <div v-else class="app-container">
      <router-view></router-view>
      <foot />
    </div>
  </div>
</template>

<script>
  import foot from '@/components/Footer.vue'
  import loading from '@/components/Loading'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapState(['isLoading'])
    },
    components: {
      foot,
      loading
    }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    overflow: hidden;
  }

  body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
      padding: 0;
      margin: 0;
      list-style: none;
      text-decoration: none;
      border: none;
      color: #333;
      font-weight: normal;
      font-family: PingFangSC-Light,helvetica,'Heiti SC';
      box-sizing: border-box;
      font-size: 14px;
      -webkit-tap-highlight-color:transparent;
      -webkit-font-smoothing: antialiased;
      &:hover{
          outline: none;
      }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
    height: 100%;
  }

  .app-container {
    
  }
</style>
