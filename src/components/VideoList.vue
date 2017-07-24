<template>
  <div class="video-list">
    <related-video
      v-for="video in relatedVideos"
      :key="video.id"
      :video="video"
    />
  </div>
</template>

<script>
  import relatedVideo from './RelatedVideo'
  export default {
    components: { relatedVideo },
    props: {
      relatedVideos: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .video-list {
    padding: px2(20) px2(15) px2(10);
    background: rgba(0,0,0,.4);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }
</style>
