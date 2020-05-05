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
      <div class="swiper-pagination"></div>
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
  width: calc( 100% - 60px )
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
  height: 44px
  width: auto
  top: calc(50% - 30px)
  right: 16px
.swiper-button-prev-unique
  width:  44px
  height: 44px
  color: #fff
  background-color: rgba(1,1,1,0.5)
  border: 0px solid #fff
  cursor: pointer
  transition: 0.2s ease-out
  display: flex
  justify-content: center
  align-items: center
  position: relative
  box-sizing: border-box
  &:hover
    border: 0
  &:focus
    outline: 0px
  svg
    fill: #fff
    transform: rotate(-90deg)
    height: 25px
    opacity: 0.8
.swiper-pagination ::v-deep
  .swiper-pagination-bullet
    opacity: 0.7
    height: 3px
    width: 25px
    border-radius: 15px
    margin: 0px 7px
    background: rgba(115, 115, 115, 0.6 )
    transition: 0.3s ease
  .swiper-pagination-bullet-active
    background-color: white
.swiper-button-next-unique
  width: 44px
  height: 44px
  color: #fff
  background-color: #ff3333
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
  svg
    fill: #fff
    transform: rotate(90deg)
    height: 25px
    opacity: 0.9

@media screen and (max-width: $large)
  .slider
    height: 29vw
  .swiper-button-next-unique
    width: 45px
    height: 45px
    svg
      height: 25px
  .swiper-button-prev-unique
    width: 45px
    height: 45px
    svg
      height: 25px
  .swiper_buttons
    right: 15px
@media screen and (max-width: $medium)
  .slider
    height: 37vw
  .swiper-container
    position: relative
    left: 45px
    width: calc(100% - 90px)
    z-index: 2
  .swiper_buttons
    z-index: 1
    display: flex
    align-self: center
    justify-content: space-between
    position: absolute
    height: 60px
    width: 100%
    top: 50%
    right: 0px
  .swiper-button-prev-unique
    color: #fff
    background-color: rgba(1,1,1,0.5)
    border: 0px solid #fff
    transition: 0.2s
    &:active
      color: #fff
      background-color: #ff3333
  .swiper-button-next-unique
    color: #fff
    background-color: rgba(1,1,1,0.5)
    border: 0px solid #fff
    transition: 0.2s
    &:active
      color: #fff
      background-color: #ff3333
@media screen and (max-width: $tablet)
  .slider
    height: 60vw
  .swiper-container
    position: relative
    left: 0px
    height: 60vw
    width: 100%
  .swiper_buttons
    display: none
@media screen and (max-width: $mobile)
  .slider
    height: 60vw
  .swiper-container
    position: relative
    left: 0px
    min-height: 30vw
    height: 60vw
    width: 100%
  .swiper_buttons
    display: none
@media screen and (max-width: 295px)
    .slider
      min-height: 150px
      height: 30vw
    .swiper-container
      position: relative
      left: 0px
      min-height: 150px
      height: 30vw
      width: 100%
    .swiper_buttons
      display: none
</style>
