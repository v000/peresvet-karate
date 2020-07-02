<template>
  <div>
    <div class="heading">
      <h4 class="section_heading">Найближчі події</h4>
      <a class="section_button">Календар</a>
    </div>
    <div class="calendar-container">
      <CalendarCard
        v-for="card in calendar.slice(0, 3)"
        :key="card.id"
        :card="card"
      />
    </div>
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
@import "~/assets/sass/_color.sass"
@import "~/assets/sass/_breakpoints.sass"
.heading
  display: flex
  justify-content: center
  align-items: center
  padding-right: 30px
  background: $front-black
.section_button
  font-size: 11px
  font-weight: 700
  color: #fff
  border: 1px solid #999
  border-radius: 3px
  text-transform: uppercase
  padding: 8px 18px
.section_heading
  font-family: 'Roboto'
  font-size: 22px
  font-weight: 500
  position: relative
  margin-top: 0px
  display: inline-block
  background: $front-black
  margin-bottom: 0px
  padding-left: 30px
  padding-top: 30px
  padding-bottom: 30px
  width: 100%
  box-sizing: border-box
  color: #fff
.calendar-container
    width: 100%
    display: grid
    position: relative
    grid-template-columns: calc( 100% / 3 - 40px / 3 ) calc( 100% / 3 - 40px / 3 ) calc( 100% / 3 - 40px / 3 )
    grid-column-gap: 20px
    background: $front-black
    padding-top: 0px
    padding-bottom: 35px
    padding-left: 30px
    padding-right: 30px
    box-sizing: border-box
@media screen and (max-width: $large)
  .calendar-container
    width: 100%
@media screen and (max-width: $medium)
  .calendar-container
    box-sizing: border-box
    margin: 0px
@media screen and (max-width: $tablet)
  .section_heading
    padding-left: 45px
  .calendar-container
    padding: 0px 45px
    grid-template-columns: 50% 50%
    right: 0px
    grid-template-columns: calc( 100% / 2 - 10px ) calc( 100% / 2 - 10px )
@media screen and (max-width: 620px)
  .calendar-container
    display: grid
    grid-template-columns: 100%
@media screen and (max-width: $mobile)
  .heading
    padding-left: 0
    margin-top: 14vw
  .section_heading
    font-size: 21px
    position: relative
    display: inline-block
    padding-top: 10vw
    padding-bottom: 7vw
  .calendar-container
    display: grid
    grid-template-columns: 100%
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100%
    margin-left: 0%
    margin-top: 0
    padding: 0px 7%
@media screen and (max-width: 320px)
  .section_heading
    font-size: 19px
@media screen and (max-width: 275px)
  .section_heading
    font-size: 17px
</style>
