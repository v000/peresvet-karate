<template>
  <div>
    <div class="post-head">
      <div
        class="post-wrapper-img"
        :style="{ 'background-image': 'url(' + news.pic + ')' }"
      ></div>
      <div class="post-wrapper-info">
        <h2 class="reading_heading">{{ news.title }}</h2>
        <span class="post-wrapper-place">{{ news.place }}</span>
        <div class="reading_paragraph post-text">
          <p>{{ news.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios
      .get(
        `https://peresvet-karate.firebaseio.com/news/${context.params.id}.json`
      )
      .then((response) => {
        return {
          news: response.data
        }
      })
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.gallery-items
  width: 70%
  margin-left: 15%
  display: grid
  grid-template-columns: 33% 33% 33%
.gallery-image
  height: 15vw
  width: 99%
  float: left
  background-size: cover
.post-wrapper-img
  height: 420px
  width: 70%
  margin-left: 15%
  background-size: cover
  background-position-y: 25%
.post-wrapper-info
  margin-top: 50px
  width: 70%
  margin-left: 15%
  h2
    margin-bottom: 6px
  span
    color: #ff3333
  p
    margin-top: 84px
.post-gallery
  margin-top: 80px
  width: 80%
  margin-left: 10%
  display: grid
  grid-template-columns: 24% 24% 24% 24%
  grid-gap: 15px 15px
  .gallery-item
    height: 150px
    width: 100%
    background-size: cover
    background-position: center
@media screen and (max-width: $large)
  .post-wrapper-img
    height: 420px
    width: 76%
    margin-left: 12%
    background-size: cover
    background-position-y: 25%
@media screen and (max-width: $medium)
  .post-wrapper-img
    height: 52vw
    width: 100%
    margin-left: 0%
    background-size: cover
  .post-wrapper-info
    margin-top: 50px
    width: 80%
    margin-left: 10%
    h2
      margin-bottom: 6px
    span
      color: #ff3333
    p
      margin-top: 64px
@media screen and (max-width: $tablet)
  .post-wrapper-info
    margin-top: 50px
    width: 80%
    margin-left: 10%
    h2
      margin-bottom: 6px
    span
      color: #ff3333
    p
      margin-top: 64px
@media screen and (max-width: $mobile)
  .post-wrapper-img
    height: 62vw
    width: 100%
    background-size: cover
  .post-wrapper-info
    margin-top: 50px
    width: 80%
    margin-left: 10%
    h2
      margin-bottom: 6px
    span
      color: #ff3333
    p
      margin-top: 44px
</style>
