<template>
  <div>
    <Preloader />
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Preloader from '@/components/Preloader.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Preloader,
    NavBar,
    Footer
  },
  data() {
    return {
      mobileView: false,
      navOpen: false
    }
  }
}
</script>
<style lang="sass">
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_fonts.sass"
@import "~/assets/sass/_typography.sass"
html
  overflow-y: scroll
body
  background: #101010
  font-family: 'OpenSans'
  padding: 0px
  margin: 0px
  margin-top: 64px
  box-sizing: border-box
.container
  padding: 0px 12%
.heading-container
  padding: 10px 12%
.mobile-none
  display: grid
@media screen and (min-width: 2000px)
  body
    margin-top: 90px
  .container
    padding: 10px 0px
    width: 1440px
    margin: 0px auto
@media screen and (max-width: 1440px)
  .container
    padding: 10px 12%
@media screen and (max-width: $large)
  body
    margin-top: 70px
  .container
    padding: 10px 11%
  .heading-container
    padding: 10px 6%
@media screen and (max-width: $medium)
  body
    margin-top: 75px
  .container
    padding: 10px 6%
  .heading-container
    padding: 10px 4%
@media screen and (max-width: $tablet)
  body
    margin-top: 60px
  .container
    padding: 0px
  .heading-container
    padding: 10px 5%
@media screen and (max-width: $mobile)
  body
    margin-top: 52px
  .container
    padding: 0px 0px
  .heading-container
    padding: 10px 7%
  .mobile-none
    display: none!important
@media screen and (max-width: 375px)
  body
    margin-top: 46px
</style>
