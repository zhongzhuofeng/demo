import Vue from 'vue'
const filter = () => {
  Vue.filter('Intercept', function (value, long) {
    if (value.length > long) {
      return value.slice(0, long) + '...'
    }
    return value
  })
}

export default filter
