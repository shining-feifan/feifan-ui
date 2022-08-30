import Vue from 'vue'
import App from './App.vue'
import FfButton from './components/button.vue'
import FfDialog from './components/dialog.vue'
import FfInput from './components/input.vue'
import FfSwitch from './components/switch.vue'
import FfRadio from './components/radio.vue'
import FfRadioGroup from './components/radio-group.vue'
import FfCheckBox from './components/checkbox.vue'
import FfCheckboxGroup from './components/checkbox-group.vue'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.component(FfButton.name,FfButton)
Vue.component(FfDialog.name,FfDialog)
Vue.component(FfInput.name,FfInput)
Vue.component(FfSwitch.name,FfSwitch)
Vue.component(FfRadio.name,FfRadio)
Vue.component(FfRadioGroup.name,FfRadioGroup)
Vue.component(FfCheckBox.name,FfCheckBox)
Vue.component(FfCheckboxGroup.name,FfCheckboxGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
