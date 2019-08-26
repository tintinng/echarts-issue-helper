<template>
  <nav class="app-header">
    <div class="container">
      <a class="brand" href="#">
        <img
          class="logo"
          src="../assets/images/logo.png"
          alt="Vue's logo"
          height="24"
        >
        Issue Helper
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['lang']
}
</script>

<style lang="stylus" scoped>
@import "../style/imports"

.app-header
  background-color #162436

  &,
  .container,
  .brand,
  .nav
    h-box()
    box-center()

  .container
    max-width $page-width
    flex 100% 1 1
    justify-content space-between
    padding 12px
    box-sizing border-box

  .brand
    color #fff
    .logo
      margin-right 8px

  .nav
    margin 0

  .nav-item
    list-style none
    a
      color #a9334c
  .nav-item + .nav-item
    margin-left 8px

  .nav-link
    cursor default
    &:not(.active)
      cursor pointer
      color #fff

</style>
