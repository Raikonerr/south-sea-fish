<template>
   <!-- <div class="flex w-1/2 mx-auto mt-3">
       <a href="#" class="flex flex-col items-center p-2 bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <img 
       class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg" 
       src="data:image/jpeg;base64,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" alt="">
       <div class="flex flex-col justify-between p-4 leading-normal">
       <h5 class="mb-2 text-left text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       <p class="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       </div>
       </a>
   </div>  -->
   <div v-if="products.length" class="flex justify-center items-center min-h-screen bg-gray-200">
  <div aria-details="card" class="relative flex w-[300px] hover:w-[600px] transition-all duration-1000 ease-in-out h-96 overflow-hidden bg-white shadow-2xl">
    <div aria-details="image" class="relative min-w-xm w-[300px] scale-50 h-full bg-white flex justify-center items-center">
      <img class="h-auto w-auto max-w-xs transition duration-300 ease-out hover:-rotate-12 hover:-translate-x-5" :src="require('../assets/'+products[0].image)" />
    </div>
    <div  aria-details="details" class="bg-blue-200 relative min-w-sm h-full flex p-9 flex-col justify-center transition delay-500 ease-in-out">
      <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{{ products[0].name }}</h1>
      <h2><small class="text-sm font-medium mt-2">Product details</small></h2>
      <p class="text-md font-normal text-left">{{ products[0].description }}</p>
     <!-- <div class="flex justify-center items-center mt-5">
         Quantity
            <input type="number" class="w-12 h-12 border-2 border-gray-300 rounded-full p-1" value="1"  min="0" :max=" products.quantity"/>

         </div> -->
      <div class="flex justify-between items-center mt-4">
        <h2 class=""><sup class="text-2xl font-semibold">DH</sup><span class="text-4xl font-extrabold">{{ products[0].prix }} </span><small class="font-semibold">/T</small></h2>
        <a  @click="addToPanier({ id : products[0].id , quantity : products[0].quantity , price : products[0].prix  })" href="#" class="px-4 py-4 bg-white rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Add to cart</a>
      </div>
        <router-link to="/product"  class="bg-white text-red-400 text-center align-text-bottom w-24 h-12 rounded-lg border-2 border-black transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300">back</router-link>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    components:{

    },
    data(){
        return{
            products:[]
        }
    },
    methods:{

        async getProduct() {
            let res = await axios.get('http://localhost/BACKFISH/Admin/fetchOneP/'+this.$route.params.id);
            this.products.push(res.data);
            // console.log(products.length);
            // this.getCategory()
        },
        addToPanier(item){
          if(localStorage.getItem('panier')){
            let panier = [];
            panier = JSON.parse(localStorage.getItem('panier'));
            panier.push(item);
            localStorage.setItem('panier',JSON.stringify(panier));
        }else{
            localStorage.setItem('panier',JSON.stringify(item));
        }
        console.log(localStorage.getItem('panier'));
        }
     
    },
    mounted(){
        this.getProduct()
    }

    
    
}
</script>