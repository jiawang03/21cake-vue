import Vue from 'vue'
import Router from 'vue-router'

// 404
const Notfound = () => import('components/notfound/notfound')
// 首页
const Index = () => import('pages/index/index')
const Gallery = () => import('pages/gallery/gallery')
const Goods = () => import('pages/goods/goods')
const Cart = () => import('pages/cart/cart')
const MyCake = () => import('pages/my_cake/my_cake')

Vue.use(Router)

Router.prototype.$authTime = false

const router = new Router({
  mode: 'hash',
  routes: [{
    path: '*',
    name: '404',
    meta: {title: '404 - 找不到页面'},
    component: Notfound
  }, {
    path: '/',
    name: '/',
    meta: {
      auth: false
    },
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    meta: {
      title: '21Cake'
    },
    component: Index
  }, {
    path: '/gallery',
    name: 'gallery',
    meta: {
      title: '蛋糕_蛋糕网上订购_5小时新鲜送达_21Cake官网'
    },
    component: Gallery
  }, {
    path: '/goods',
    name: 'goods',
    component: Goods
  }, {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '21Cake蛋糕官网_24小时蛋糕网上订购_5小时新鲜送达！'
    },
    component: Cart
  }, {
    path: '/mycake',
    name: 'mycake',
    meta: {
      title: '21Cake蛋糕官网_24小时蛋糕网上订购_5小时新鲜送达！'
    },
    component: MyCake
  }]
})

router.beforeEach(({meta, path}, from, next) => {
  if (meta.title) {
    document.title = meta.title
  }
  next()
})

export default router
