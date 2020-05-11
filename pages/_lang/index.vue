<template>
  <div>
    <div class="wrapper container">
      <div class="wrapper-action">
        <h1 class="title">
          <i18n path="home.wrapper.heading"></i18n>
        </h1>
        <span class="wrapper-action-eyebrow subtitle">
          {{ $t('home.wrapper.paragraph') }}
        </span>
        <nuxt-link class="wrapper-btn button_type" to="articles/0">{{
          $t('home.wrapper.button')
        }}</nuxt-link>
      </div>
      <div class="wrapper-slider">
        <WrapperSlider />
      </div>
    </div>
    <HomeCalendar class="container" :calendar="calendar" />
    <HomeNews class="heading-container" :news="news" />
    <HomeVideo class="video-container" />
    <HomeArticles class="heading-container" :articles="articles" />
    <HomeInstructors class="heading-container" />
  </div>
</template>

<script>
import WrapperSlider from '@/components/_HomePage/WrapperSlider.vue'
import HomeCalendar from '@/components/_HomePage/HomeCalendar.vue'
import HomeNews from '@/components/_HomePage/HomeNews.vue'
import HomeArticles from '@/components/_HomePage/HomeArticles.vue'
import HomeInstructors from '@/components/_HomePage/HomeInstructors.vue'
import HomeVideo from '@/components/_HomePage/HomeVideo.vue'
export default {
  components: {
    WrapperSlider,
    HomeCalendar,
    HomeNews,
    HomeArticles,
    HomeInstructors,
    HomeVideo
  },
  async asyncData(context) {
    const calendar = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/calendar.json'
    )
    const news = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/news.json'
    )
    const articles = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/articles.json'
    )
    return {
      calendar: calendar.data,
      news: news.data.reverse(),
      articles: articles.data.reverse()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.wrapper
  display: grid
  grid-template-columns: 41% calc( 59% + 55px )
  padding-top: 30px
  padding-bottom: 45px
  .wrapper-action
    display: flex
    flex-direction: column
    justify-content: center
    padding-right: 40px
    padding-left: 10px
    .wrapper-action-eyebrow
      margin-bottom: 40px
      margin-top: 20px
    h1
      margin: 0px
    .wrapper-btn
      background-color: #ff3333
      border: 0px
      color: #fff
      padding: 18px 32px
      display: block
      width: auto
      text-decoration: none
      align-self: flex-start
      border-radius: 3px
      transition: 0.3s ease-in-out
      -webkit-box-shadow: inset 0px 0px 23px 0px rgba(0,0,0,0.03)
      -moz-box-shadow: inset 0px 0px 23px 0px rgba(0,0,0,0.03)
      box-shadow: inset 0px 0px 23px 0px rgba(0,0,0,0.03)
      &:hover
        -webkit-box-shadow: inset 0px 0px 23px 10px rgba(0,0,0,0.11)
        -moz-box-shadow: inset 0px 0px 23px 10px rgba(0,0,0,0.11)
        box-shadow: inset 0px 0px 23px 10px rgba(0,0,0,0.11)
@media screen and (max-width: $large)
  .wrapper
    display: grid
    grid-template-columns: 40% calc( 60% + 60px )
    .wrapper-action
      display: flex
      flex-direction: column
      justify-content: center
      padding: 15px 60px 15px 20px
      h1
        margin: 0px
      .wrapper-action-eyebrow
        margin-bottom: 25px
        margin-top: 20px
@media screen and (max-width: $medium)
  .wrapper
    display: grid
    grid-template-columns: 100%
    .wrapper-action
      padding: 30px 19vw 45px 45px
      .wrapper-btn
        background-color: #ff3333
        &:hover
          background-color: #ff3333
          -webkit-box-shadow: none
          -moz-box-shadow: none
          box-shadow: none
        &:active
          -webkit-box-shadow: inset 0px 0px 23px 10px rgba(0,0,0,0.11)
          -moz-box-shadow: inset 0px 0px 23px 10px rgba(0,0,0,0.11)
          box-shadow: inset 0px 0px 23px 10px rgba(0,0,0,0.11)
@media screen and (max-width: $tablet)
  .wrapper
    display: grid
    grid-template-columns: 100%
    .wrapper-action
      width: auto
      padding: 10px 12vw 25px 55px
      margin-top: 0px
      margin-bottom: 15px
@media screen and (max-width: $mobile)
  .wrapper
    display: grid
    grid-template-columns: 100%
    padding: 0px
    .wrapper-action
      padding: 15px
      margin-bottom: 15px
      padding: 70px 35px 70px 35px
      .wrapper-action-eyebrow
        margin-bottom: 25px
        margin-top: 15px
      h1
        margin-bottom: 4px
      .wrapper-btn
        background-color: #ff3333
        border: 0px
        color: #fff
        padding: 15px 30px
        font-weight: 700
        width: auto

@media screen and (max-width: 375px)
  .wrapper
    display: grid
    grid-template-columns: 100%
    padding: 5px 0px
    .wrapper-action
      padding: 60px 30px
      margin-bottom: 15px
      .wrapper-action-eyebrow
        margin-bottom: 30px
        margin-top: 20px
      h1
        margin-bottom: 4px
      .wrapper-btn
        background-color: #ff3333
        color: #fff
        padding: 15px 30px
@media screen and (max-width: 333px)
  .wrapper
    display: grid
    grid-template-columns: 100%
    padding: 0px
    .wrapper-action
      padding: 25px 25px
      margin-bottom: 15px
      .wrapper-action-eyebrow
        margin-bottom: 5vw
        margin-top: 4vw
      h1
        margin-bottom: 4px
      .wrapper-btn
        background-color: #ff3333
        padding: 15px 30px
</style>
