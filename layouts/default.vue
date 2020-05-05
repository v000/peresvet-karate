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
  font-family: 'Roboto', sans-serif
  padding: 0px
  margin: 0px
  margin-top: 90px
  background: #fff
.container
  padding: 10px 7%
.heading-container
  padding: 10px 10%
.mobile-none
  display: grid
@media screen and (max-width: $large)
  body
    margin-top: 85px
  .container
    padding: 10px 6%
  .heading-container
    padding: 10px 6%
@media screen and (max-width: $medium)
  body
    margin-top: 75px
  .container
    padding: 10px 7%
  .heading-container
    padding: 10px 4%
@media screen and (max-width: $tablet)
  .container
    padding: 10px 4%
  .heading-container
    padding: 10px 4%
@media screen and (max-width: $mobile)
  body
    margin-top: 68px
  .container
    padding: 0px 0px
  .heading-container
    padding: 10px 2%
  .mobile-none
    display: none!important
@media screen and (max-width: 370px)
  body
    margin-top: 60px
</style>
