<template>
    <div class="w-full">
        <div class="lg:w-2/3 w-full mx-auto mt-8 overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-rap">
                <thead>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-200 rounded-tl rounded-bl">Item</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-200">Quantity</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-200">Price</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-sm bg-gray-200">Actions</th>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in cart" :key="item.id">
                        <td class="p" v-text="item.name"></td>
                        <td class="p" v-text="item.quantity"></td>
                        <td class="p" v-text="cartLineTotal(item)"></td>
                        <td class="w-10 text-right">
                            <button class="flex ml-auto text-sm text-white bg-indigo-500 focus:outline-none border-0 py-2 px-6             focus:outline-none hover:bg-indigo-600"
                                    @click="$store.commit('removeFromCart',index)"
                            >Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 font-bold">Total Amount</td>
                        <td class="p-4 font-bold" v-text="cartQuantity"></td>
                        <td class="p-4 font-bold" v-text="cartTotal"></td>
                        <td class="p-4 font-bold"></td>
                    </tr>
                </tbody>
            </table>
            <!-- <div class="lg:w-2/3 w-full mx-auto mt0" v-if="cartQuantity !== 0">
                <div class="flex flex-wrap -mx-2 mt-8">
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="first_name" class="leading-7 text-sm text-gray-400">First name</label>
                            <input type="text" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="first_name"
                                v-model="customer.first_name"
                                :disabled="paymentProcessing"
                                id="first_name"
                                >
                        </div>
                    </div>

                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="last_name" class="leading-7 text-sm text-gray-400">last name</label>
                            <input type="text" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="last_name"
                                v-model="customer.last_name"
                                :disabled="paymentProcessing"
                                id="last_name"
                                >
                        </div>
                    </div>

                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="email"
                                v-model="customer.email"
                                :disabled="paymentProcessing"
                                id="email"
                                >
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2 mt-8">
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="address" class="leading-7 text-sm text-gray-400">Street Address</label>
                            <input type="text" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="address"
                                v-model="customer.address"
                                :disabled="paymentProcessing"
                                id="address"
                                >
                        </div>
                    </div>
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="city" class="leading-7 text-sm text-gray-400">city</label>
                            <input type="text" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="city"
                                v-model="customer.city"
                                :disabled="paymentProcessing"
                                id="city"
                                >
                        </div>
                    </div>

                    <div class="p-2 w-2/12">
                        <div class="relative">
                            <label for="state" class="leading-7 text-sm text-gray-400">state</label>
                            <input type="text" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="state"
                                v-model="customer.state"
                                :disabled="paymentProcessing"
                                id="state"
                                
                                >
                        </div>
                    </div>

                    <div class="p-2 w-2/12">
                        <div class="relative">
                            <label for="zip_code" class="leading-7 text-sm text-gray-400">zip code</label>
                            <input type="text" 
                                class="w-full bg-gray-100 pl-2 rounded border border-gray-300 hover:border-indigo-500 focus:outline-none"
                                name="zip_code"
                                v-model="customer.zip_code"
                                :disabled="paymentProcessing"
                                id="zip_code"
                                >
                        </div>
                    </div>
                </div>

                
                
            </div> -->
            
        </div>
    </div>
</template>

<script>
export  default{
    methods:{
        cartLineTotal(item){
            let price = (item.price*item.quantity);
            price = (price/100);
            return price.toLocaleString('en-KE',{style:'currency',currency:'KES'})
        }
    },
    data(){
        return{
            customer :{
                first_name:'',
                last_name:'',
                email:'',
                address:'',
                city:'',
                state:'',
                zip_code:'',
            },
            paymentProcessing:false
        }
    },
    computed:{
        cart(){
            return this.$store.state.cart;
        },
        cartQuantity(){
            return this.$store.state.cart.reduce((acc,item)=> acc + item.quantity,0);
        },
        cartTotal(){
            let price = this.cart.reduce((acc,item)=>acc+(item.price*item.quantity),0);
            price = (price/100);
            return price.toLocaleString('en-KE',{style:'currency',currency:'KES'})
        }
    }
}
</script>