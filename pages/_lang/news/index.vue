<template>
  <NewsList :news="news" />
</template>

<script>
import NewsList from '@/components/News/NewsList.vue'
export default {
  components: {
    NewsList
  },
  asyncData(context) {
    return context.$axios
      .get('https://peresvet-karate.firebaseio.com/news.json')
      .then((response) => {
        return {
          news: response.data.reverse()
        }
      })
  }
}
</script>

<style lang="sass" scoped></style>
