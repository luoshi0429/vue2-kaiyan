<template>
  <div id="app">
    <loading v-if="isLoading" />
    <router-view></router-view>
  </div>
</template>

<script>
  import loading from '@/components/Loading'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapState(['isLoading'])
    },
    components: {
      loading
    }
}
</script>

<style lang="scss">
  @import './styles/index.scss';
  html, body {
    height: 100%;
    overflow: hidden;
  }

  body {
    font-family: 'Lantinghei SC','Microsoft Yahei','Hiragino Sans GB','Helvetica Neue',Helvetica,Arial,'sans-serif';
    font-size: 13px;
    color: #333;
  }

  body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4,h5, h6, i, b, textarea, button, input, select, figure, figcaption {
      padding: 0;
      margin: 0;
      list-style: none;
      text-decoration: none;
      border: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color:transparent;
      &:hover{
          outline: none;
      }
  }

  #app {
    height: 100%;
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
  }

  .divider {
    height: px2(1);
    background: #fff;
    margin-bottom: px2(7);
  }

  .short-divider {
    width: px2(40);
  }
</style>
