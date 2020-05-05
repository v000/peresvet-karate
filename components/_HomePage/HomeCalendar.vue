<template>
  <div class="calendar-container">
    <CalendarCard
      v-for="card in calendar.slice(0, 4)"
      :key="card.id"
      :card="card"
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
.calendar-container
    margin-top: 15px
    width: calc( 100% - 60px - 14%)
    display: grid
    position: relative
    grid-template-columns: 25% 25% 25% 25%
    grid-column-gap: 20px
@media screen and (max-width: $large)
  .calendar-container
    width: calc( 100%  - 60px - 12%)
@media screen and (max-width: $medium)
  .calendar-container
    width: calc( 100%  - 30px - 14%)
    grid-column-gap: 10px
@media screen and (max-width: $tablet)
  .calendar-container
    width: calc(100% - 8% - 20px)
    grid-template-columns: 50% 50%
    grid-column-gap: 20px
    right: 0px
@media screen and (max-width: $mobile)
  .calendar-container
    display: grid
    grid-template-columns: 100%
    flex-direction: column
    justify-content: center
    align-items: center
    width: 90%
    margin-left: 5%
    margin-top: 20vw
</style>
