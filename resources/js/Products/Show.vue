<template>
    <section 
        class="text-gray-700 body-font overflow-hidden"
        v-if="product"
        >
        <container class=" flex px-12 py-24 mx-auto">
            <div class="lg:w-3/5 mx-auto flex justify-around">
                <img src="https://picsum.photos/400/500" alt=" ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-small text-font text-gray-500 tracking-wideset uppercase inline-block mr-1"
                    v-for="category in product.categories"
                    v-text="category.name"
                ></h2>
                <h1 class="text-gray-900 text-3xl-little-font font-medium mb-2"
                    v-text="product.name"
                ></h1>
                <p class="leading-relaxed"
                    v-text="product.description"
                ></p>
                <div class="flex mt-6 pt-4 border-t-2 border-gray-200">
                    <span class="title-font font-medium text-2xl text-gray-900"
                        v-text="formatCurrency(product.price)"
                    ></span>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded"
                           @click="$store.commit('addToCart',product)" 
                    >Add to Cart</button>
                </div>
            </div>
        </container>
    </section>
</template>

<script>
export  default{
    methods:{
        formatCurrency(price){
            price =  (price/100);
            return price.toLocaleString('en-KE',{style:'currency',currency:'KES'})
        }
    },
    computed:{
        products(){
            return this.$store.state.products;
        },
        product(){
            return this.products.find(product => product.slug === this.$route.params.slug)
        }
    }
}
</script>