<template>
  <Instructors :instructors="instructors" />
</template>

<script>
import Instructors from '@/components/Instructors/Instructors.vue'
export default {
  components: {
    Instructors
  },
  asyncData(context) {
    return context.$axios
      .get('https://peresvet-karate.firebaseio.com/instructors.json')
      .then((response) => {
        return {
          instructors: response.data
        }
      })
  }
}
</script>

<style lang="scss" scoped></style>
