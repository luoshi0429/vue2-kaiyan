<template>
  <div class="home-page">
    <top-screen />
    <div class="time">{{ time }}</div>
    <home-feed
      v-for="feed in feeds"
      :key="feed.id"
      :feed="feed"
      :handleClick="handleClick"
    />
    <foot />
  </div>
</template>

<script>
  import topScreen from '@/components/TopScreen'
  import homeFeed from '@/components/homeFeed'
  import foot from '@/components/Footer.vue'
  import { mapState, mapActions } from 'vuex'
  import { formatMonthDay } from '@/utils'
  export default {
    name: 'Home',
    components: {
      topScreen, homeFeed, foot
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
