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
.articles
  display: grid
  grid-template-columns: 25% 25% 25% 25%
  grid-column-gap: 20px
  width: calc( 100% - 60px )
  margin-bottom: 90px
  box-sizing: border-box
@media screen and (max-width: $large)
  .articles
    margin-bottom: 60px
@media screen and (max-width: $medium)
  .articles
    display: grid
    grid-template-columns: 50% 50%
    grid-column-gap: 20px
    width: calc(100% - 20px)
    margin-bottom: 90px
@media screen and (max-width: $tablet)
  .section_heading
    padding-left: 45px
  .articles
    display: grid
    grid-template-columns: 50% 50%
    grid-column-gap: 14px
    width: calc(100% - 14px)
    margin-bottom: 90px
    padding: 0px 45px
@media screen and (max-width: 620px)
  .section_heading
    left: 0
    font-size: 21px
    padding-top: 10vw
    padding-bottom: 7vw
    padding-left: 7%
    margin-top: 55px
    margin-bottom: 0px
    width: 100%
    box-sizing: border-box
    background: $front-black
  .articles
    display: grid
    grid-template-columns: 100%
    grid-column-gap: 0px
    width: 100%
    margin-bottom: 0px
    padding: 0px 7%
    margin-top: 0px
    background: $front-black
@media screen and (max-width: 620px)
  .section_heading
    margin-top: 55px
</style>
