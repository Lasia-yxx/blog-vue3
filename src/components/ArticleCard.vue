<template>
  <div class="article-card-wrapper">
    <img class="cover" src="../assets/background.jpg">
    <div class="article-info">
      <div class="title">{{ data.title }}</div>
      <div class="info">{{ data.describe }}</div>
    </div>
    <div class="create-time">{{ data.createTime }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticleCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      style: '',
    };
  },
  mounted() {
    const value = Math.random() * 100;
    const str = `padding-bottom: ${value}px`;
    this.style = str;
  },
});
</script>

<style scoped>
.article-card-wrapper {
  position: relative;
  display: flex;
  width: 95%;
  overflow: hidden;
  word-break: break-all;
  background: #fff;
  border-radius: 16px;
  transition: 0.2s;
}

.cover {
  width: 400px;
  max-height: 340px;
  object-fit: cover;
}

/* .artilce-card-container:hover {

}

.artilce-card-container:active {

} */

.article-info {
  box-sizing: border-box;
  padding: 10px;
}

.title {
  display: -webkit-box;
  margin-bottom: 10px;
  overflow: hidden;
  font-weight: bold;
  font-size: 20px;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.2s color ease-out;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.title:hover {
  color: var(--themeColor);
}

.info {
  display: -webkit-box;
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  cursor: default;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.create-time {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-top: 20px;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  background-color: var(--themeColor);
  border-top-left-radius: 16px;
  user-select: none;
}
</style>
