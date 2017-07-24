<template>
  <div class="detail-page">
    <div class="detail-container">
      <video-player :videoDetail="videoDetail" />
      <div class="video-content" :style="{ backgroundImage: `url(${videoDetail.coverBlurred})` }">
        <video-info :videoDetail="videoDetail" />
        <video-list :relatedVideos="relatedVideo.videoList" />
        <video-reply-list :videoReply="videoReply" />
        <hot-tags :tags="videoDetail.tags" />
        <detail-footer />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import videoPlayer from '@/components/VideoPlayer'
  import videoInfo from '@/components/VideoInfo'
  import videoList from '@/components/VideoList'
  import videoReplyList from '@/components/VideoReplyList'
  import hotTags from '@/components/HotTags'
  import detailFooter from '@/components/DetailFooter'
  export default {
    components: { videoPlayer, videoInfo, videoList, videoReplyList, hotTags, detailFooter },
    computed: {
      ...mapState(['videoDetail', 'relatedVideo', 'videoReply'])
    },
    methods: {
      ...mapActions(['getVideo'])
    },
    created () {
      this.getVideo(this.$route.params.id)
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .detail-page {
    background: #333;
    color: #fff;
    height: 100%;
    overflow-y: auto;
  }

  .detail-container {
    max-width: 700px;
    margin: 0 auto;
  }

  .video-content {
    // background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
  }
</style>

