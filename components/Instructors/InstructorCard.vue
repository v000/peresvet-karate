<template>
  <div class="card">
    <div
      class="card-pic"
      :style="{ 'background-image': 'url(' + instructor.picture + ')' }"
    >
      <div class="card-description">
        <h2>{{ instructor.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instructor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.card
  position: relative
  bottom: 0px
  width: 100%
  height: 30vw
  width: 100%
.card-pic
    height: 30vw
    width: 100%
    background-image: url('~assets/images/instructors/2.jpg')
    background-position: center top
    background-size: cover
    display: flex
    align-items: flex-end
    position: relative
    &::before
      content: ""
      position: absolute
      width: 100%
      height: 100%
      background: linear-gradient(to top,rgba(0,0,0,1) 0%, rgba(0,0,0,0.1 ) 35%, rgba(0,0,0,0) 55%)
.card-description
    padding: 10px 25px
    color: #101010
    display: flex
    flex-direction: column
    color: #fff
    h2
      font-size: 22px
      margin: 0px
      color: #fff
      display: flex
      align-self: flex-start
      flex-direction: columns
      z-index: 100
    p
      font-size: 17px
      opacity: 0.8
      font-weight: 500
.cadr-action
  display: grid
  grid-template-columns: 50% 50%
  p
    display: flex
    justify-content: flex-start
    align-items: flex-start
    align-self: center
  a
    display: flex
    justify-content: flex-end
    align-items: flex-start
    align-self: center
    color: #fff
    opacity: 0.9
    font-size: 13px
    z-index: 100
@media screen and (max-width: $tablet)
  .card
    margin-bottom: 40px
  .card-pic
    height: 50vw
    width: 100%
    background-image: url('~assets/images/instructors/instructor.jpg')
    background-position: center top
    background-size: cover
  .card-description
      padding: 10px 0px
      color: #101010
      display: flex
      flex-direction: column
      h2
        font-size: 22px
        margin: 0px
      p
        font-size: 17px
        opacity: 0.8
        font-weight: 500
      ul
        text-decoration: none
        margin: 0px
        padding: 0px
        margin-bottom: 20px
        li
          text-decoration: none
          list-style: none
          font-size: 15px
          opacity: 0.6
          font-weight: 500
@media screen and (max-width: $mobile)
  .card
    margin-bottom: 40px
  .card-pic
    height: 90vw
    width: 100%
    background-image: url('~assets/images/instructors/instructor.jpg')
    background-position: center top
    background-size: cover
  .card-description
      padding: 10px 0px
      color: #101010
      display: flex
      flex-direction: column
      h2
        font-size: 22px
        margin: 0px
      p
        font-size: 17px
        opacity: 0.8
        font-weight: 500
      ul
        text-decoration: none
        margin: 0px
        padding: 0px
        margin-bottom: 20px
        li
          text-decoration: none
          list-style: none
          font-size: 15px
          opacity: 0.6
          font-weight: 500
</style>
