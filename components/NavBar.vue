<template>
  <div class="nav-bar">
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
      langs: ['ua', 'ru', 'en']
    }
  },
  watch: {
    $route() {
      this.navOpen = false
    }
  },
  methods: {
    updateRoute(locale) {
      this.$router.replace({
        params: { lang: this.$i18n.locale }
      })
    },
    openNav() {
      this.navOpen = !this.navOpen
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
@import "~/assets/sass/_fonts.sass"
@import "~/assets/sass/_typography.sass"
@import "~/assets/sass/_color.sass"
.full-screen
  position: fixed
  width: 100%
  height: 100%
  background: #fafafa
  top: 90px
  left: -100%
  transition: 0.2s ease-in-out
  font-weight: 700
  font-size: 72px
  color: #fff
  box-sizing: border-box
  padding-top: 30px
.full-screen-nav-link
  color: #333
  border: 1px solid rgba(1, 1, 1, 0.2)
  border-top: 0px
  border-right: 0px
  border-left: 0px
  width: 100%
  display: flex
  padding: 4vw 4vw
  box-sizing: border-box
  font-size: 22px
  text-decoration: none
  &:first-child
    border-top: 1px rgba(1, 1, 1, 0.2) solid
  &:active
    color: #fff
    background: #000
.fullnone
  left: 0
  display: none
.redirect
  display: none
.nav-bar
  z-index: 1000
  position: fixed
  top: 0px
  width: 94%
  padding: 15px 3%
  background: $front-white
  background: linear-gradient(to bottom, $back-white, $front-white)
  display: grid
  grid-template-columns: 200px calc(100% - 58% - 200px) 53%
  -webkit-box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  -moz-box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
  box-shadow: 0px 0px 53px 0px rgba(0,0,0,0.03)
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
      transition: 0.3s
      font-size: 11px
      line-height: 20px
      font-weight: 500
      color: $main-grey
      margin-left: 5px
      align-self: center
      display: flex
      justify-content: flex-start
      text-align: left
      letter-spacing: 1px
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
      width: 94%
      padding: 15px 3%
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
    top: 75px
  .fullnone
    display: block
  .nav-bar
    width: 92%
    padding: 10px 4%
    grid-template-columns: calc( 100% - 115px ) 60px 55px
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
    top: 75px
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
        height: 47px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 10px
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
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 10px 4%
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
        height: 39px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 9px
        line-height: 16px
        margin-left: 4px
        align-self: center
        text-transform: none
    .menu-icon-container
      display: flex
      justify-content: flex-end
      align-items: center
      .menu-icon
        background: #ff3333
        height: 45px
        width: 45px
        &:hover span
          height: 2px
          width: 27px !important
          margin: 3px 0px
        span
          transition: 0.1s ease
          position: relative
          height: 2px
          width: 25px
          margin: 3px 0px
          background-color: #fff
@media screen and (max-width: 370px)
  .full-screen
    top: 75px
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 10px 4%
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
        height: 37px
        transition: 0.3s
      span
        transition: 0.3s
        font-size: 9px
        line-height: 15px
        margin-left: 4px
        align-self: center
        text-transform: none
    .lang
      display: flex
      align-self: center
      justify-content: center
@media screen and (max-width: 295px)
  .full-screen
    top: 75px
  .nav-bar
    z-index: 1000
    position: fixed
    top: 0px
    width: 92%
    padding: 10px 4%
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
        font-size: 9px
        letter-spacing: 0.3px
        margin-left: 3px
        line-height: 14px
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
    padding: 7px 3%
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
