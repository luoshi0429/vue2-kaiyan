<template>
  <div class="top-screen">
    <div class="menu">
      <button class="wechat" @click="handleWechat"></button>
      <button class="sina" @click="handleSina"></button>
      <button class="email" @click="handleEmail"></button>
    </div>
    <div class="content">
      <div class="logo logoSprite"></div>
      <div class="desc logoSprite"></div>
      <div class="download">
        <div class="ios logoSprite" @click="handleIOS"></div>
        <div class="android logoSprite" @click="handleAndroid"></div>
      </div>
    </div>
    <div class="cover"></div>
    <div class="img-list">
      <img 
        v-for="(img, index) in imgs"
        :key="index"
        :src="img"
        :class="index === currentIndex ? '' : 'hidden'"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      handleModal: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        currentIndex: 0,
        imgs: [
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_7.8b2d29b4.jpg',
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_6.54b06aad.jpg',
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_5.c48e7769.jpg',
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_4.c268348d.jpg',
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_3.7819585d.jpg',
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_2.6b1727b7.jpg',
          'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/home_bk_1.9583a28a.jpg'
        ]
      }
    },
    methods: {
      handleWechat () {
        this.handleModal('wechat')
      },
      handleSina () {
        // window.open('http://weibo.com/eyepetizer')
        window.location.href = 'http://weibo.com/eyepetizer'
      },
      handleEmail () {
        window.open('mailto:bd@eyepetizer.net')
      },
      handleIOS () {
        window.open('https://itunes.apple.com/cn/app/%E5%BC%80%E7%9C%BC-eyepetizer-%E6%AF%8F%E6%97%A5%E7%B2%BE%E9%80%89%E8%A7%86%E9%A2%91%E6%8E%A8%E8%8D%90/id978591579?mt=8')
      },
      handleAndroid () {
        this.handleModal('android')
      }
    },
    created () {
      const duration = this.currentIndex % 2 === 0 ? 8000 : 12000
      const beginAnimation = () => {
        this.currentIndex = this.currentIndex === this.imgs.length - 1 ? 0 : this.currentIndex + 1
        this.timeID = setTimeout(() => {
          beginAnimation()
        }, duration)
      }

      this.timeID = setTimeout(() => {
        beginAnimation()
      }, duration)
    },
    destroyed () {
      clearTimeout(this.timeID)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .top-screen {
    width: 100%;
    height: 100vh;
    position: relative;
    background: transparent;
  }

  .cover {
    z-index: -1;
  }

  .menu {
    width: 100%;
    text-align: right;
    margin-top: px2(10);
    position: absolute;
  }

  .menu button {
    width: px2(36);
    height: px2(36);
    padding: px2(2) px2(6) px2(3);
    margin-right: px2(10);
    background: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png') no-repeat;
    background-size: cover;
    outline: none;
  }

  .menu .wechat {
    background-position: 0 px2(-26);
  }

  .menu .sina {
    background-position: 0 px2(-63);
  }

  .menu .email {
    background-position: 0 0;
    background-size: px2(54);    
  }

  .logo {
    position: absolute;
    top: 28%;
    width: px2(120);
    height: px2(150);
    background-position: 0 81.02435%;
    background-size: px2(428);
    @include positionCenter;
  }

  .desc {
    position: absolute;
    top: 54%;
    width: px2(289);
    height: px2(44);
    background-position: 0 55.5773%;
    background-size: 528.59829px;
    @include positionCenter;
  }

  .download {
    position: absolute;
    top: 77%;
    width: px2(162);
    height: px2(124);
    @include positionCenter;
  }

  .ios {
    width: px2(162);
    height: px2(52);
    background-position: 0 21.40534%;
    background-size: 642px;
  }

  .android {
    width: px2(162);
    height: px2(52);
    background-position: 0 7.22186%;
    background-size: 642px;
    position: absolute;
    bottom: 0;
  }

  .img-list {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -100;
    overflow: hidden;    
  }

  .img-list img {
    position: absolute;
    width: 120%;
    animation: scaleBig 12s linear infinite;
    &:nth-child(odd) {
      animation: move 8s linear infinite;
    }
  }

  .hidden {
    display: none;
  }

  @keyframes move {
    from {
      transform: translateZ(0);
    }

    to {
      transform: translate3d(-5%, -3%, 0);
    }
  }

  @keyframes scaleBig {
    from {
      transform: scaleX(1);
    }

    to {
      transform: scale3d(1.3, 1.3, 1.3);
    }
  }
</style>
