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
  </div>
</template>

<script>
  import topScreen from '@/components/TopScreen'
  import homeFeed from '@/components/homeFeed'
  import { mapState, mapActions } from 'vuex'
  import { formatMonthDay } from '@/utils'
  export default {
    name: 'Home',
    components: {
      topScreen, homeFeed
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
      console.log('------------')
      this.getHomeFeed()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .home-page {
    width: 100%;
  }

  .time {
    height: px2(90);
    line-height: px2(90);
    text-align: center;
    font-family: Lobster,cursive;
    font-size: px2($size_default);
  }
</style>
