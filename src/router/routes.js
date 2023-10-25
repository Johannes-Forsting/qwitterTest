
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'booking', component: () => import('pages/bookingPage.vue') },
      { path: 'information', component: () => import('pages/informationPage.vue') },
      { path: 'gallery', component: () => import('pages/GalleryPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
