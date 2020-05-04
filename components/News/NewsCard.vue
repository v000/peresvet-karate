<template>
  <nuxt-link :to="'news/' + newscard.id" class="news-card">
    <div
      class="news-card-pic"
      :style="{ 'background-image': 'url(' + newscard.pic + ')' }"
    ></div>
    <div class="news-card-info">
      <div class="news-card-place news_card_place">{{ newscard.place }}</div>
      <h3 class="news_card_title">{{ newscard.title }}</h3>
      <div class="bottom-bar">
        <div class="news-card-date  news_card_date">{{ newscard.date }}</div>
        <div class="news-card-action news_card_action">Читати далі</div>
      </div>
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
.news-card
    position: relative
    bottom: 0px
    background: rgb(235,235,235)
    background: linear-gradient( 0deg, rgba(235,235,235,0.6) 0%, rgba(255,255,255,1) 25%)
    width: 100%
    margin-bottom: 40px
    padding-bottom: 30px
    text-decoration: none
    transition: 0.2s ease-in-out
    &:hover
      position: relative
      bottom: 10px
      background: rgb(235,235,235)
      background: linear-gradient(-145deg, rgba(235,235,235,0.1) 30%, rgba(255,255,255,1) 100%)
      -webkit-box-shadow: 0px 17px 25px 0px rgba(0,0,0,0.1)
      -moz-box-shadow: 0px 17px 25px 0px rgba(0,0,0,0.1)
      box-shadow: 0px 17px 25px 0px rgba(0,0,0,0.1)
      .news-card-pic
        transition: 0.1s ease-in-out
.news-card-pic
    height: 17vw
    width: 100%
    transition: 0.1s ease-in-out
    background-size: cover
    background-position: center
.news-card-info
    padding: 20px 25px 20px 25px
.news-card-place
    color: #ff3333
h3.news_card_title
  color: #111
  width: 100%
  margin: 20px 0px 40px
.bottom-bar
  display: flex
  justify-content: space-between
  align-items: center
  position: absolute
  width: calc( 100% - 50px )
  bottom: 25px
  left: 25px
.news-card-date
  color: #999
.news-card-action
  color: #fff
  background-color: #ff3333
  padding: 12px 22px
  border-radius: 150px
@media screen and (max-width: $large)
  .news-card-pic
    height: 18vw
@media screen and (max-width: 1080px)
  .news-card-action
    padding: 9px 18px
    font-size: 13px
@media screen and (max-width: $medium)
  .news-card-pic
      height: 19vw
@media screen and (max-width: 870px)
    .news-card-pic
      height: 20vw
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
  .news-card-pic
    height: 27vw
  .bottom-bar
    display: flex
    justify-content: space-between
    align-items: center
    .news-card-date
      font-size: 14px
    .news-card-action
      font-size: 12px
      padding: 8px 14px
      border-radius: 150px
@media screen and (max-width: 576px)
  .news-card-pic
    height: 26vw
  h3.news_card_title
    color: #111
    width: 100%
    margin: 20px 0px 25px
  .bottom-bar
    display: flex
    justify-content: space-between
    align-items: center
    .news-card-date
      font-size: 12px
    .news-card-action
      font-size: 10px
        padding: 9px 15px
        border-radius: 150px
@media screen and (max-width: $mobile)
  .news-card
    position: relative
    bottom: 0px
    background-color: #fff
    width: 100%
    margin-bottom: 40px
    text-decoration: none
    transition: 0.3s ease-in-out
    &:hover
      position: relative
      bottom: 10px
      transition: 0.3s ease-in-out
      -webkit-box-shadow: 0px 17px 25px 0px rgba(0,0,0,0.1)
      -moz-box-shadow: 0px 17px 25px 0px rgba(0,0,0,0.1)
      box-shadow: 0px 17px 25px 0px rgba(0,0,0,0.1)
  .news-card-pic
    height: 50vw
    min-height: 48vw
    width: 100%
    transition: 0.1s ease-in-out
    background-size: cover
    background-position: center
  .news-card-info
      padding: 20px 25px 20px 25px
  h3.news_card_title
    color: #111
    width: 100%
    margin: 20px 0px 35px
  .news-card-place
      color: #ff3333
      font-weight: 500
  h3
    color: #111
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
@media screen and (max-width: 400px)
  .news-card-info
    padding: 15px 15px 10px 15px
  .bottom-bar
    left: 15px
    width: calc( 100% - 30px )
    .news-card-date
      font-weight: 500
      color: #999
    .news-card-action
      font-weight: 500
      color: #fff
      background-color: #ff3333
      padding: 10px 20px
      border-radius: 150px
@media screen and (max-width: 300px)
  .news-card-pic
    height: 11vw
  .news-card-info
    padding: 15px 15px 10px 15px
  .bottom-bar
    left: 15px
    width: calc( 100% - 30px )
    .news-card-date
    .news-card-action
</style>
