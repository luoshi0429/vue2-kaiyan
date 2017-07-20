<template>
  <div class="loading-page">
    <div class="loading-out">
      <div class="loading-in"></div>      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../styles/index.scss';
  .loading-page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-out, .loading-in {
    width: px2($loading_width);
    height: px2($loading_height);
    background-size: cover;
    background-repeat: no-repeat;    
  }

  .loading-out {
    background-image: url('../assets/images/loading_out.png');
  }

  .loading-in {
    background-image: url('../assets/images/loading_in.png');
    animation: rotate 0.5s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform:  rotate(360deg);
    }
  }

</style>