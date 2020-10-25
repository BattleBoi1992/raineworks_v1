import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import About from '@/pages/about-page/About';
import Projects from '@/pages/projects-catelog/Projects';
import Blog from '@/pages/blog-catelog/Blog';
import Contact from '@/pages/contact-page/Contact';
import FourOhFour from '@/pages/utility/FourOhFour';
import Maintenance from '@/pages/utility/Maintenance';

Vue.use(VueRouter);

const routes = [
  // Re-route undefined paths to the 404 page. 
  {
    path: '*', 
    redirect: '/404'
  },
  // 404 utility page.
  {
    path: '/404', 
    name: '404', 
    component: FourOhFour, 
    meta: {
      checkMaintenance: true,
      title: 'Oops - Raineworks', 
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
  // Under construction utility page.
  {
    path: '/maintenance', 
    name: 'Maintenance', 
    component: Maintenance, 
    meta: {
      title: 'Under Construction - Raineworks', 
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
    path: '/', 
    name: 'About', 
    component: About, 
    meta: {
      checkMaintenance: true,
      title: 'Raineworks', 
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
      checkMaintenance: true,
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
      checkMaintenance: true,
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
      checkMaintenance: true,
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, 
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.checkMaintenance)) { 
    if(store.state.maintenance) {
      next({ name: 'Maintenance' });
    } else {
      next();
    }
  } else if(to.matched.some(record => record.name == 'Maintenance')) {
    if(!store.state.maintenance) {
      next({ name: 'Home' });
    } else{
      next();
    }
  } else {
    next();
  }
});

export default router