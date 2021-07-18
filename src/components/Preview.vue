<!-- VueModal -->
<template>
  <div class="default-body markdown-body" v-html="generated.html"/>
</template>

<script>
export default {
  props: ['generated']
}

</script>

<style scoped>
@import "../style/github/github-markdown.css";
@import "../style/github/hljs-github.min.css";
@import "../style/github/pilcrow.css";
</style>
