<template>
  <div class="home-page">
    <top-screen :handleModal="handleModal" />
    <div class="time">{{ time }}</div>
    <home-feed
      v-for="feed in feeds"
      :key="feed.id"
      :feed="feed"
      :handleClick="handleClick"
    />
    <foot :handleModal="handleModal" />
    <modal :style="{ display: !modalType ? 'none' : 'block' }" :handleClick="dismissModal" :modalType="modalType" />
  </div>
</template>

<script>
  import topScreen from '@/components/TopScreen'
  import homeFeed from '@/components/homeFeed'
  import foot from '@/components/Footer.vue'
  import modal from '@/components/Modal'
  import { mapState, mapActions } from 'vuex'
  import { formatMonthDay } from '@/utils'
  export default {
    name: 'Home',
    components: {
      topScreen, homeFeed, foot, modal
    },
    data () {
      return {
        modalType: ''
      }
    },
    computed: {
      feeds () {
        const { homeFeed } = this.$store.state
        console.log(this.$store.state)
        return homeFeed.length <= 3 ? homeFeed : homeFeed.slice(0, 3)
      },
      time () {
        return '-' + formatMonthDay() + '-'
      }
    },
    methods: {
      ...mapActions(['getHomeFeed']),
      handleClick (feed) {
        this.$router.push(`/detail/${feed.id}`)
      },
      handleModal (type) {
        switch (type) {
          case 'android':
          case 'wechat':
            this.modalType = type
            break
          default:
            break
        }
      },
      dismissModal () {
        this.modalType = ''
      }
    },
    created () {
      this.getHomeFeed()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .home-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .time {
    height: px2(90);
    line-height: px2(90);
    text-align: center;
    font-family: Lobster,cursive;
    font-size: px2($size_default);
  }
</style>
