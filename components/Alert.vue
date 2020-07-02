<template>
  <div class="allert">
    <p class="allert__message">
      З першого червня відновився графік тренуваннь. За детальною інформацією
      просимо звернутись до інсутрукторів. Бажаемо міцного здоровья та успішних
      результатів.
    </p>
    <div class="allert__close"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.allert
  background-color: #ff3333
  color: #fff
  font-size: 14px
  font-weight: 400
  padding: 12px 5% 16px 10%
  position: fixed
  top: 90px
  width: 100%
  z-index: 100
  box-sizing: border-box
</style>
