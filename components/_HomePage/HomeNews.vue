<template>
  <div>
    <div class="heading">
      <h4 class="section_heading">Останні новини</h4>
    </div>
    <div class="news-list">
      <NewsCard
        v-for="newscard in news.slice(0, 2)"
        :key="newscard.id"
        :newscard="newscard"
        :data-index="newscard.id"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from '@/components/News/NewsCard.vue'
export default {
  components: {
    NewsCard
  },
  props: {
    news: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_color.sass"
.section_heading
  font-family: 'Roboto'
  font-size: 22px
  font-weight: 500
  color: #fff
  position: relative
  margin-top: 60px
  margin-bottom: 30px
  display: inline-block
.news-list
    margin-top: 0px
    width: calc( 100% - 35px )
    display: grid
    grid-template-columns: 50% 50%
    grid-gap: 35px
    box-sizing: border-box
@media screen and (max-width: $large)
  .news-list
    margin-top: 0px
    width: 100%
    display: grid
    grid-gap: 20px
@media screen and (max-width: $medium)
  .heading
    display: flex
    left: 0px
    text-align: left
    justify-content: flex-start
  .section_heading
    left: 0
  .news-list
    width: calc( 100% - 15px )
    display: grid
    grid-gap: 15px
@media screen and (max-width: $tablet)
  .section_heading
    padding-left: 45px
  .news-list
    margin-top: 0px
    width: 100%
    display: grid
    grid-template-columns: 100%
    grid-gap: 0px
    padding: 0px 45px
@media screen and (max-width: 620px)
  .heading
    margin-top: 55px
    padding-left: 0
    background: $front-black
  .section_heading
    font-size: 21px
    position: relative
    padding-top: 10vw
    padding-bottom: 7vw
    margin: 0px
    display: inline-block
  .news-list
    margin-top: 0px
    width: 100%
    padding-left: 7%
    padding-right: 7%
    display: grid
    grid-template-columns: 100%
    grid-gap: 0px
    background: $front-black
@media screen and (max-width: $mobile)
  .heading
    margin-top: 14vw
@media screen and (max-width: $extra)
  .section_heading
    font-size: 20px
@media screen and (max-width: 320px)
  .section_heading
    font-size: 19px
@media screen and (max-width: 275px)
  .section_heading
    font-size: 17px
</style>
