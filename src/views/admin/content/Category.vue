<template>


  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

        <Sidebar />
        

        <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

            <Navbar />

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <button @click="this.showModal =!this.showModal" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2 mb-2">Add Category</button>
                <div class=""></div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                N:
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                    
                            <th scope="col" class="px-6 py-3">
                                Actions
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(c,i) in category" :key="c.id"  class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <td class="px-6 py-4">
                                {{ 1+i++ }}
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {{ c.title }} 
                            </th>
                           
                            <td class="px-6 py-4">
                                {{ c.description }}
                            </td>
                           
                            <td class="px-8 py-4 ">
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="deleteCategory(c.id)">Delete</a>
                            </td>
                            
                        </tr>

                    </tbody>
                </table>

                
            </div>

        </div>

            
         </div>
         

        </div>

        <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto w-full max-w-3xl">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-3xl font-semibold">Add category</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto w-full">
           <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">R3N0KI4R</h3>
                <form class="space-y-6" action="#" @click.prevent>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input v-model="title" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                    </div>
                    <div>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        <input  v-model="description" type="texte" name="description" id="description" placeholder="anything specific about this modal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                            </div>
                            
                        </div>
                        
                    </div>
                   
                    
                </form>
            </div>
          </div>
          <div class="flex-1 px-2 pt-2 mx-10 m-2"></div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              v-on:click="this.showModal = !this.showModal"
            >
              Close
            </button>
            <button
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              @click="addCategorie()"
            >
              Add Categorie
            </button>
          </div>
        </div>
      </div>
    </div>
        

   
</template>

<script>
import { mapState } from 'vuex' 
import Sidebar from '@/components/admin/layouts/Sidebar.vue'
import Navbar from '@/components/admin/layouts/Navbar.vue'
import axios from 'axios'
export default {
    name: 'Category',
    computed: {
        ...mapState(['sideBarOpen'])
    },
    components: {
        Sidebar,
        Navbar,
    },
    data() {
        return {
            category: [],
            showModal: false,
            title: '',
            description: '',
            id: '',

        }
    },
    methods:{ 

        toggleSidebar() {
            this.$store.commit('toggleSidebar')
        },
        toggleModal() {
      this.showModal = !this.showModal;
    },

        getCategory(){
            axios.get('http://localhost/BACKFISH/Admin/fetchC')
            .then(response => 
                this.category = response.data
            ) 
             
            
        },
       async deleteCategory(idd){
           var form = new FormData();
              form.append('id', idd);
                await axios.post('http://localhost/BACKFISH/Admin/deleteC', form)
                .then(response => {
                    this.getCategory();
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                })

        },
        async addCategorie(){

            console.log(this.title);

      var form = new FormData();
      form.append('title', this.title);
      form.append('description', this.description);
      let res = await axios({
        method: 'POST',
        url: 'http://localhost/BACKFISH/Admin/addc',
        data: form,
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (res.data.message == "Categorie ajouté avec succès"){
               this.showModal = !this.showModal

               this.getCategory()
      }else {
        this.message = "Categorie not added";
                    

      }

    }

    },
    mounted(){
        //  axios.get('http://localhost/BACKFISH/Admin/fetchC')
        //     .then(response =>
        //       this.category = response.data)

        this.getCategory()
    }

}
</script>

<style>

</style>