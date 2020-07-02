<template>
  <div class="calendar-card">
    <h3 class="calendar-card-title calendar_title">{{ card.title }}</h3>
    <div class="calendar-card-bottom-bar">
      <span class="calendar-card-date calendar_date">{{ card.date }}</span>
      <span class="calendar-card-place calendar_place">{{
        card.loacation
      }}</span>
    </div>
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
    padding: 25px 2vw
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
.calendar-card-bottom-bar
  position: absolute
  bottom: 0
  display: flex
  flex-direction: column
  bottom: 2vw
.calendar-card-title
    color: #fafafa
    margin: 0px
    margin-bottom: 6vw
.calendar-card-place
    color: #fafafa
.calendar-card-date
    color: #fff
    margin-bottom: 22px
@media screen and (min-width: 1920px)
  .calendar-card
      display: flex
      flex-direction: column
      align-items: flex-start
      background-color: #ff3333
      flex-direction: column
      align-items: flex-start
      padding: 20px 30px 30px 40px
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
  .calendar-card-bottom-bar
    position: absolute
    bottom: 0
    display: flex
    flex-direction: column
    bottom: 20px
  .calendar-card-title
      color: #fafafa
      margin: 0px
      margin-bottom: 75px
  .calendar-card-place
      color: #fafafa
  .calendar-card-date
      color: #fff
      margin-bottom: 18px
@media screen and (max-width: 1440px)
  .calendar-card
      display: flex
      flex-direction: column
      align-items: flex-start
      background-color: #ff3333
      flex-direction: column
      align-items: flex-start
      padding: 20px 20px 20px 30px
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
  .calendar-card-bottom-bar
    position: absolute
    bottom: 0
    display: flex
    flex-direction: column
    bottom: 20px
  .calendar-card-title
      color: #fafafa
      margin: 0px
      margin-bottom: 80px
  .calendar-card-place
      color: #fafafa
  .calendar-card-date
      color: #fff
      margin-bottom: 14px
@media screen and (max-width: $large)
  .calendar-card
      display: flex
      flex-direction: column
      align-items: flex-start
      background-color: #ff3333
      flex-direction: column
      align-items: flex-start
      padding: 15px 20px 15px 30px
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
  .calendar-card-bottom-bar
    position: absolute
    bottom: 0
    display: flex
    flex-direction: column
    bottom: 20px
  .calendar-card-title
      color: #fafafa
      margin: 0px
      margin-bottom: 70px
  .calendar-card-place
      color: #fafafa
  .calendar-card-date
      color: #fff
      margin-bottom: 14px
@media screen and (max-width: $medium)
  .calendar-card
      display: flex
      flex-direction: column
      align-items: flex-start
      background-color: #ff3333
      flex-direction: column
      align-items: flex-start
      padding: 15px 30px 15px 30px
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
  .calendar-card-title
      color: #fafafa
  .calendar-card-date
      color: #fff
      margin-bottom: 12px
@media screen and (max-width: $tablet)
  .calendar-card
    margin-bottom: 35px
@media screen and (max-width: $mobile)
  .calendar-card
    padding-bottom: 55px
    padding-top: 25px
    padding-left: 26px
  .calendar-card-title
    margin-bottom: 60px
  .calendar-card-date
    color: #fff
    margin-bottom: 20px
@media screen and (max-width: $extra)
  .calendar-card
    padding: 20px 14px 35px 24px
  .calendar-card-title
    margin-bottom: 75px
  .calendar-card-date
    color: #fff
    margin-bottom: 15px
@media screen and (max-width: 320px)
  .calendar-card
    padding-bottom: 35px
  .calendar-card-title
    margin-bottom: 60px
  .calendar-card-date
    color: #fff
    margin-bottom: 14px
@media screen and (max-width: 275px)
  .calendar-card
    padding: 17px 10px 20px 20px
  .calendar-card-title
    margin-bottom: 25vw
  .calendar-card-date
    color: #fff
    margin-bottom: 4vw
</style>
