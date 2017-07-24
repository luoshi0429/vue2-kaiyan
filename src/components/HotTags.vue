<template>
  <div class="hot-tags">
    <div class="title">热门标签</div>
    <div class="tag-list">
      <span
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
      >
       {{ tag.name }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
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
  .hot-tags {
    background-color: rgba(0,0,0,.4);
    border-bottom: 1px solid #fff;
  }

  .title {
    padding: px2(16) 0;
    text-align: center; 
  }

  .tag-list {
    padding: 0 px2(37) px2(16);
    text-align: center;
  }

  .tag {
    display: inline-block;
    background: hsla(0,0%,100%,.3);
    border-radius: px2(2);
    font-size: px2(12);
    letter-spacing: px2(3);
    line-height: px2(22);
    margin: px2(4);
    padding-left: px2(9);
    padding-right: px2(4); 
  }
</style>
