<template>
  <div class="detail-footer">
    <router-link to="/">
      <div class="bottom-logo"></div>
    </router-link>
    <img class="qrcode" src="http://static.kaiyanapp.com/eyepetizer-web/assets/images/eyepetizer-wx-qr.243f15a2.png" />          
    <p class="qr-tip">长按二维码关注「开眼 Eyepetizer」微信公众号</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .detail-footer {
    padding-top: px2(40);
    padding-bottom: px2(60);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0,.4);
  }

  .bottom-logo {
    width: px2(90);
    height: px2(94);
    background: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/detail/bottom_logo@3x.556cae6b.png') no-repeat;
    background-size: cover;
    margin-bottom: px2(40);
  }

  .qrcode {
    display: inline-block;
    width: px2(80);
    margin-bottom: px2(20);
  }

  .qr-tip {
    font-size: px2(12);
    letter-spacing: px2(1);
    margin-bottom: px2(40);
  }
</style>
