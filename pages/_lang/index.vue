<template>
  <div class="perspective">
    <HomePageWrapper />
    <HomeCalendar class="container" :calendar="calendar" />
    <HomeNews class="container" :news="news" />
    <HomeArticles class="container" :articles="articles" />
  </div>
</template>

<script>
import HomePageWrapper from '@/components/_HomePage/HomePageWrapper.vue'
import HomeCalendar from '@/components/_HomePage/HomeCalendar.vue'
import HomeNews from '@/components/_HomePage/HomeNews.vue'
import HomeArticles from '@/components/_HomePage/HomeArticles.vue'
export default {
  components: {
    HomePageWrapper,
    HomeCalendar,
    HomeNews,
    HomeArticles
  },
  async asyncData(context) {
    const calendar = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/calendar.json'
    )
    const news = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/news.json'
    )
    const articles = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/articles.json'
    )
    const instructors = await context.$axios.get(
      'https://peresvet-karate.firebaseio.com/instructors.json'
    )
    return {
      calendar: calendar.data,
      news: news.data.reverse(),
      articles: articles.data.reverse(),
      instructors: instructors.data
    }
  }
}
</script>

<style lang="sass" scoped></style>
