<template>
  <div class="news-list">
    <NewsCard
      v-for="newscard in news"
      :key="newscard.id"
      :newscard="newscard"
    />
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
.news-list
    margin-top: 120px
    width: calc( 80% - 60px )
    margin-left: 10%
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 30px
@media screen and (max-width: $large)
  .news-list
    margin-top: 100px
    width: calc( 84% - 40px )
    margin-left: 8%
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 20px
@media screen and (max-width: $medium)
  .news-list
    margin-top: 100px
    width: calc( 90% - 40px )
    margin-left: 5%
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 20px
@media screen and (max-width: $tablet)
  .news-list
    margin-top: 50px
    width: calc( 90% - 15px )
    margin-left: 5%
    display: grid
    grid-template-columns: 50% 50%
    grid-gap: 15px
@media screen and (max-width: $mobile)
  .news-list
    margin-top: 50px
    width: 90%
    margin-left: 5%
    display: grid
    grid-template-columns: 100%
    grid-gap: 0px
</style>
