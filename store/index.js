export const state = () => ({
  locales: ['ua', 'ru', 'en'],
  locale: 'ua'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
