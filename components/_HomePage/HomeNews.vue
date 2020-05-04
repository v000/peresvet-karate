<template>
  <div>
    <div class="heading">
      <h4 class="section_heading">Останні новини</h4>
    </div>
    <div class="news-list">
      <NewsCard
        v-for="newscard in news.slice(0, 3)"
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
.section_heading
  font-size: 34px
  position: relative
  margin-top: 90px
  display: inline-block
  &:after
    content: ""
    position: absolute
    height: 4px
    width: 30%
    background: #ff3333
    bottom: -14px
    left: 0px
    border-radius: 30px
.news-list
    margin-top: 30px
    width: calc( 100% - 60px )
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 30px
@media screen and (max-width: $large)
  .section_heading
    font-size: 27px
    position: relative
    margin-top: 90px
    margin-bottom: 0px
  .news-list
    margin-top: 60px
    width: calc( 100% - 40px )
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 20px
@media screen and (max-width: $medium)
  .heading
    display: flex
    left: 0px
    text-align: center
    justify-content: center
  .section_heading
    left: 0
    font-size: 25px
    font-size: 29px
    margin-bottom: 3vw
    &:after
      content: ""
      position: absolute
      height: 3px
      width: 30%
      background: #ff3333
      bottom: -20px
      left: 35%
      border-radius: 30px
  .news-list
    margin-top: 70px
    width: calc( 100% - 30px )
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 15px
@media screen and (max-width: $tablet)
  .section_heading
    margin-top: 40px
    font-size: 27px
    margin-bottom: 7vw
  .news-list
    margin-top: 50px
    width: calc( 100% - 15px )
    display: grid
    grid-template-columns: 50% 50%
    grid-gap: 15px
@media screen and (max-width: $mobile)
  .section_heading
    left: 0
    font-size: 25px
    margin-bottom: 10vw
  .news-list
    margin-top: 50px
    width: 90%
    margin-left: 5%
    display: grid
    grid-template-columns: 100%
    grid-gap: 0px
</style>
