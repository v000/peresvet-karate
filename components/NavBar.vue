/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div
    :class="{ 'header--unpinned': scrolled }"
    class="nav-bar pinned-bar"
    @scroll="handleScroll"
  >
    <nuxt-link to="/" class="label">
      <img src="~/assets/images/logo.png" alt="label" />
      <span>
        <i18n path="nav.logo.text">
          <br place="break" />
        </i18n>
      </span>
    </nuxt-link>
    <div class="lang">
      <select v-model="$i18n.locale" @change="updateRoute()">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
          lang
        }}</option>
      </select>
    </div>
    <nav>
      <nuxt-link to="/calendar" class="nav-link menu-link-type"
        >Календар</nuxt-link
      >
      <nuxt-link to="/news" class="nav-link menu-link-type">Новини</nuxt-link>
      <nuxt-link to="/video" class="nav-link menu-link-type">Відео</nuxt-link>
      <nuxt-link to="/articles" class="nav-link menu-link-type"
        >Статті</nuxt-link
      >
      <nuxt-link to="/instructors" class="nav-link menu-link-type"
        >Інструктори</nuxt-link
      >
      <nuxt-link to="/info" class="nav-link menu-link-type">Контакти</nuxt-link>
    </nav>
    <div class="menu-icon-container">
      <div class="menu-icon" title="Открыть меню" @click="openNav()">
        <span :class="{ Span1: navOpen }"></span>
        <span :class="{ Span2: navOpen }"></span>
        <span :class="{ Span3: navOpen }"></span>
      </div>
    </div>
    <div class="full-screen" :class="{ fullnone: navOpen }">
      <nuxt-link class="full-screen-nav-link" to="/calendar">
        Календарь
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/news">
        Новини
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/video">
        Відео
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/articles">
        Статті
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/instructors">
        Інстуктори
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/info">
        Контакти
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      langs: ['ua', 'ru', 'en'],
      headerLimitPosition: 70,
      scrolled: false,
      headerLastPosition: 0
    }
  },
  watch: {
    $route() {
      this.navOpen = false
    }
  },
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    updateRoute(locale) {
      this.$router.replace({
        params: { lang: this.$i18n.locale }
      })
    },
    openNav() {
      this.navOpen = !this.navOpen
      if (this.navOpen) {
        this.headerLimitPosition = undefined
      } else {
        this.headerLimitPosition = 100
      }
    },
    handleScroll() {
      if (
        this.headerLastPosition < window.scrollY &&
        this.headerLimitPosition < window.scrollY
      ) {
        this.scrolled = true
      }
      if (this.headerLastPosition > window.scrollY) {
        this.scrolled = false
      }
      this.headerLastPosition = window.scrollY
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_fonts.sass"
@import "~/assets/sass/_typography.sass"
@import "~/assets/sass/_color.sass"
.activenavlink
  color: #ff3333 !important
.pinned-bar
  will-change: transform
  transition: transform 250ms ease-in-out
.header--pinned
  transform: translateY(0%)
.header--unpinned
  transform: translateY(-100%)
.full-screen
  position: fixed
  width: 100%
  height: 100%
  background: #fafafa
  top: 90px
  left: -100%
  transition: 0.1s ease-in-out
  font-weight: 700
  font-size: 72px
  color: #fff
  box-sizing: border-box
  padding-top: 30px
  opacity: 0
.full-screen-nav-link
  color: #333
  border: 1px solid rgba(1, 1, 1, 0.2)
  border-top: 0px
  border-right: 0px
  border-left: 0px
  width: 100%
  display: flex
  justify-content: flex-start
  align-items: center
  box-sizing: border-box
  font-size: 3.5vh
  text-decoration: none
  &:first-child
    border-top: 1px rgba(1, 1, 1, 0.2) solid
  &:active
    color: #fff
    background: #000
.fullnone
  left: 0
  display: none
  opacity: 1
.redirect
  display: none
.nav-bar
  width: 94%
  padding: 15px 3%
  position: fixed
  top: 0px
  display: grid
  grid-template-columns: 200px calc(100% - 58% - 200px) 53%
  background: $front-white
  background: linear-gradient(to bottom, $back-white, $front-white)
  -webkit-box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  -moz-box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  z-index: 1000
  .label
    display: flex
    text-decoration: none
    position: relative
    top: 0
    transition: 0.3s ease-in-out
    &:hover
      opacity: 0.7
      span
        opacity: 0.4
    &:active
      opacity: 1
      span
        opacity: 1
    img
      height: 55px
      transition: 0.3s
      align-self: center
      display: flex
    span
      margin-left: 5px
      font-size: 12px
      line-height: 21px
      font-weight: 500
      color: $main-grey
      align-self: center
      display: flex
      justify-content: flex-start
      text-align: left
      letter-spacing: 1px
      transition: 0.3s ease
  .lang
    display: flex
    align-self: center
    justify-content: flex-start
    select
      border: 0px
      color: #999
      outline: none
      font-weight: 500
      transition: 0.3s ease
      cursor: pointer
      font-size: 16px
      background-color: none
      &:hover
        opacity: 0.4
      option
        border: 0px
        color: #888
        outline: 0px
        background-color: #333
        color: #fff
  nav
    display: flex
    text-align: center
    align-self: center
    justify-content: space-between
    position: relative
    top: -2px
  .nav-link
    text-decoration: none
    transition: 0.3s ease
  .menu-icon-container
    display: flex
    justify-content: flex-end
    .menu-icon
      background: #ff3333
      height: 55px
      width: 55px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      position: relative
      cursor: pointer
      display: none
      &:hover .menu-icon span
        height: 4px
        margin: 3px 0px
        &:nth-child(2)
          width: 30px
      span
        transition: 0.1s ease
        position: relative
        height: 3px
        width: 30px
        margin: 4px 0px
        background-color: #fff
      .Span1
        transform: rotate(45deg)
        position: absolute
        margin: 0px!important
      .Span2
        opacity: 0
      .Span3
        transform: rotate(-45deg)
        position: absolute
        margin: 0px!important
@media screen and (max-width: $large)
    .nav-bar
      display: grid
      grid-template-columns: 200px calc(100% - 58% - 220px) 56%
      .label
        display: flex
        &:hover
          opacity: 0.6
          span
            opacity: 0.4
        img
          height: 50px
          transition: 0.3s
        span
          margin-left: 5px
          letter-spacing: 1px
          font-size: 10px
          line-height: 19px
@media screen and (max-width: $medium)
  .full-screen
    top: 80px
    z-index: 10
    padding-top: 0px
    height: calc( 100vh - 80px )
  .full-screen-nav-link
    padding-left: 5%
    height: calc( 100% / 6 )
  .fullnone
    display: block
  .nav-bar
    width: 90%
    padding: 10px 5%
    height: 60px
    grid-template-columns: calc( 100% - 115px ) 60px 55px
    z-index: 100
    .label
      display: flex
      top: 0
      &:hover
        opacity: 1
        span
          opacity: 1
      img
        height: 50px
      span
        font-size: 10px
        line-height: 18px
        margin-left: 5px
    nav
      display: none
    .menu-icon-container
      display: flex
      justify-content: flex-end
      .menu-icon
        background: #ff3333
        height: 55px
        width: 55px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        cursor: pointer
@media screen and (max-width: $tablet)
  .full-screen
    top: 80px
    color: #fff
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 10px 4%
    grid-template-columns: calc( 100% - 115px ) 60px 55px
    .label
      display: flex
      text-decoration: none
      position: relative
      top: 0
      transition: 0.1s ease-in-out
      &:hover
        opacity: 1
        span
          opacity: 1
      img
        display: flex
        align-items: center
        align-self: center
        height: 45px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 9px
        line-height: 16px
        margin-left: 6px
        align-self: center
    .menu-icon-container
      display: flex
      justify-content: flex-end
      .menu-icon
        background: #ff3333
        height: 55px
        width: 55px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        cursor: pointer
@media screen and (max-width: $mobile)
  .full-screen
    top: 60px
    height: calc( 100vh - 60px )
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 10px 4%
    height: 40px
    .label
      display: flex
      text-decoration: none
      position: relative
      top: 0
      transition: 0.1s ease-in-out
      &:hover
        opacity: 1
      img
        display: flex
        align-items: center
        align-self: center
        height: 40px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 8px
        line-height: 15px
        margin-left: 4px
        align-self: center
        text-transform: none
        letter-spacing: 0.7px
    .menu-icon-container
      display: flex
      justify-content: center
      align-items: center
      .menu-icon
        background: #ff3333
        height: 40px
        width: 40px
        &:hover span
          height: 2px
          width: 27px !important
          margin: 3px 0px
        span
          transition: 0.1s ease
          position: relative
          height: 3px
          width: 22px
          margin: 2px 0px
          background-color: #fff
@media screen and (max-width: 370px)
  .full-screen
    top: 65px
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 5px 4%
    height: 55px
    .label
      display: flex
      text-decoration: none
      position: relative
      top: 0
      transition: 0.1s ease-in-out
      &:hover
        opacity: 0.8
      img
        display: flex
        align-items: center
        align-self: center
        height: 35px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 7px
        line-height: 14px
        margin-left: 4px
        align-self: center
        text-transform: none
    .lang
      display: flex
      align-self: center
      justify-content: center
@media screen and (max-width: 295px)
  .full-screen
    top: 50px
    height: calc( 100vh - 50px )
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 5px 4%
    height: 40px
    .label
      display: flex
      text-decoration: none
      position: relative
      top: 0
      transition: 0.1s ease-in-out
      &:hover
        opacity: 0.8
      img
        display: flex
        align-items: center
        align-self: center
        height: 33px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 7px
        letter-spacing: 0.3px
        margin-left: 3px
        line-height: 13px
    .lang
      display: flex
      align-self: center
      justify-content: flex-end
@media screen and (max-width: 250px)
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 94%
    .label
      display: flex
      img
        height: 30px
      span
        transition: 0.3s
        font-size: 7px
        letter-spacing: 0.3px
        line-height: 12px
        margin-left: 3px
        align-self: center
</style>
