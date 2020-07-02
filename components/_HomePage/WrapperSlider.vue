<template>
  <div class="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide"></div>
        <div class="swiper-slide slide1"></div>
        <div class="swiper-slide slide2"></div>
        <div class="swiper-slide slide3"></div>
        <div class="swiper-slide slide4"></div>
      </div>
    </div>
    <div class="swiper_buttons">
      <div class="swiper-button-prev-unique">
        <svg
          id="Layer_1"
          style="enable-background:new 0 0 512 512;"
          version="1.1"
          viewBox="0 0 512 512"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <polygon
            points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 "
          />
        </svg>
      </div>
      <div class="swiper-button-next-unique">
        <svg
          id="Layer_1"
          style="enable-background:new 0 0 512 512;"
          version="1.1"
          viewBox="0 0 512 512"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <polygon
            points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 "
          />
        </svg>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000
        },
        navigation: {
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      })
      mySwiper.init()
    }
  }
}
</script>
<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_color.sass"
.slide
  background-image: url('~assets/images/wrapper-slider/slide.jpg')
  background-size: cover
  background-position: center top
.slide1
  background-image: url('~assets/images/wrapper-slider/slide1.jpg')
  background-size: cover
  background-position: center top
.slide2
  background-image: url('~assets/images/wrapper-slider/slide2.jpg')
  background-size: cover
  background-position: center top
.slide3
  background-image: url('~assets/images/wrapper-slider/slide3.jpg')
  background-size: cover
  background-position: center top
  background-size: 120%
.slide4
  background-image: url('~assets/images/wrapper-slider/slide4.jpg')
  background-size: cover
  background-position: center top
.slider
  position: relative
  height: 27vw
  width: 100%
.swiper-container
  position: relative
  height: 100%
  width: 100%
  z-index: 0
  float: left
.swiper-wrapper
  width: 100%
.swiper-slide
  width: 100%
.swiper_buttons
  z-index: 1
  display: flex
  align-self: center
  position: absolute
  justify-content: space-between
  height: 40px
  width: 80px
  left: calc(100% + 34px)
  top: 20px
  right: 0
.swiper-button-prev-unique
  width:  40px
  height: 40px
  color: #fff
  background-color: $front-black
  cursor: pointer
  transition: 0.2s ease-out
  display: flex
  justify-content: center
  align-items: center
  position: relative
  box-sizing: border-box
  &:hover
    background: #5e5e5e
  &:focus
    outline: 0px
  svg
    fill: #fff
    transform: rotate(-90deg)
    height: 14px
    opacity: 1
.swiper-pagination
  position: absolute
  top: 20px
  left: 133%
  width: 30%
  height: 30px
  margin-top: 5px
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
.swiper-pagination ::v-deep
  .swiper-pagination-bullet
    white-space: nowrap
    opacity: 0.7
    height: 5px
    width: 5px
    border-radius: 100px
    background: rgba(115, 115, 115, 0.6 )
    transition: 0.3s ease
    &:focus
    outline: 0px
  .swiper-pagination-bullet-active
    background-color: white
    height: 5px
    width: 5px
    &:focus
    outline: 0px
.swiper-button-next-unique
  width: 40px
  height: 40px
  color: #fff
  background-color: $front-black
  cursor: pointer
  transition: 0.2s ease-out
  display: flex
  justify-content: center
  align-items: center
  position: relative
  position: relative
  left: 0px
  &:focus
    outline: 0px
  &:hover
    background: #5e5e5e
  svg
    fill: #fff
    transform: rotate(90deg)
    height: 14px
    opacity: 1
@media screen and (min-width: 2000px)
  .slider
    height: 500px
@media screen and (max-width: $large)
  .slider
    height: 27vw
  .swiper-container
    position: relative
    height: 100%
    width: 100%
  .swiper_buttons
    top: 20px
    right: 15px
    left: calc(100% + 24px)
  .swiper-pagination
    position: absolute
    top: 20px
    left: calc(100% + 15vw + 10px)
  .swiper-pagination ::v-deep
    .swiper-pagination-bullet
      white-space: nowrap
      opacity: 0.7
      height: 4px
      width: 4px
@media screen and (max-width: $medium)
  .slider
    height: 45vw
  .swiper-container
    position: relative
    width: 100%
    z-index: 2
  .swiper-pagination
    display: none
  .swiper_buttons
    display: none
@media screen and (max-width: $tablet)
  .slider
    height: 50vw
  .swiper-container
    position: relative
    left: 0px
    height: 50vw
    width: 100%
  .swiper_buttons
    display: none
@media screen and (max-width: $mobile)
  .slider
    height: 57vw
  .swiper-container
    position: relative
    left: 0px
    height: 57vw
    width: 100%
  .swiper_buttons
    display: none
@media screen and (max-width: 375px)
    .slider
      height: 55vw
    .swiper-container
      position: relative
      left: 0px
      height: 55vw
      width: 100%
    .swiper_buttons
      display: none
</style>
