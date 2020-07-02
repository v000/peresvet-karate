<template>
  <nuxt-link :to="'news/' + newscard.id" class="news-card">
    <div
      class="news-card-pic"
      :style="{ 'background-image': 'url(' + newscard.pic + ')' }"
    ></div>
    <div class="news-card-info">
      <div class="news-card-top-bar">
        <div class="news-card-place news_card_place">{{ newscard.place }}</div>
        <div class="news-card-date  news_card_date">{{ newscard.date }}</div>
      </div>
      <h3 class="news_card_title">{{ newscard.title }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    newscard: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_color.sass"
.news-card
    position: relative
    bottom: 0px
    width: 100%
    background: #000
    text-decoration: none
    transition: 0.2s ease-in-out
.news-card-pic
    height: 24vw
    width: 100%
    transition: 0.1s ease-in-out
    background-size: cover
    background-position: center
    position: relative
    &::after
      content: ""
      height: 100%
      width: 100%
      position: absolute
.news-card-info
    padding: 40px 25px 40px 25px
    background: #000
    position: relative
.news-card-top-bar
  position: absolute
  bottom: 100%
  left: 0px
  display: flex
.news-card-place
    color: #ff3333
    background: #000
    padding: 20px 25px 20px 25px
.news-card-date
  color: #999
  padding: 20px 25px 20px 25px
  color: #fff
  background: rgba(1, 1, 1, 0.8)
.news_card_title
  color: #fff
  width: 100%
  display: flex
  justify-content: flex-start
  align-items: center
  align-self: center
  margin: 0px
.news-card-action
  color: #999
  background-color: none
  padding: 12px 22px
  border-radius: 150px
  transition: 0.2s ease
  position: absolute
  display: none
@media screen and (min-width: 1920px)
  .news-card-pic
    height: 420px
@media screen and (max-width: $large)
  .news-card-pic
    height: 24vw
  .news-card-info
    padding: 35px 25px 40px 25px
  .news-card-place
    padding: 15px 25px 15px 25px
  .news-card-date
    padding: 15px 25px 15px 25px
@media screen and (max-width: 1080px)
  .news-card-action
    padding: 9px 18px
    font-size: 13px
@media screen and (max-width: $medium)
  .news-card-pic
      height: 27vw
@media screen and (max-width: 870px)
    .news-card-pic
      height: 26vw
    .bottom-bar
      display: flex
      justify-content: space-between
      align-items: center
      .news-card-date
        font-size: 12px
        font-weight: 500
        color: #999
      .news-card-action
        font-size: 11px
        font-weight: 500
        color: #fff
        background-color: #ff3333
        padding: 9px 15px
        border-radius: 150px
@media screen and (max-width: $tablet)
  .news-card
    position: relative
    bottom: 0px
    background-color: #fff
    width: 100%
    margin-bottom: 7vw
    text-decoration: none
    transition: 0.3s ease-in-out
  .news-card-pic
    height: 50vw
    min-height: 48vw
    width: 100%
    transition: 0.1s ease-in-out
    background-size: cover
    background-position: center
  .news-card-info
    padding: 35px 19px 40px 19px
  h3.news_card_title
    color: #fff
    width: 100%
  h3
    color: #fff
    font-weight: 700
    margin: 10px 0px 30px
  .bottom-bar
    display: flex
    justify-content: space-between
    align-items: center
    .news-card-date
      font-weight: 500
      color: #999
    .news-card-action
      font-weight: 500
      color: #fff
      background-color: #ff3333
      padding: 10px 20px
      border-radius: 150px
  .news-card-place
    padding: 14px 19px
  .news-card-date
    padding: 14px 19px
@media screen and (max-width: 620px)
  .news-card
    position: relative
    bottom: 0px
    background-color: #fff
    width: 100%
    margin-bottom: 7vw
    text-decoration: none
    transition: 0.3s ease-in-out
  .news-card-pic
    height: 50vw
    min-height: 48vw
    width: 100%
    transition: 0.1s ease-in-out
    background-size: cover
    background-position: center
  .news-card-info
    padding: 30px 25px 40px 19px
  h3.news_card_title
    color: #fff
    width: 100%
  h3
    color: #fff
    font-weight: 700
    margin: 10px 0px 30px
  .bottom-bar
    display: flex
    justify-content: space-between
    align-items: center
    .news-card-date
      font-weight: 500
      color: #999
    .news-card-action
      font-weight: 500
      color: #fff
      background-color: #ff3333
      padding: 10px 20px
      border-radius: 150px
  .news-card-place
    padding: 14px 19px
  .news-card-date
    padding: 14px 19px
@media screen and (max-width: 400px)
  .news-card-pic
    height: 55vw
  .bottom-bar
    left: 15px
    width: calc( 100% - 30px )
  .news-card-place
    padding: 14px 19px
  .news-card-date
    padding: 14px 19px
@media screen and (max-width: 375px)
  .news-card-pic
    height: 52vw
  .news-card-place
    padding: 14px 19px
  .news-card-date
    padding: 14px 19px
  .news-card-info
    padding: 25px 19px 30px 19px
  h3.news_card_title
    margin: 0px
  .bottom-bar
    left: 15px
    width: calc( 100% - 30px )
@media screen and (max-width: 300px)
  .news-card-pic
    height: 50vw
  .news-card-place
    padding: 10px 15px
  .news-card-date
    padding: 10px 15px
  .news-card-info
    padding: 17px 15px 30px 15px
  h3.news_card_title
    margin: 0px
  .bottom-bar
    left: 15px
    width: calc( 100% - 30px )
@media screen and (max-width: 275px)
  .news-card-pic
    height: 50vw
  .news-card-place
    padding: 10px 15px
  .news-card-date
    padding: 10px 15px
  .news-card-info
    padding: 17px 15px 30px 15px
  h3.news_card_title
    margin: 0px
  .bottom-bar
    left: 15px
    width: calc( 100% - 30px )
</style>
