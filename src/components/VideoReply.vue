<template>
  <div class="video-reply">
    <img class="avatar" :src="reply.user.avatar" />
    <div class="content">
      <div class="row">
        <span class="nickname">{{ reply.user.nickname }}</span>
        <div class="like">
          <span>{{ reply.likeCount }}</span>
          <i></i>
        </div>
      </div>
      <div class="row">
        <span class="time">{{ time }}</span>
        <div class="hot" v-if="reply.hot">- Hot -</div>
      </div>
      <div class="reply">{{ reply.message }}</div>
    </div>
  </div>
</template>

<script>
  import { formateDate } from '@/utils'
  export default {
    props: {
      reply: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    computed: {
      time () {
        return formateDate(this.reply.createTime)
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../styles/index.scss';
  .video-reply {
    display: flex;
    padding-bottom: px2(15);
  }

  .avatar {
    width: px2(36);
    height: px2(36);
    margin: 0 px2(13);
    border-radius: 50%;
  }

  .content {
    flex: 1;
    font-size: px2(12);    
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding-right: px2(16);
    margin-bottom: px2(4);
  }

  .hot {
    font-family: Lobster,cursive;
  }

  .like i {
    display: inline-block;
    background: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_like_grey@3x.d2a2a2a8.png') no-repeat;
    width: px2(15);
    height: px2(15);
    background-position: 50%;
    background-size: cover;
  }

  .time {
    opacity: 0.6;
  }

  .reply {
    margin-bottom: px2(15);
    padding-right: px2(35);
  }
</style>
