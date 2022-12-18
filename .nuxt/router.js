import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64c2ffb4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7e9d7499 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _5d36428e = () => interopDefault(import('../pages/blogdetails.vue' /* webpackChunkName: "pages/blogdetails" */))
const _3b083a0e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _d93fb122 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _28cf8560 = () => interopDefault(import('../pages/index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _920403fc = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3ceb1b9f = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _aff2351c = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _fd471080 = () => interopDefault(import('../pages/projectdetails.vue' /* webpackChunkName: "pages/projectdetails" */))
const _6d1b330e = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _b5023ab8 = () => interopDefault(import('../pages/servicedetails.vue' /* webpackChunkName: "pages/servicedetails" */))
const _25534a2a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _64c2ffb4,
    name: "about"
  }, {
    path: "/blog",
    component: _7e9d7499,
    name: "blog"
  }, {
    path: "/blogdetails",
    component: _5d36428e,
    name: "blogdetails"
  }, {
    path: "/contact",
    component: _3b083a0e,
    name: "contact"
  }, {
    path: "/faq",
    component: _d93fb122,
    name: "faq"
  }, {
    path: "/index-2",
    component: _28cf8560,
    name: "index-2"
  }, {
    path: "/login",
    component: _920403fc,
    name: "login"
  }, {
    path: "/pricing",
    component: _3ceb1b9f,
    name: "pricing"
  }, {
    path: "/project",
    component: _aff2351c,
    name: "project"
  }, {
    path: "/projectdetails",
    component: _fd471080,
    name: "projectdetails"
  }, {
    path: "/service",
    component: _6d1b330e,
    name: "service"
  }, {
    path: "/servicedetails",
    component: _b5023ab8,
    name: "servicedetails"
  }, {
    path: "/",
    component: _25534a2a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
