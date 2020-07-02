<template>
  <div class="footer">
    foote
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.footer
  height: 48vh
  box-sizing: border-box
  color: #fff
  width: 100%
  background: #ff3333
  padding: 90px 13% 20px 13%
  box-sizing: border-box
.footer-contacts ul
  margin: 0
  padding: 0
.footer-contacts ul li
  list-style: none
  margin: 0
  padding: 10px 0px
.footer-main-bar
  display: grid
  grid-template-columns: 25% 25% 35% 15%
  grid-template-rows: 100%
.instructor-contact ul
  margin: 0
  padding: 0
.instructor-contact ul li
  list-style: none
  margin: 0
  padding: 10px 0px
.instructor-contact
  position: relative
.footer-instructor
  color: #777
  &:hover
    color: #fff
    .footer-instructor-info
      opacity: 1
.footer-instructor-info
  position: absolute
  top: 0
  height: 140px
  width: 160px
  right: 15px
  color: #101010
  background: #fff
  opacity: 0
  transition: 0.2s
.footer-nav ul
  margin: 0
  padding: 0
.footer-nav ul li
  list-style: none
  margin: 0
  padding: 10px 0px
.footer-bottom-bar
  position: relative
  margin-top: 40px
  display: grid
  grid-template-columns: 33% 33% 34%
  text-align: center
  padding-top: 40px
  padding-bottom: 20px
  .footer-bottom-bar-left
    text-align: left
    font-size: 11px
  .footer-bottom-bar-center
    font-size: 11px
  .footer-bottom-bar-right
    font-size: 14px
    text-align: right
  &::before
    content: ""
    position: absolute
    height: 1px
    width: 100%
    top: 0
    background: #fff
.company
  img
    height: 45px
  h3
    font-size: 28px
    font-family: 'Vollkorn'
    margin: 10px 0px
  p
    font-size: 14px
    margin: 10px 0px
</style>
