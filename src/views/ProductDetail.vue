<template>
  <div
    v-if="products.length"
    class="flex justify-center items-center min-h-screen bg-gray-200"
  >
    <div
      aria-details="card"
      class="
        relative
        flex
        w-[300px]
        hover:w-[600px]
        transition-all
        duration-1000
        ease-in-out
        h-96
        overflow-hidden
        bg-white
        shadow-2xl
      "
    >
      <div
        aria-details="image"
        class="
          relative
          min-w-xm
          w-[300px]
          scale-50
          h-full
          bg-white
          flex
          justify-center
          items-center
        "
      >
        <img
          class="
            h-auto
            w-auto
            max-w-xs
            transition
            duration-300
            ease-out
            hover:-rotate-12 hover:-translate-x-5
          "
          :src="require('../assets/' + products[0].image)"
        />
      </div>
      <div
        aria-details="details"
        class="
          bg-blue-200
          relative
          min-w-sm
          h-full
          flex
          p-9
          flex-col
          justify-center
          transition
          delay-500
          ease-in-out
        "
      >
        <h1
          class="
            text-2xl
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-3xl
          "
        >
          {{ products[0].name }}
        </h1>
        <h2><small class="text-sm font-medium mt-2">Product details</small></h2>
        <p class="text-md font-normal text-left">
          {{ products[0].description }}
        </p>
        <!-- <div class="flex justify-center items-center mt-5">
         Quantity
            <input type="number" class="w-12 h-12 border-2 border-gray-300 rounded-full p-1" value="1"  min="0" :max=" products.quantity"/>

         </div> -->
        <div class="flex justify-between items-center mt-4">
          <h2 class="">
            <sup class="text-2xl font-semibold">DH</sup
            ><span class="text-4xl font-extrabold">{{ products[0].prix }} </span
            ><small class="font-semibold">/T</small>
          </h2>
          <a
            @click="
              addToPanier({
                id: products[0].id,
                quantity: products[0].quantity,
                price: products[0].prix,
                image: products[0].image,
                name: products[0].name,
                description: products[0].description,
                quantityOfUser: 1,
                 
              })
            "
            href="#"
            class="
              px-4
              py-4
              bg-white
              rounded-lg
              border-2 border-black
              transition
              ease-in-out
              delay-150
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
            >Add to cart</a
          >
        </div>
        <router-link
          to="/product"
          class="
            bg-white
            text-red-400 text-center
            align-text-bottom
            w-24
            h-12
            rounded-lg
            border-2 border-black
            transition
            ease-in-out
            delay-150
            hover:-translate-y-1 hover:scale-110
            duration-300
          "
          >back</router-link
        >
      </div>
    </div>
  </div>

  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="show" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-green-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  Successfully Added!
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  check your product saved on your basket.
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="show = false" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'

export default {
  components: {
    CheckCircleIcon,
    XIcon
  },
  setup() {
    const show = ref(false)

    return {
      show,
    }
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProduct() {
      let res = await axios.get(
        "http://localhost/BACKFISH/Admin/fetchOneP/" + this.$route.params.id
      );
      this.products.push(res.data);
      // console.log(products.length);
      // this.getCategory()
    },
    addToPanier(item) {
      let panier = [];
      if (localStorage.getItem("panier")) {
        let panier = JSON.parse(localStorage.getItem("panier"));
        console.log(JSON.parse(localStorage.getItem("panier")).length);

        if (JSON.parse(localStorage.getItem("panier")).length > 1) {
          let exist = false;
          panier.forEach((element) => {
            if (element.id == item.id) {
              element.quantityOfUser += item.quantityOfUser;
              exist = true;
            }
          });
          if (exist) {
            localStorage.setItem("panier", JSON.stringify(panier));
          } else {
            let array = [...panier, item];
            localStorage.setItem("panier", JSON.stringify(array));
          }
        } else {
          if (panier.id == item.id) {
            panier.quantityOfUser += item.quantityOfUser;
            localStorage.setItem("panier", JSON.stringify(panier));
          } else {
            localStorage.setItem("panier", JSON.stringify([panier, item]));
          }
        }

        // panier = JSON.parse(localStorage.getItem('panier'));
        // panier.push(item);
        // localStorage.setItem('panier',JSON.stringify(panier));
      } else {
        localStorage.setItem("panier", JSON.stringify(item));
      }
      console.log(localStorage.getItem("panier"));
      this.show = true;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>