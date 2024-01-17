<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Shopping  Cart</title>
    @vite(['resources/js/app.js'])
    @vite(['resources/css/app.css'])
</head>
<body>
    
    <div id="app" >
        <header class="text-gray-700 bg-red-300 body-font">
            <div class="container mx-auto flex  flex-wrap p-5  justify-between md:flex">
                <router-link
                    class="flex align-baseline"
                    :to="{name:'products.index'}"
                >
                 <h4 class="px-2 text-2xl">Junior distributors</h4>
                </router-link>
                <router-link
                    class="inline-flex items-center  w-[fit-content]  justify-end bg-gray-200 bordor-0 py-1 px-3 focus:outline-none"
                    :to="{name : 'order.checkout'}"    
                >
                Checkout 
                <span class="inline-block ml-1"
                        v-text="'('+$store.state.cart.length+')'"></span>
                </router-link>
    
            </div>
        </header>
        <router-view></router-view>
    </div>
</body>
</html>