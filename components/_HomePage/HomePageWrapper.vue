<template>
  <div class="wrapper container">
    <div class="wrapper-slider">
      <WrapperSlider />
    </div>
    <div class="wrapper-action">
      <div class="wrapper-title">
        <span class="wrapper-action-eyebrow subtitle">
          {{ $t('home.wrapper.paragraph') }}
        </span>
        <h1 class="title">
          Подільский центр традиційного Карате-до Пєрєсвєт
        </h1>
      </div>
      <nuxt-link class="wrapper-btn button_type" to="articles/0"
        >{{ $t('home.wrapper.button') }}
        <span class="button_svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
          >
            <g>
              <polygon
                points="76.389,53.202 76.389,63.601 89.991,50.003 76.39,36.401 76.389,46.8 10.011,46.8 10.011,53.201  "
              />
            </g>
          </svg>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import WrapperSlider from '@/components/_HomePage/WrapperSlider.vue'
export default {
  components: {
    WrapperSlider
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_color.sass"
.button_svg svg
  fill: #fff
  height: 30px
  position: relative
  top: 5px
  left: 4px
  display: flex
  justify-content: center
  align-items: center
  transition: 0.2s ease
.wrapper-btn
  display: flex
  justify-content: flex-start
  align-items: center
.wrapper
  display: grid
  grid-template-columns: 60% 40%
  padding-top: 50px
  padding-bottom: 50px
  background: #101010
  box-sizing: border-box
  .wrapper-slider
    display: flex
    flex-direction: column
    justify-content: center
  .wrapper-action
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: baseline
    padding: 100px 50px 40px 50px
    background: $front-black
    .wrapper-action-eyebrow
      text-transform: uppercase
      margin: 0px
    h1
      margin: 0px
      margin-top: 20px
    .wrapper-btn
      border: 0px
      color: #fff
      text-decoration: none
      display: flex
      align-items: center
      width: auto
      transition: 0.2s ease
      &:hover
        color: #fff
        .button_svg svg
          fill: #fff
          left: 9px
@media screen and (max-width: 1440px)
  .wrapper
    display: grid
    grid-template-columns: 60% 40%
    padding-top: 50px
    padding-bottom: 50px
    background: #101010
    box-sizing: border-box
    .wrapper-action
      display: flex
      padding: 80px 10px 30px 50px
@media screen and (max-width: $large)
  .wrapper
    display: grid
    grid-template-columns: 57% 43%
    padding-top: 40px
    padding-bottom: 40px
    background: #101010
    box-sizing: border-box
    .wrapper-action
      display: flex
      padding: 80px 50px 20px 40px
      h1
        margin-top: 10px
@media screen and (max-width: $medium)
  .wrapper
    display: grid
    grid-template-columns: 100%
    .wrapper-action
      padding: 30px 30px 30px 30px
      h1
        margin-top: 20px
        margin-bottom: 45px
@media screen and (max-width: $tablet)
  .wrapper
    display: grid
    grid-template-columns: 100%
    padding: 0px
    .wrapper-action
      width: auto
      padding: 45px
      margin-top: 0px
      margin-bottom: 55px
      .wrapper-action-eyebrow
        margin-bottom: 30px
        margin-top: 30px
      .wrapper-btn
        display: flex
        justify-content: center
@media screen and (max-width: $mobile)
  .wrapper
    display: grid
    grid-template-columns: 100%
    padding: 0px
    .wrapper-action
      margin: 0
      padding: 10vw 7%
      text-align: left
      justify-content: center
      align-items: flex-start
      .wrapper-action-eyebrow
        margin-bottom: 33px
        margin-top: 22px
@media screen and (max-width: $extra)
  .wrapper
    display: grid
    grid-template-columns: 100%
    padding: 0px
    .wrapper-action
      margin: 0
      padding: 10vw 7%
      h1
        margin: 5vw 0px 10vw 0px
</style>
