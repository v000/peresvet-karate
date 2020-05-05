<template>
  <nuxt-link class="article-link" :to="'articles/' + article.id">
    <div class="article-card">
      <div
        class="article-pic"
        :style="{ 'background-image': 'url(' + article.pic + ')' }"
      ></div>
      <div class="article-content">
        <h2>{{ article.title }}</h2>
        <p>
          {{ article.text }}
        </p>
      </div>
      <div class="action-btn-container">
        <div class="action-btn">></div>
      </div>
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
.article-link
  text-decoration: none
.article-card
  width: 100%
  height: 18vw
  display: grid
  grid-template-columns: 35% 60% 150px
  margin-bottom: 25px
  background: rgb(235,235,235)
  background: linear-gradient(-90deg, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 70%)
.article-pic
  height: 18vw
  width: 100%
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.article-content
  padding: 10px 40px 30px 30px
  height: 18vw
  box-sizing: border-box
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  color: #000
  text-decoration: none
  h2
    font-size: 21px
  p
    font-size: 15px
    margin: 0px
    max-height: 6vw
    overflow-y: hidden
    text-decoration: none
    color: #555
    padding-right: 25%
    overflow: hidden
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
.action-btn-container
  position: relative
  height: 100%
  width: 100%
  display: flex
  align-items: center
  justify-content: flex-end
.action-btn
  transition: 0.3s ease
  background-color: #ebebeb
  display: flex
  justify-content: center
  align-items: center
  white-space: nowrap
  height: 50px
  width: 50px
  color: #999
  background: #f1f1f1f1
  border-radius: 100px
  font-weight: 500
  cursor: pointer
@media screen and (max-width: 1100px)
  .article-card
    display: grid
    grid-template-columns: 30% 65% 5%
    margin-bottom: 25px
    background: rgb(235,235,235)
    background: linear-gradient(130deg, rgba(235,235,235,1) 5%, rgba(255,255,255,1) 70%)
    height: 16vw
  .article-pic
    width: 100%
    background-image: url('~assets/images/articles/story.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    height: 16vw
  .article-content
    padding: 10px 70px 30px 30px
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    h2
      font-size: 18px
    p
      margin: 0px
      display: block
      width: 100%
      font-size: 13px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
  .action-btn-container
    position: relative
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: flex-end
  .action-btn
    transition: 0.3s ease
    background-color: #ebebeb
    display: flex
    justify-content: center
    align-items: center
    white-space: nowrap
    height: 50px
    width: 50px
    color: #999
    font-weight: 500
    cursor: pointer
@media screen and (max-width: 720px)
  .article-card
    display: grid
    grid-template-columns: 35% 60% 5%
    margin-bottom: 25px
    background: rgb(235,235,235)
    background: linear-gradient(130deg, rgba(235,235,235,1) 5%, rgba(255,255,255,1) 70%)
    height: 18vw
  .article-pic
    width: 100%
    background-image: url('~assets/images/articles/story.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    height: 18vw
  .article-content
    padding: 0px 70px 0px 30px
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    h2
      font-size: 15px
    p
      display: none
@media screen and (max-width: 578px)
  .article-content
    box-sizing: border-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
  .article-card
    width: 100%
    height: 20vw
    display: grid
    grid-template-columns: 40% 55% 5%
    margin-bottom: 25px
    height: 24vw
  .article-pic
    height: 100%
  .article-content
    padding: 5px 15px 15px 15px
    height: 100%
    h2
      font-size: 15px
      margin: 5px
@media screen and (max-width: $mobile)
  .article-card
    width: 104%
    position: relative
    left: -2%
    height: 25vw
    display: grid
    grid-template-columns: 40% 55% 5%
    margin-bottom: 25px
  .article-pic
    height: 100%
  .article-content
    padding: 5px 15px 15px 15px
    h2
      font-size: 4vw
      margin: 5px
    p
      display: none
  .action-btn-container
    position: relative
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: center
  .action-btn
    display: flex
    position: relative
    margin: 0px auto
    text-align: center
    left: 0
    right: 0
    background-color: #fafafa
    white-space: nowrap
    padding: 10px 20px
    color: #ff3333
    font-weight: 500
    display: none
</style>
