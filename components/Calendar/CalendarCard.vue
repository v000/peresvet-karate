<template>
  <div class="calendar-card">
    <span class="calendar-card-place calendar_place">{{ card.loacation }}</span>
    <h3 class="calendar-card-title calendar_title">{{ card.title }}</h3>
    <span class="calendar-card-date calendar_date">{{ card.date }}</span>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.calendar-card
    display: flex
    flex-direction: column
    align-items: flex-start
    background-color: #ff3333
    flex-direction: column
    align-items: flex-start
    padding: 0px 30px 75px 30px
    border-radius: 5px
    height: auto
    position: relative
    color: #fff
    &::before
        content: ""
        position: absolute
        height: 100%
        width: 10px
        border-radius:  5px 0px 0px 5px
        background: #fafafa
        opacity: 0.2
        left: 0px
        top: 0
.calendar-card-place
    color: #fafafa
    position: absolute
    bottom: 25px
.calendar-card-title
    color: #fafafa
.calendar-card-date
    color: #fff
@media screen and (max-width: $medium)
  .calendar-card
      display: flex
      flex-direction: column
      align-items: flex-start
      background-color: #ff3333
      flex-direction: column
      align-items: flex-start
      padding: 0px 30px 55px 30px
      border-radius: 5px
      height: auto
      position: relative
      color: #fff
      &::before
          content: ""
          position: absolute
          height: 100%
          width: 10px
          border-radius:  5px 0px 0px 5px
          background: #fafafa
          opacity: 0.2
          left: 0px
          top: 0
  .calendar-card-place
      color: #fafafa
      position: absolute
      bottom: 25px
  .calendar-card-title
      color: #fafafa
  .calendar-card-date
      color: #fff
      margin-bottom: 12px
@media screen and (max-width: $tablet)
  .calendar-card
    margin-bottom: 35px
@media screen and (max-width: 275px)
  .calendar-card
    padding-bottom: 45px
</style>
