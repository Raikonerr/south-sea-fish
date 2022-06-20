<template>
<div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

        <Sidebar />

        <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

            <Navbar />
            <div class="relative text-gray-600 w-auto">
                <input type="text" v-model="searchQuery" placeholder="Search products..." class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none">
            </div>

            <div class="px-4 sm:px-6 lg:px-8 m-2">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h1 class="text-xl font-semibold text-gray-900">Customers</h1>
                        <p class="mt-2 text-sm text-gray-700">A list of all the costumers in your account including their username, adresse and email.</p>
                    </div>
                    
                </div>
                <div class="mt-8 flex flex-col">
                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle">
                            <div class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">Username</th>
                                            <th scope="col" class=" text-left text-sm font-semibold text-gray-900">Email</th>
                                            <th scope="col" class=" text-left text-sm font-semibold text-gray-900">Adresse</th>
                                            <th scope="col" class=" text-left text-sm font-semibold text-gray-900">Action</th>
                                            
                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white ">
                                        <tr v-for="person in users" :key="person.id">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">{{ person.username }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.adresse }}</td>
                                            
                                            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                                                <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto" @click="deleteCustomer(person.id)">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import axios from 'axios'
import Sidebar from '@/components/admin/layouts/Sidebar.vue'
import Navbar from '@/components/admin/layouts/Navbar.vue'
export default {
    name: 'Customer',
    computed: {
        ...mapState(['sideBarOpen'])
    },
    components: {
        Sidebar,
        Navbar,
    },
    data(){
        return{
            // username:'',
            // id:'',
            // email:'',
            // adresse:'',
            users:[],

        }

    },
    methods:{
        getCustomers(){
             axios.get('http://localhost/BACKFISH/Admin/fetchU')
            .then(response => 
                this.users = response.data
            ) 
        },
        
       async deleteCustomer(id){
           var form = new FormData();
              form.append('id', id);
              await axios.post('http://localhost/BACKFISH/Admin/deleteU',form)
                .then(response => {
                    this.getCustomers();
                    console.log(response.data);
                    
                })
                .catch(error => {
                    console.log(error);
                })
       }
        

        
    },
    mounted() {
            this.getCustomers()
            // console.log('logged in')
            // console.log(this.users)
            // axios.get('http://localhost/BACKFISH/Admin/fetchU')
            // .then(response => 
            //     this.users = response.data
            // ) 
        }
}
</script>
