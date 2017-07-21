<template>
  <div id="app">
    <loading v-if="isLoading" />
    <div class="app-container">
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

  body {
    font-family: 'Lantinghei SC','Microsoft Yahei','Hiragino Sans GB','Helvetica Neue',Helvetica,Arial,'sans-serif';
    font-size: 14px;
    color: #333;
  }

  body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
      padding: 0;
      margin: 0;
      list-style: none;
      text-decoration: none;
      border: none;
      font-weight: normal;
      box-sizing: border-box;
      -webkit-tap-highlight-color:transparent;
      &:hover{
          outline: none;
      }
  }

  #app {
    height: 100%;
  }

  .app-container {
    height: 100%;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .logoSprite {
    background: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/sprite-s93ca05f687.023a526d.png') no-repeat;
  }

  .cover {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -10;
  }
</style>
