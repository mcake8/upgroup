import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)


// const About = () => import('./views/About.vue')
// const Home = () => import('./views/Home.vue')

export function createRouter () {
  return new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
    ]
  })
}
