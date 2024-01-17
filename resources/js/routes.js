// import {createApp} from 'vue'
// import { createRouter ,createWebHistory  } from 'vue-router';
// createApp.bind(createRouter);

import index from './Products/Index.vue'
const routes =  [
    {
        path : '/',
        name : 'products.index',
        component: index
    },
    {
        path: '/product/:slug',
        name: 'products.show',
        component: ()=> import('@/Products/Show.vue')
    },
    {
        path: '/checkout',
        name: 'order.checkout',
        component: ()=> import ('@/Order/Checkout.vue')
    },
    {
        path: '/summary',
        name: 'order.summary',
        component:()=>import('@/Order/Summary.vue')
    }
];


// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

export default routes;
