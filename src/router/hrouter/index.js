import { inject, ref } from 'vue'

const ROUTER_KEY = '__router__'

import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

function createRouter (options) {
  return new Router(options)
}

function useRouter () {
  return inject(ROUTER_KEY)
}

function createWebHistory () {
  function bindEvents (fn) {
    window.addEventListener('popstate', fn)
  }
  return {
    bindEvents,
    url: window.location.pathname || '/'
  }
}

class Router {
  constructor (options) {
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)

    this.history.bindEvents(() => {
      this.current.value = window.location.pathname
    })
  }

  install (app) {
    app.provide(ROUTER_KEY, this)
    app.component('router-link', RouterLink)
    app.component('router-view', RouterView)
  }
}

export { createRouter, useRouter, createWebHistory }
