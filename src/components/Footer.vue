<template>
  <div class="footer-container">
    <div class="app-desc">
      <div class="intro logoSprite"></div>
      <div class="icon logoSprite"></div>
      <div class="logo logoSprite"></div>
      <div class="download">
        <div class="ios logoSprite" @click="handleIOS"></div>
        <div class="android logoSprite" @click="handleAndroid"></div>
      </div>
    </div>
    <copyright />
  </div>
</template>

<script>
  import copyright from './Copyright'
  export default {
    props: {
      handleModal: {
        type: Function,
        default: () => {}
      }
    },
    components: { copyright },
    methods: {
      handleIOS () {
        window.open('https://itunes.apple.com/cn/app/%E5%BC%80%E7%9C%BC-eyepetizer-%E6%AF%8F%E6%97%A5%E7%B2%BE%E9%80%89%E8%A7%86%E9%A2%91%E6%8E%A8%E8%8D%90/id978591579?mt=8')
      },
      handleAndroid () {
        this.handleModal('android')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';

  .app-desc {
    background: #fff;
    padding: px2(60) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .intro {
    width: px2(285);
    height: px2(15);
    background-position: 0 100%;
    background-size: 285px;
    margin-bottom: px2(50);
  }

  .icon {
    width: px2(100);
    height: px2(100);
    background-position: 0 40.79045%;
    background-size: px2(428);
    border: 1px solid $border_color;
    border-radius: px2(20);
    margin-bottom: px2(30); 
  }

  .logo {
    width: px2(120);
    height: px2(75);
    background-position: 0 95.2381%;
    background-size: px2(642);
    margin-bottom: px2(30); 
  }

  .ios {
    width: px2(162);
    height: px2(52);
    background-position: 0 28.49707%;
    background-size: 642px;
    margin-bottom: px2(14);
  }

  .android {
    width: px2(162);
    height: px2(52);
    background-position: 0 14.3136%;
    background-size: 642px;
  }
</style>
