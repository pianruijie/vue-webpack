import Vue from 'vue'
import App from './app.vue'
import router from './route'

export default new Vue({
  el:'#app',
  router,
  render(createElement){
    return createElement(App)
  }
})