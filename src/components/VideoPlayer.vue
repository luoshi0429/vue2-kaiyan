<template>
  <div class="video-container">
    <div class="video-player">
      <video :controls="isPlaying" :src="videoDetail.playUrl">
      </video>
      <div
        v-if="!isPlaying"
        class="player-button"
        :style="{ backgroundImage: 'url(' + videoDetail.coverForDetail + ')' }"
        @click="handlePlay"
      >
        <div class="btn"></div>
      </div>
    </div>
  </div> 
</template>

<script>
  export default {
    props: {
      videoDetail: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        isPlaying: false
      }
    },
    methods: {
      handlePlay () {
        this.isPlaying = !this.isPlaying
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .video-container {
    width: 100%;
  }
  .video-player {
    width: 100%;
    height: 0;
    padding-bottom: 57%;
    background: transparent;
    position: relative;
  }

  .video-player video {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .player-button {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    width: px2(60);
    height: px2(60);
    background: url('http://static.kaiyanapp.com/eyepetizer-web/assets/images/detail/icon_play@2x.3b9f9ba5.png') no-repeat;
    background-size: cover;
  }
</style>
