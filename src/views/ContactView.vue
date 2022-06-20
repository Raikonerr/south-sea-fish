<template>

<navbar/>
 <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Get in touch
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
           tell us ur opinion to improve our service
          </p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>Youcode Safi maroc</p>
                <p>Safi, OR 12345</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <PhoneIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3">
                  +212 6-79349177
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <MailIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3">
                  raikoner@mailinator.com
                </span>
              </dd>
            </div>
          </dl>
         
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12  ">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form  method="POST" class="grid grid-cols-1 gap-y-6 " @click.prevent>
            <div>
              <label   for="full-name" class="sr-only ">Full name</label>
              <input  v-model="name" type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Name" />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input id="email" v-model="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" />
            </div>
           
            <div class="">
              <label for="message" class="sr-only">Message</label>
              <textarea id="message" v-model="message" name="message" rows="3" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message" />
            </div>
            <div>
              <button @click="addMessage()" type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

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
                  Message Sent succesfully
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  Your message sent to our team. We will get back to you as soon as possible.
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

<footer/>
</template>

<script>
import axios from 'axios'
import { MailIcon, PhoneIcon } from '@heroicons/vue/outline'
import navbar from '@/components/NavBar.vue'
import footer from '@/components/FooTer.vue'
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'

export default {
components:{
    navbar,
    footer,
    MailIcon,
    PhoneIcon,
    CheckCircleIcon,
    XIcon
},
 setup() {
    const show = ref(false)

    return {
      show,
    }
  },

methods:{
  async addMessage(){
    var form = new FormData();

    form.append('name',this.name);
    form.append('email',this.email);
    form.append('message',this.message);
    
    console.log(form);

    let res = await axios({
      method: 'post',
      url:'http://localhost/BACKFISH/Admin/addContact',
      data: form,
      headers: {
        'Content-Type': 'multipart/form-data'
      }

    });

    if(res.data.message == 'Votre message a été envoyé avec succès'){
      this.name = '';
      this.email = '';
      this.message = '';
    }else{
      alert(res.data);
    }

    this.show = true;
  }
},



    
}
</script>
