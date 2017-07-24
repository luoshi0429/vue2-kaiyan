<template>
  <router-link class="related-video" :to="toPath">
    <img class="video-pic" :src="video.coverForDetail" />
    <div class="content">
      <h3>{{ video.title }}</h3>
      <p>{{ categoryAndDuration }}</p>
    </div>
  </router-link>
</template>

<script>
  import { handleSecond } from '@/utils'
  export default {
    props: {
      video: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    computed: {
      categoryAndDuration () {
        return `# ${this.video.category} / ${handleSecond(this.video.duration)}`
      },
      toPath () {
        return `/detail/${this.video.id}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .related-video {
    margin-bottom: px2(20);
    display: flex;
    align-items: center;
    color: #fff;
  }
  .video-pic {
    width: 40%;
  }

  .content {
    margin-left: px2(15);
    font-size: px2(13);
  }

  .content h3 {
    font-size: px2(14);
    margin-bottom: px2(5);
  }
</style>
