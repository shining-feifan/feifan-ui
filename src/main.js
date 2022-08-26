import Vue from 'vue'
import App from './App.vue'
import FfButton from './components/button.vue'
Vue.config.productionTip = false

Vue.component(FfButton.name,FfButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
