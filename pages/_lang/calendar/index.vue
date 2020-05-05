<template>
  <Calendar :calendar="calendar" />
</template>

<script>
import Calendar from '@/components/Calendar/Calendar.vue'
export default {
  components: {
    Calendar
  },
  asyncData(context) {
    return context.$axios
      .get('https://peresvet-karate.firebaseio.com/calendar.json')
      .then((response) => {
        return {
          calendar: response.data
        }
      })
  }
}
</script>
<style lang="sass" scoped></style>
