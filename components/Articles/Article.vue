<template>
  <nuxt-link class="article-link" :to="'articles/' + article.id">
    <div
      class="article-pic"
      :style="{ 'background-image': 'url(' + article.pic + ')' }"
    ></div>
    <div class="article-content">
      <h2 class="article_title">{{ article.title }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_color.sass"
.article-link
  text-decoration: none
  height: auto
  background: $front-black
  border-radius: 7px
  color: #101010
  border: 1px solid $front-black
  position: relative
  transition: 0.2s ease-in-out
  bottom: 0
.article-pic
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  border-radius: 7px 7px 0px 0px
  height: 11vw
  width: 100%
  box-sizing: border-box
.article-content
  display: flex
h2
  color: #fff
  opacity: 0.85
  padding: 24px 20px 40px 24px
@media screen and (min-width: 1920px)
  .article-pic
    height: 210px
@media screen and (max-width: $medium)
  .article-link
    text-decoration: none
    height: auto
    border-radius: 4px
    color: #101010
    position: relative
    transition: 0.2s ease-in-out
    bottom: 0
    margin-bottom: 5vw
  .article-pic
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    border-radius: 4px 4px 0px 0px
    height: 28vw
    width: 100%
    box-sizing: border-box
  .article-content
    display: flex
  h2
    font-weight: 600
    opacity: 0.85
    padding: 18px 16px 22px 22px
    line-height: 170%
@media screen and (max-width: $tablet)
  .article-link
    text-decoration: none
    height: auto
    border-radius: 4px
    position: relative
    transition: 0.2s ease-in-out
    bottom: 0
    margin-bottom: 5vw
  .article-pic
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    border-radius: 4px 4px 0px 0px
    height: 28vw
    width: 100%
    box-sizing: border-box
  .article-content
    display: flex
  h2
    font-weight: 600
    opacity: 0.85
    padding: 18px 16px 22px 22px
    line-height: 170%
@media screen and (max-width: 620px)
  .article-link
    text-decoration: none
    height: auto
    position: relative
    transition: 0.2s ease-in-out
    bottom: 0
    margin-bottom: 5vw
    background: $back-black
    border: 1px solid $back-black
    border-radius: 7px
  .article-pic
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    border-radius: 7px 7px 0px 0px
    height: 48vw
    width: 100%
    box-sizing: border-box
  .article-content
    display: flex
  h2
    font-weight: 600
    color: #fff
    opacity: 0.85
    padding: 27px 16px 37px 22px
    line-height: 170%
@media screen and (max-width: $extra)
  .article-link
    margin-bottom: 5vw
  .article-pic
    height: 48vw
  h2
    padding: 27px 16px 33px 22px
@media screen and (max-width: 320px)
  .article-link
    margin-bottom: 5vw
  .article-pic
    height: 48vw
  h2
    padding: 18px 14px 27px 22px
@media screen and (max-width: 275px)
  .article-link
    margin-bottom: 5vw
  h2
    padding: 7vw 6vw 5vw 6vw
    line-height: 140%
</style>
