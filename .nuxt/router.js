import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fc31c79 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _27cafc34 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _5b49b0cc = () => interopDefault(import('../pages/blogdetails.vue' /* webpackChunkName: "pages/blogdetails" */))
const _2deab68c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4c95bc82 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _370710e3 = () => interopDefault(import('../pages/index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _ef4c219c = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _19148df6 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _5c7708cd = () => interopDefault(import('../pages/projectdetails.vue' /* webpackChunkName: "pages/projectdetails" */))
const _8eebf2be = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _fecd189e = () => interopDefault(import('../pages/servicedetails.vue' /* webpackChunkName: "pages/servicedetails" */))
const _2f7af73e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0fc31c79,
    name: "about"
  }, {
    path: "/blog",
    component: _27cafc34,
    name: "blog"
  }, {
    path: "/blogdetails",
    component: _5b49b0cc,
    name: "blogdetails"
  }, {
    path: "/contact",
    component: _2deab68c,
    name: "contact"
  }, {
    path: "/faq",
    component: _4c95bc82,
    name: "faq"
  }, {
    path: "/index-2",
    component: _370710e3,
    name: "index-2"
  }, {
    path: "/pricing",
    component: _ef4c219c,
    name: "pricing"
  }, {
    path: "/project",
    component: _19148df6,
    name: "project"
  }, {
    path: "/projectdetails",
    component: _5c7708cd,
    name: "projectdetails"
  }, {
    path: "/service",
    component: _8eebf2be,
    name: "service"
  }, {
    path: "/servicedetails",
    component: _fecd189e,
    name: "servicedetails"
  }, {
    path: "/",
    component: _2f7af73e,
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
