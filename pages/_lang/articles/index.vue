<template>
  <div>
    <HomeArticles :articles="articles" class="container" />
  </div>
</template>

<script>
import HomeArticles from '@/components/_HomePage/HomeArticles.vue'
export default {
  components: {
    HomeArticles
  },
  asyncData(context) {
    return context.$axios
      .get('https://peresvet-karate.firebaseio.com/articles.json')
      .then((response) => {
        return {
          articles: response.data.reverse()
        }
      })
  }
}
</script>

<style lang="scss" scoped></style>
