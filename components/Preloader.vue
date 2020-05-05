<template>
  <div class="preloader">
    <div class="preloader-img"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.preloader
    height: 100vh
    width: 100vw
    background: #ff3333
    position: fixed
    top: 0
    left: 0
    z-index: 2000
    display: flex
    flrx-direction: row
    justify-content: center
    align-items: center
    display: none
    .preloader-img
      background-image: url('~assets/images/preloader.jpg')
      background-color: #ff3333
      background-size: contain
      background-repeat: no-repeat
      background-blend-mode: screen
      height: 100%
      width: 600px
      display: block
      align-self: center
</style>
