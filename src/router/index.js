import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home-page/Home'
import Projects from '@/pages/projects-catelog/Projects'
import Blog from '@/pages/blog-catelog/Blog'
import Contact from '@/pages/contact-page/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'Home', 
    component: Home, 
    meta: {
      title: 'Home - Raineworks', 
      metaTags: [
        {
          name: '', 
          content: ''
        }, 
        {
          property: '', 
          content: ''
        }
      ]
    }
  }, 
  {
    path: '/projects', 
    name: 'Projects', 
    component: Projects, 
    meta: {
      title: 'Projects - Raineworks', 
      metaTags: [
        {
          name: '', 
          content: ''
        }, 
        {
          property: '', 
          content: ''
        }
      ]
    }
  }, 
  {
    path: '/blog', 
    name: 'Blog', 
    component: Blog, 
    meta: {
      title: 'Blog - Raineworks', 
      metaTags: [
        {
          name: '', 
          content: ''
        }, 
        {
          property: '', 
          content: ''
        }
      ]
    }
  }, 
  {
    path: '/contact', 
    name: 'Contact', 
    component: Contact, 
    meta: {
      title: 'Contact - Raineworks', 
      metaTags: [
        {
          name: '', 
          content: ''
        }, 
        {
          property: '', 
          content: ''
        }
      ]
    }
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
