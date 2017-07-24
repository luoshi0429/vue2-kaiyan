<template>
  <div class="video-detail-info">
    <h1 class="title">{{ videoDetail.title }}</h1>
    <div class="divider short-divider"></div>
    <p class="duration">{{ categoryAndDuraction }}</p>
    <p class="desc">{{ videoDetail.description }}</p>
  </div>
</template>

<script>
  import { handleSecond } from '@/utils'
  export default {
    props: {
      videoDetail: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    computed: {
      categoryAndDuraction () {
        return `# ${this.videoDetail.category} / ${handleSecond(this.videoDetail.duration)}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .video-detail-info {
    background: rgba(0, 0, 0, 0.2);
    padding: px2(15);
    padding-bottom: px2(4);
    font-size: px2(13);    
  }

  .title {
    font-size: px2(20);
    margin-bottom: px2(7);
  }

  .duration {
    line-height: 1.5;
    margin-bottom: px2(12);
  }

  .desc {
    line-height: 1.5;
    margin-bottom: px2(11);
    opacity: 0.85;
  }
</style>
