
<template>
<navbar/>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
      <h1 class="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

      <div class="mt-12">
        <section aria-labelledby="cart-heading">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          {{ panier.length }} items in your shopping cart

          <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
            <li v-for="(p, index) in panier" :key="p.id" class="flex py-6">
              <div class="flex-shrink-0">
                <img :src="require('../assets/'+p.image)"  class="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32" />
              </div>

              <div class="ml-4 flex-1 flex flex-col sm:ml-6">
                <div>
                  <div class="flex justify-between">
                    <h4 class="text-sm">
                      <a :href="p.name" class="font-medium text-gray-700 hover:text-gray-800">
                        {{ p.name }}
                      </a>
                    </h4>

                    <p class="ml-4 text-sm font-medium text-gray-900">{{ p.price * p.quantityOfUser }} DH</p>
                  </div>
                  <div class="ml-4 text-sm font-mono font-family: ui-monospace text-gray-900"> Quantity
                    <div class="font-variant-numeric slashed-zero text-3xl"> 
                      <button type="button" @click="distractToQuantity(index)"> <svg class="w-6 h-6 mr-3" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> </button>{{ p.quantityOfUser }} <button type="button" @click="addToQuantity(index)">  <svg class="w-6 h-6 ml-1" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> </button> </div>  
                  </div>
                </div>


                <div class="mt-4 flex-1 flex items-end justify-between">
                  <p class="flex items-center text-sm text-gray-700 space-x-2">
                    <CheckIcon v-if="p.quantity>0" class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                    <ClockIcon v-else class="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                    <span>{{ p.quantity>0 ? 'In stock' : `Will ship in ${p.leadTime}` }}</span>
                  </p>
                  <div class="ml-4">
                    <button type="button" @click="removeProduct(index)" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section aria-labelledby="summary-heading" class="mt-10">
          <h2 id="summary-heading" class="sr-only">Order summary</h2>

          <div>
           
              <div class="flex items-center justify-between">
                <dt class="text-base font-medium text-gray-900">
                  Subtotal
                </dt>
                <dd class="ml-4 text-base font-medium text-gray-900">
                  {{getTotalPrice()}} DH
                </dd>
              </div>
            
            <p class="mt-1 text-sm text-gray-500">
              Shipping and taxes will be calculated at checkout.
            </p>
          </div>

          <div class="mt-10">
            <button type="button"  @click="addOrder()"  class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
              Checkout</button>
          </div>

          <div class="mt-6 text-sm text-center">
            <p>
              or <router-link to="/product"  class="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></router-link>
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>


  <!-- This example requires Tailwind CSS v2.0+ -->

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  Ordered Successfully
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    We will organized your order as fast as possible <br> Thank you for trusting on us .
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button type="button" @click="removePanier()" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" >
                Go back
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>



</template>

<script>
import { CheckIcon, ClockIcon } from '@heroicons/vue/solid'
import navbar from '../components/NavBar.vue'
import axios from 'axios'
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'



export default {
  components: {
    CheckIcon,
    ClockIcon,
    navbar,
 
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    
  
  },
  setup() {
    const open = ref(false)

    return {
      open,
    }
  },
  data() {
    return {
      products:[],
      basket:[],
      panier: JSON.parse(localStorage.getItem('panier')) || [],
      total: 0,
    }
  },
methods:{


     async getProducts() {
       
            let res = await axios.get('http://localhost/BACKFISH/Admin/fetchP')
            this.products = res.data
            
            
            // this.getCategory()
        },
      getTotalPrice(){
        this.total = 0
        this.panier.forEach(p => {
          this.total += p.price * p.quantityOfUser
        })
        return this.total
      },

      addToQuantity(index){
        this.panier[index].quantityOfUser += 1;
      }, 

        distractToQuantity(index){
          this.panier[index].quantityOfUser > 1 && (this.panier[index].quantityOfUser -= 1);
        },

         async addOrder(){

           const form = new FormData()
           form.append('panier', JSON.stringify(this.panier))
            form.append('total', this.total)
            form.append('user_id', JSON.parse(localStorage.getItem('user')).id)


           let res = await axios.post('http://localhost/BACKFISH/Admin/addOrder', form)
           console.log(res.data)
            this.open = true
         
        },

         removePanier(){
           localStorage.removeItem('panier')
           this.open = false
           this.$router.push('/product')
         },


          removeProduct(index){
            this.panier.splice(index, 1)
            localStorage.setItem('panier', JSON.stringify(this.panier))
          },

},



      



  


  created(){
    
  },

  mounted(){

  }
  
}
</script>
