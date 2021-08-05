<!-- VueModal -->
<template>
  <div class="default-body markdown-body" v-html="generated.html"/>
</template>

<script>
// 代码高亮样式
import 'highlight.js/styles/github.css';
export default {
  props: ['generated']
}

</script>

<style scoped>
/* 通用markdown样式 */
@import "../style/github/github-markdown.css";
/* @import "../style/github/hljs-github.min.css"; */
@import "../style/github/pilcrow.css";

/deep/img {
  max-width: 700px;
  object-fit: contain;
}
</style>
