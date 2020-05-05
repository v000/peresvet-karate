<template>
  <div>
    <div class="heading">
      <h4 class="section_heading">Статті</h4>
    </div>
    <div class="articles">
      <Article
        v-for="article in articles"
        :key="article.id"
        :article="article"
        :data-index="article.id"
      />
    </div>
  </div>
</template>

<script>
import Article from '@/components/Articles/Article.vue'
export default {
  components: {
    Article
  },
  props: {
    articles: {
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
  margin-bottom: 60px
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
.articles
  display: flex
  flex-direction: column
  width: 100%
  margin-bottom: 90px
@media screen and (max-width: $large)
  .section_heading
    font-size: 27px
    position: relative
    margin-bottom: 75px
    margin-top: 90px
  .articles
    margin-bottom: 60px
@media screen and (max-width: $medium)
  .heading
    display: flex
    left: 0px
    text-align: center
    justify-content: center
  .section_heading
    left: 0
    margin-bottom: 75px
    font-size: 25px
    margin-bottom: 10vw
    &:after
      content: ""
      position: absolute
      height: 3px
      width: 30%
      background: #ff3333
      bottom: -20px
      left: 35%
      border-radius: 30px
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
</style>
