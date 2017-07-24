<template>
  <div class="video-reply-list">
    <div class="title">热门评论</div>
    <div class="content">
      <video-reply
        v-for="reply in videoReply.replyList"
        :key="reply.id"
        :reply="reply"
      />
    </div>
    <div class="more">
      <button>下载开眼客户端，查看更多精彩评论！</button>
    </div>
  </div>
</template>

<script>
  import videoReply from './VideoReply'
  export default {
    components: { videoReply },
    props: {
      videoReply: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .video-reply-list {
    color: #fff;
    background: rgba(0,0,0,.4);
    border-bottom: 1px solid #fff;
  }

  .title {
    padding: px2(16) 0 px2(10);
    text-align: center;
  }

  .more {
    padding: 0 px2(16);
  }

  .more button {
    outline: none;
    width: 100%;
    background: hsla(0,0%,100%,.3);
    border-radius: px2(2);
    border: none;
    margin-bottom: px2(16);
    line-height: px2(32);
    color: #fff;
  }
</style>
