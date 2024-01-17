import './bootstrap';

import {createApp} from 'vue';
import routes from './routes.js';
import   {createStore } from 'vuex';
import {createRouter, createWebHistory} from 'vue-router'
import axios from 'axios';



const router = createRouter({
    history: createWebHistory(),
    routes,
});

const store = createStore({
    state:{
        products : [],
        cart:[],
        order:{}
    },
    mutations:{
        updateProducts(state,products){
            state.products =  products;
        },
        addToCart(state,product){
            let productInCartIndex = state.cart.findIndex(item=> item.slug === product.slug);
            if(productInCartIndex !== -1){
                state.cart[productInCartIndex].quantity++;
                return;
            }
            product.quantity = 1
            state.cart.push(product)
        },
        removeFromCart(state,index){
            state.cart.splice(index,1);
        },
        updateOrder(state,order){
            state.order = order;
        },
        updateCart(state,cart){
            state.cart = cart
        }
    },
    actions:{

        getProducts({commit}){
              //get products
            axios.get('/api/products')
            .then((response)  => {
                commit('updateProducts',response.data)
            })
            .catch((error)=> console.error(error));
        },
        claerCart({commit}){
            commit('updateCart',[]);
        }
    },
    getters:{
        cartLenght : state => state.cart.length
    }
});

const app = createApp({
   
    created(){
        store.dispatch('getProducts')
            .then(_ => {})
            .catch((error)=> console.error(error) );
    },
    computed:{
        cartLenght(){
            return this.$store.getters.cartLenght;
        }
    }
});

app.use(store);
app.use(router);

app.mount('#app')