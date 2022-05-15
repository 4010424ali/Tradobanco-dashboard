import Vue from 'vue';
import VueRouter from 'vue-router';
import jwtDecode from 'jwt-decode';

import store from '@/store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/openTransactions',
      name: 'open',
      component: () => import('@/views/OpenTransaction.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: 'Open Transactions',
        breadcrumb: [
          {
            text: 'Open Transactions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/closeTransaction',
      name: 'close',
      component: () => import('@/views/CloseTransaction.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: 'Close Transactions',
        breadcrumb: [
          {
            text: 'Close Transactions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/moneteryTransaction',
      name: 'transaction',
      component: () => import('@/views/MoneteryTransaction.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: 'Monetery Transactions',
        breadcrumb: [
          {
            text: 'Monetery Transactions',
            active: true,
          },
        ],
      },
    },
    {
      path: '/webTrade',
      name: 'trade',
      component: () => import('@/views/WebTrade.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: 'Web Trade',
        breadcrumb: [
          {
            text: 'Web Trade',
            active: true,
          },
        ],
      },
    },
    {
      path: '/editDetails',
      name: 'edit',
      component: () => import('@/views/EditDetails.vue'),
      meta: {
        requiresAuth: true,
        pageTitle: 'Edit Details',
        breadcrumb: [
          {
            text: 'Edit Details',
            active: true,
          },
        ],
      },
    },
    {
      path: '/mt4',
      beforeEnter(to, from, next) {
        window.location.href = "https://download.mql5.com/cdn/web/solutionmarkets.software.ltd/mt4/smtrader4setup.exe";
      },
      name: 'mt4',
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        guest: true,
        layout: 'full',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        guest: true,
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        guest: true,
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
});


router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.app.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.state.app.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg');
  if (appLoading) {
    appLoading.style.display = 'none';
  }
});

export default router;
