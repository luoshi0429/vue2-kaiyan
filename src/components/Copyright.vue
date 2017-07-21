<template>
  <div class="copyright">
    <ul class="copy-list" v-for="(list, index) in lists" :key="'ul-' + index">
      <li class="copy-item" v-for="item in list" :key="item.title">
        <a v-if="item.path" :href="item.path">{{ item.title }}</a>
        <span v-else>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lists: [
          [
            { title: '意见反馈', path: 'mailto:bd@eyepetizer.net?subject=[意见反馈]' },
            { title: '用户协议', path: 'http://www.eyepetizer.net/agreement.html' },
            { title: '权利声明', path: 'http://www.eyepetizer.net/right.html' },
            { title: '商务合作', path: 'http://www.eyepetizer.net/positions.html' },
            { title: '加入我们', path: 'http://www.eyepetizer.net/positions.html' },
            { title: '关于我们', path: 'http://www.eyepetizer.net/about_us.html' }
          ],
          [
            { title: '© 开眼 Eyepetizer 2015 - 2017' },
            { title: '京 ICP 备16030848 号', path: 'http://www.miitbeian.gov.cn/' },
            { title: '京 ICP 证161038 号', path: 'http://www.miitbeian.gov.cn/' }
          ]
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .copyright {
    background: #444;
    padding: px2(65) px2(10);
  }

  .copy-list {
    text-align: center;
    margin-bottom: px2(10);
    font-size: 0;
  }
  
  .copy-item {
    display: inline-block;
    color: #fff;
    font-size: px2(12);
    &:after {
      content: '·'
    }
  }

  .copy-item a {
    color: #fff;
  }

  .copy-item span {
  }

</style>

