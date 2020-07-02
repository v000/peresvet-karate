<template>
  <div class="video-container">
    <div class="video-banner ">
      <h3>Рекомендуемо до перегляду</h3>
    </div>
    <div class="videos">
      <div class="video-preview banner_1">
        <div class="video-play"></div>
        <span class="video-name">Кращі Виступи</span>
      </div>
      <div class="video-preview banner_2">
        <div class="video-play"></div>
        <span class="video-name">Ката</span>
      </div>
      <div class="video-preview banner_3">
        <div class="video-play"></div>
        <span class="video-name">Семінари</span>
      </div>
      <div class="video-preview banner_4">
        <a
          target="_blank"
          href="https://www.youtube.com/playlist?list=PLyb-iI_ACZgBJYR1U_8NQhym1lSnpcz32"
        ></a>
        <div class="video-play"></div>
        <span class="video-name">Для Початківців</span>
      </div>
      <div class="video-preview banner_5">
        <div class="video-play"></div>
        <span class="video-name">Телебачення</span>
      </div>
      <div class="video-action">
        <img
          src="https://i.ya-webdesign.com/images/youtube-icon-white-png-7.png"
          alt=""
        />
        <span>youtube.com/c/peresvet-karate</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.video-container
  width: 90%
  height: auto
  margin-left: 5%
  display: flex
  margin-top: 25vh
  margin-bottom: 30vh
.video-banner
  width: 40vw
  height: 26vw
  background-color: #222
  background-blend-mode: multiply
  background-image: url('http://mmafury.com/wp-content/uploads/2018/07/Joey-Diaz-Karate-GIF-going-crazy.gif')
  background-position: center
  background-size: cover
  color: #fff
  display: flex
  justify-content: flex-start
  align-items: flex-end
  h3
    font-weight: 700
    font-size: 34px
    display: flex
    align-self: center
    padding: 30px
.banner_1
  background-image: url('https://i.ytimg.com/vi/W1umPr-bfVg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAYB4-XcEgqFZ5xrrXCKBwxcTyxJw')
.banner_2
  background-image: url('~assets/images/video-preview/kata.webp')
.banner_3
  background-image: url('~assets/images/video-preview/seminar.webp')
.banner_4
  background-image: url('https://i.ytimg.com/vi/RkagxxyQj-Y/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfH5zBO6gO_jTcdoEKZG91n1mHPg')
.banner_5
  background-image: url('~assets/images/video-preview/news.webp')
.videos
  width: 100%
  height: auto
  display: grid
  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
  grid-template-rows: 50% 50%
.video-preview
  background-size: cover
  display: flex
  justify-content: center
  align-items: center
  position: relative
  transition: 0.2s ease
  cursor: pointer
  &:hover .video-name
    bottom: 40px
  &:hover .video-play
    width: 90px
  &:hover.video-preview::before
    opacity: 0.8
  &::before
    content: ''
    position: absolute
    width: 100%
    height: 100%
    background: #000
    transition: 0.2s ease
    top: 0
    opacity: 0.5
  a
    position: absolute
    height: 100%
    width: 100%
  .video-name
    position: absolute
    color: #fff
    font-weight: 500
    bottom: 30px
    left: 20px
    transition: 0.2s ease
    font-size: 16px
  .video-play
      position: absolute
      bottom: 20px
      left: 20px
      height: 3px
      width: 50px
      border-radius: 30px
      background: #fff
      transition: 0.2s ease
.video-action
  background: #ff3333
  color: #fff
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  img
    width: 4vw
    display: flex
  span
    font-size: 14px
    margin-top: 20px
@media screen and (max-width: $large)
  .video-container
    margin: 60px
@media screen and (max-width: $medium)
  .video-banner
    width: 30vw
    height: 26vw
    display: flex
    justify-content: flex-start
    align-items: flex-end
    h3
      font-size: 24px
  .video-preview
    background-size: cover
    .video-name
      font-size: 14px
@media screen and (max-width: $tablet)
  .video-container
    width: 90%
    height: auto
    margin-left: 5%
    display: flex
    flex-direction: column
    margin: 40px 5%
  .video-banner
    width: 100%
    height: 45vw
    text-align: center
    justify-content: center
    h3
      display: flex
      align-self: center
  .videos
    width: 100%
    height: auto
    display: grid
  .video-preview
    height: 20vw
  .video-action
    background: #ff3333
    color: #fff
    display: flex
    justify-content: center
    align-items: center
    img
      width: 12vw
@media screen and (max-width: $mobile)
  .video-container
    width: 100%
    height: auto
    padding-top: 15px
    padding-bottom: 15px
    margin-left: 0%
    flex-direction: column
    margin: 0px 0px
    .video-banner
      width: 100%
      height: 65vw
  .videos
    width: 100%
    height: auto
    display: grid
    grid-template-columns: 100%
    grid-template-rows: 44vw
  .video-preview
    height: 44vw
  .video-name
    font-size: 19px
  .video-action
    display: flex
    justify-content: center
    align-items: center
    height: 44vw
</style>
