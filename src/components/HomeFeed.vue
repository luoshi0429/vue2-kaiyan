<template>
  <div class="home-feed-item" @click="handleClick(feed)" :style="{ backgroundImage: `url(${feed.coverForFeed})` }">
    <h3 class="feed-title">{{ feed.title }}</h3>
    <p class="feed-info">{{ feedInfo }}</p>
    <!--<img class="feed-icon" :src="feed.coverForFeed" />-->
    <div class="cover"></div>
  </div>
</template>

<script>
  import { handleSecond } from '@/utils'
  export default {
    props: {
      feed: Object,
      handleClick: {
        type: Function,
        default: () => {}
      }
    },
    computed: {
      feedInfo () {
        const { category, duration} = this.feed
        return `#${category} / ${handleSecond(duration)}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .home-feed-item {
    position: relative;
    width: 100%;
    height: px2(225);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .home-feed-item:hover .cover {
    background: transparent;
  }

  .feed-title {
    font-size: px2(16);
    font-weight: 700;
  }

  .feed-info {
    font-size: px2(13);
    margin-top: px2(10);
  }
</style>

