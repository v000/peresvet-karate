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
      <div class="dropdown-link">
        <nuxt-link to="/calendar" class="nav-link menu-link-type"
          >Календар</nuxt-link
        >
      </div>
      <div class="dropdown-link">
        <nuxt-link to="/news" class="nav-link menu-link-type">Новини</nuxt-link>
      </div>
      <div class="dropdown-link">
        <nuxt-link to="/articles" class="nav-link menu-link-type"
          >Статті</nuxt-link
        >
      </div>
      <div class="dropdown-link">
        <nuxt-link to="/video" class="nav-link menu-link-type">
          Відео
        </nuxt-link>
        <div class="dropdown-content">
          <a href="#">Ката</a>
          <a href="#">Кращі виступи</a>
          <a href="#">Семінари</a>
          <a href="#">Для початківців</a>
        </div>
      </div>
      <div class="dropdown-link">
        <nuxt-link to="/instructors" class="nav-link menu-link-type">
          Інстуктори
        </nuxt-link>
        <div class="dropdown-content">
          <a href="#">Пуча Володимир Іванович</a>
          <a href="#">Корнеев Вадим Олександрович</a>
          <a href="#">Владюк Олександр Дмитрович</a>
        </div>
      </div>
      <div class="dropdown-link">
        <nuxt-link to="/info" class="nav-link menu-link-type">
          Программа
        </nuxt-link>
        <div class="dropdown-content">
          <a href="#">9 кью</a>
          <a href="#">8 кью</a>
          <a href="#">7 кью</a>
          <a href="#">6 кью</a>
          <a href="#">5 кью</a>
          <a href="#">4 кью</a>
          <a href="#">3 кью</a>
          <a href="#">2 кью</a>
          <a href="#">1 кью</a>
        </div>
      </div>
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
      <nuxt-link class="full-screen-nav-link" to="/articles">
        Статті
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/video">
        Відео
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/instructors">
        Інстуктори
      </nuxt-link>
      <nuxt-link class="full-screen-nav-link" to="/info">
        Программа
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
      this.headerLimitPosition = 70
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
.nav-bar
  height: 64px
  width: 100%
  padding: 0 3%
  position: fixed
  top: 0px
  display: grid
  grid-template-columns: 200px 50px calc(100% - 250px)
  -webkit-box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  -moz-box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  z-index: 1000
  box-sizing: border-box
  background: $front-black
  .label
    display: flex
    text-decoration: none
    position: relative
    top: 0
    transition: 0.3s ease-in-out
    &:hover
      opacity: 0.3
      span
        opacity: 0.4
    &:active
      opacity: 1
      span
        opacity: 1
    img
      height: 40px
      transition: 0.3s
      align-self: center
      display: flex
    span
      opacity: 1
      font-size: 8px
      font-weight: 300
      line-height: 16px
      letter-spacing: 1px
      color: #fff
      margin-left: 4px
      align-self: center
      display: flex
      justify-content: flex-start
      align-items: center
      text-align: left
      text-transform: uppercase
      transition: 0.3s ease
      height: 64px
  .lang
    display: flex
    align-self: center
    justify-content: flex-start
    select
      opacity: 0
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
    justify-content: flex-end
    height: 64px
.nav-link
  text-decoration: none
  transition: 0.3s ease
  padding: 0 35px
  display: block
  position: relative
  width: 100%
  height: 64px
  box-sizing: border-box
  display: flex
  justify-content: center
  align-items: center
  .menu-icon-container
    display: none
    .menu-icon
      display: none
.dropdown-link
  position: relative
  height: 64px
  .nav-link
    opacity: 1
    transition: 0s ease-in-out
  &:hover
    background: #ff3333
    color: #fff
    .nav-link
      color: #fff
      opacity: 1
    .dropdown-content
      display: flex
.dropdown-content
  display: none
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  position: absolute
  top: 100%
  width: auto
  min-width: 100%
  box-sizing: border-box
  a
    color: #101010
    background: #161616
    padding: 18px 55px 18px 35px
    text-decoration: none
    color: grey
    font-size: 15px
    font-weight: 400
    text-align: left
    white-space: nowrap
    width: 100%
    box-sizing: border-box
    &:hover
      background: #101010
      color: #fff
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
  left: -100%
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
@media screen and (min-width: 2000px)
  .nav-bar
    height: 90px
    padding: 0 12%
    grid-template-columns: 225px 50px calc(100% - 275px)
    .label
      transition: 0s
      img
        height: 60px
      span
        margin-left: calc( 1vw / 4 )
        font-size: 12px
        line-height: 25px
        height: 90px
    nav
      display: flex
      text-align: center
      align-self: center
      justify-content: flex-end
      height: 90px
  .nav-link
    padding: 0 45px
    height: 90px
    .menu-icon-container
      display: none
      .menu-icon
        display: none
  .dropdown-link
    position: relative
    height: 90px
  .dropdown-content
    display: none
    a
      padding: 22px 55px 22px 45px
      text-decoration: none
      color: grey
      font-size: 18px
      font-weight: 400
      text-align: left
      white-space: nowrap
      width: 100%
      box-sizing: border-box
@media screen and (max-width: 1100px)
  .nav-link
    padding: 0 25px
@media screen and (max-width: $medium)
  .full-screen
    top: 60px
    z-index: 10
    padding-top: 0px
    height: calc( 100vh - 70px )
  .full-screen-nav-link
    padding-left: calc( 3% + 46px )
    height: calc( 100% / 6 )
    background: $front-black
    color: #ccc
  .fullnone
    display: block
  .nav-bar
    width: 100%
    padding: 0px 0px 0px 3%
    height: 60px
    grid-template-columns:  150px calc( 100% - 210px )  60px
    z-index: 100
    box-sizing: border-box
    .label
      display: flex
      top: 0
      display: flex
      align-items: center
      height: 60px
      &:hover
        opacity: 1
        span
          opacity: 1
      img
        height: 40px
      span
        font-size: 7px
        line-height: 15px
        margin-left: 4px
        height: 60px
    nav
      display: none
    .menu-icon-container
      display: flex
      justify-content: flex-end
      align-items: center
      height: 60px
      .menu-icon
        background: #ff3333
        height: 60px
        width: 80px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        cursor: pointer
        &:hover .menu-icon span
          height: 3px
          margin: 3px 0px
          &:nth-child(2)
            width: 35px
        span
          transition: 0s
          position: relative
          height: 3px
          width: 28px
          margin: 3px 0px
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
@media screen and (max-width: $tablet)
  .full-screen
    top: 60px
    z-index: 10
    padding-top: 0px
    height: calc( 100vh - 70px )
  .full-screen-nav-link
    height: calc( 100% / 6 )
  .fullnone
    display: block
  .nav-bar
    width: 100%
    z-index: 100
    box-sizing: border-box
    .menu-icon-container
      display: flex
      justify-content: flex-end
      align-items: center
      height: 60px
      .menu-icon
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        cursor: pointer
        &:hover .menu-icon span
          height: 4px
          margin: 3px 0px
          &:nth-child(2)
            width: 30px
        span
          transition: 0s
          position: relative
          height: 3px
          width: 30px
          margin: 4px 0px
          background-color: #fff
@media screen and (max-width: $mobile)
  .full-screen
    top: 52px
    z-index: 10
    padding-top: 0px
    height: calc( 100vh - 52px )
  .full-screen-nav-link
    padding-left: calc( 3% + 40px )
    height: calc( 100% / 6 )
    font-size: 5vw
  .fullnone
    display: block
  .nav-bar
    width: 100%
    padding: 0px 0px 0px 3%
    height: 52px
    grid-template-columns:  150px calc( 100% - 210px )  60px
    z-index: 100
    box-sizing: border-box
    .label
      height: 52px
      &:hover
        opacity: 1
        span
          opacity: 1
      img
        height: 34px
      span
        font-size: 6px
        line-height: 13px
        margin-left: 4px
        height: 52px
    nav
      display: none
    .menu-icon-container
      display: flex
      justify-content: flex-end
      align-items: center
      height: 52px
      .menu-icon
        background: #ff3333
        height: 52px
        width: 80px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        cursor: pointer
        &:hover .menu-icon span
          height: 3px
          margin: 3px 0px
          &:nth-child(2)
            width: 35px
        span
          transition: 0s
          position: relative
          height: 3px
          width: 28px
          margin: 3px 0px
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
  .nav-bar
    width: 100%
    height: 52px
    z-index: 100
    .label
      display: flex
      top: 0
      display: flex
      align-items: center
      &:hover
        opacity: 1
        span
          opacity: 1
    nav
      display: none
@media screen and (max-width: 375px)
  .full-screen
    top: 46px
    z-index: 10
    padding-top: 0px
    height: calc( 100vh - 46px )
  .full-screen-nav-link
    padding-left: calc( 3% + 32px )
    height: calc( 100% / 6 )
    font-size: calc( 3vw + 5px )
  .fullnone
    display: block
  .nav-bar
    width: 100%
    padding: 0px 0px 0px 3%
    height: 46px
    grid-template-columns:  150px calc( 100% - 210px )  60px
    z-index: 100
    box-sizing: border-box
    .label
      height: 46px
      &:hover
        opacity: 1
        span
          opacity: 1
      img
        height: 28px
      span
        font-size: 5px
        line-height: 11px
        margin-left: 3px
        height: 46px
    nav
      display: none
    .menu-icon-container
      display: flex
      justify-content: flex-end
      align-items: center
      height: 46px
      .menu-icon
        background: #ff3333
        height: 46px
        width: 60px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        cursor: pointer
        &:hover .menu-icon span
          height: 2px
          margin: 3px 0px
          &:nth-child(2)
            width: 35px
        span
          transition: 0s
          position: relative
          height: 3px
          width: 28px
          margin: 3px 0px
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
</style>
