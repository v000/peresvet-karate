<template>
  <div class="instructors-container">
    <div class="heading">
      <h4 class="section_heading">Інструктори центру</h4>
    </div>
    <div class="instructors">
      <InstructorCard />
      <InstructorCard />
      <InstructorCard />
    </div>
  </div>
</template>

<script>
import InstructorCard from '@/components/Instructors/InstructorCard.vue'
export default {
  components: {
    InstructorCard
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.section_heading
  font-size: 34px
  position: relative
  margin-top: 20px
  margin-bottom: 80px
  display: inline-block
  &:after
    content: ""
    position: absolute
    height: 4px
    width: 30%
    background: #ff3333
    bottom: -14px
    left: 0px
    border-radius: 30px
.instructors
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 45px
    width: calc( 100% - 90px )
@media screen and (max-width: $medium)
  .heading
    display: flex
    left: 0px
    text-align: center
    justify-content: center
  .section_heading
    left: 0
    margin-bottom: 75px
    font-size: 25px
    margin-bottom: 10vw
    &:after
      content: ""
      position: absolute
      height: 3px
      width: 30%
      background: #ff3333
      bottom: -20px
      left: 35%
      border-radius: 30px
  .instructors
    padding-top: 150px
    display: grid
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3)
    grid-gap: 40px
    width: calc( 80% - 80px )
    margin-left: 10%
@media screen and (max-width: $tablet)
  .section_heading
    margin-top: 40px
    font-size: 27px
    margin-bottom: 7vw
  .instructors
    padding-top: 50px
    display: grid
    grid-template-columns: 100%
    grid-gap: 0px
    width: 54%
    margin-left: 23%
@media screen and (max-width: $mobile)
  .section_heading
    left: 0
    font-size: 25px
    margin-bottom: 10vw
  .instructors
    padding-top: 50px
    display: grid
    grid-template-columns: 100%
    grid-gap: 0px
    width: 90%
    margin-left: 5%
</style>
