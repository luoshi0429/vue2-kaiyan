<template>
  <div class="footer-container">
    <div class="app-desc">
      <div class="intro logoSprite"></div>
      <div class="icon logoSprite"></div>
      <div class="logo logoSprite"></div>
      <div class="download">
        <div class="ios logoSprite"></div>
        <div class="android logoSprite"></div>
      </div>
    </div>
    <copyright />
  </div>
</template>

<script>
  import copyright from './Copyright'
  export default {
    components: { copyright }
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
