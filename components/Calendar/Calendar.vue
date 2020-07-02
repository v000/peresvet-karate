<template>
  <div class="calendar-list">
    <CalendarCard
      v-for="card in calendar"
      :key="card.id"
      :card="card"
      class="card"
    />
  </div>
</template>

<script>
import CalendarCard from '@/components/Calendar/CalendarCard.vue'
export default {
  components: {
    CalendarCard
  },
  props: {
    calendar: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.calendar-list
  margin-top: 25vh
  padding: 0px 30%
.card
  margin-bottom: 40px
@media screen and (max-width: $medium)
  .calendar-list
    margin-top: 90px
    padding: 0px 20%
@media screen and (max-width: $tablet)
  .calendar-list
    margin-top: 90px
    padding: 0px 10%
  .card
    margin-bottom: 30px
@media screen and (max-width: $mobile)
  .calendar-list
    margin-top: 60px
    padding: 0px 7%
  .card
    margin-bottom: 20px
</style>
