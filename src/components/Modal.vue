<template>
  <div class="modal" @click="handleClick">
    <div class="content">
      <img :src="modalInfo.img" />
      <p v-for="(title, index) in modalInfo.titles" :key="index">{{ title }}</p>
      <a class="link" v-if="modalInfo.path" href="modalInfo.path.url">{{ modalInfo.path.title }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      handleClick: {
        type: Function,
        default: () => {}
      },
      modalType: String
    },
    data () {
      return {
        modals: {
          android: {
            img: 'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_scan_qr_android.8915ce9c.png',
            titles: ['扫描二维码', '下载 Android 版开眼'],
            path: {
              title: '点击直接下载 apk',
              url: 'http://release.cdn.kaiyanapp.com/files/eyepetizer/3.8.1.2.216/eyepetizer-eyepetizer_web.apk'
            }
          },
          wechat: {
            img: 'http://static.kaiyanapp.com/eyepetizer-web/assets/images/index/landing_wechat_account.53f45180.jpg',
            titles: ['扫描二维码', '关注「开眼」微信公众号']
          }
        }
      }
    },
    computed: {
      modalInfo () {
        return this.modals[this.modalType] || {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .modal {
    position: fixed;
    background: rgba(0,0,0,.3);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    text-align: center;
  }

  .content {
    width: 300px;
    padding-bottom: px2(20);
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: present 0.3s linear;
  }

  @keyframes present {
    from {
      opacity: 0.7;
      top: 55%;
    }
    to {
      opacity: 1;
      top: 50%;
    }
  }

  .content img {
    width: px2(300);
    height: px2(300);
  }

  .link { 
    color: #333;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
