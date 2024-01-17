<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4" v-if="!products.length">
        <a href="" class="block relative h-48 rounded overflow-hidden">
          <img src="https://dummyimage.com/200x300/b809b8/202cd4"
           alt="ecommerce  image" 
          class="object-cover object-center w-full h-full block">
        </a>
        <div class="mt-4">
          <h3 class="text-gary-500 text-xs tracking-wideset title-font mb-1 uppercase inline-block mr-2">N/A</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Loading</h2>
          <p class="mt-1">$0.00</p>
        </div>
      </div>
      <div class="flex flex-wrap -m-4" v-else>
        <div 
          class="lg:w-1/4 md:1/2 p-4 w-full mb-4 "
          v-for="product in products"
          :key="product.id"
          >
          <router-link
            class="block relative h-8 rounded overflow-hidden"
            :to="{name:'products.show',params:{slug:product.slug}}"
          >
            <img src="https://picsum.photos/400/500"
            alt="ecommerce  image" 
          class="object-cover object-center w-full h-full block">
          </router-link>
          <div class="mt-4">
            <h3 
              class="text-gary-500 text-xs tracking-wideset title-font mb-1 uppercase inline-block mr-2"
              v-for="category in product.categories"
              v-text="category.name"  
            ></h3>
            <h2 class="text-gray-900 title-font text-lg font-medium"
                v-text="product.name"
            ></h2>
            <p 
              class="mt-1"
              v-text="formatCurrency(product.price)"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export  default{
  computed:{
    products(){
      return this.$store.state.products;
    }
  },
  methods:{
    formatCurrency(price){
      price = (price/100);
      return price.toLocaleString('en-KE',{style:'currency',currency:'KES'});
    }
  }
    
}
</script>