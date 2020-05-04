<template>
  <div class="results">
    <h2>Результати Наших Спортсменів</h2>
    <div class="results-container">
      <div class="result-item">
        <span class="result-counter">20</span>
        <span class="result-name">Майстрів спорту</span>
      </div>
      <div class="result-item">
        <span class="result-counter">60</span>
        <span class="result-name">Чорних Поясів</span>
      </div>
      <div class="result-item">
        <span class="result-counter">5</span>
        <span class="result-name">Чемпионов Мира</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import "~/assets/sass/_breakpoints.sass"
.results
  color: #fff
  height: 100vh
  width: 100%
  padding-top: 200px
  background-color: #222
  background-image: url('~assets/images/results.jpg')
  background-position: center
  background-blend-mode: overlay
  background-size: cover
  h2
    font-size: 42px
    text-align: center
.results-container
  display: flex
  flex-direction: row
  justify-content: space-around
  margin-top: 200px
.result-item
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .result-counter
      font-size: 80px
      font-weight: 700
  .result-name
      font-size: 25px
      font-weight: 400
@media screen and (max-width: $medium)
    .result-name
      font-size: 22px
      font-weight: 400
</style>
