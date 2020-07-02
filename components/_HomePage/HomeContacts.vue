<template>
  <div class="contacts-section-container">
    <div class="contact-information">
      <h3>Контактна інформація</h3>
      <div class="contact-list">
        <div class="contact-list-item">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png"
          />
          +39093838382
        </div>
        <div class="contact-list-item">peresvet-karate@ukr.net</div>
        <div class="contact-list-item">Хмельницький вул.Перемоги 6</div>
      </div>
    </div>
    <div class="contact-form">
      <h3>Надіслати Повідомлення</h3>
      <div class="form-inputs">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your Email" />
        <textarea type="text" placeholder="Message" />
      </div>
      <button>Send</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
h3
  font-size: 19px
  font-weight: 700
  margin: 0
  padding: 0
  text-transform: uppercase
.contacts-section-container
  margin: 0
  box-sizing: border-box
  height: 65vh
  padding: 12vh 13%
  display: grid
  grid-template-columns: 50% 50%
  grid-column-gap: 20px
  width: 100%
  background: #f9f9f9
.contact-form
  box-sizing: border-box
  background: #fff
  padding: 80px 15%
  position: relative
  display: flex
  flex-direction: column
  button
    display: flex
    justify-content: center
    align-items: center
    padding: 20px 0
    color: grey
    background: #f3f3f3
    border: 0px
    margin-top: 20px
    font-size: 20px
    font-weight: 500
.form-inputs
  display: flex
  flex-direction: column
  justify-content: space-between
  margin-top: 30px
  input
    background: #fff
    height: 40px
    border: 1px solid #ff3333
    font-size: 15px
    text-indent: 3%
    margin-bottom: 20px
    padding: 7px 0
  textarea
    background: #fff
    border: 1px solid #ff3333
    font-size: 15px
    height: 100px
    resize: none
    padding: 7px 15px
</style>
