// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'
import 'font-awesome/css/font-awesome.min.css'

import { Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Lazyload, Row, Col, List, Popup, Toast, Checkbox, Stepper, Cell, CellGroup } from 'vant'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Row)
Vue.use(Col)
Vue.use(List)
Vue.use(Popup)
Vue.use(Checkbox)
Vue.use(Stepper)
Vue.use(Cell)
Vue.use(CellGroup)

Vue.prototype.$toast = Toast

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
