<template>
<div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

        <Sidebar />

        <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

            <Navbar />
            <div class="relative text-gray-600 w-50">
                <input type="text" v-model="searchQuery" placeholder="Search products..." class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none">
            </div>
            <button @click="this.showModal =!this.showModal" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6 mb-5 ">Add Product</button>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class=""></div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                N:
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 flex justify-center">
                                Actions
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(p,i) in resultQuery" :key="i" class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {{ 1+i++ }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {{ p.name }}
                            </th>
                            <td class="px-6 py-4">
                                <img class="h-24 w-24" :src="getImgUrl(p.image)" alt="">
                            </td>
                            <td class="px-6 py-4">
                                {{ p.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ p.prix }}
                            </td>
                            <td class="px-6 py-4">
                                {{ p.quantity }}
                            </td>
                            <td class=" p-12 flex justify-center items-center  ">
                                <!-- <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="deleteProduct(p.id)">Delete</a> -->
                                <svg type="button"  @click ="deleteProduct(p.id)" class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path></svg>
                               <svg class="w-6 h-6 cursor-pointer" @click="passData(p.id)" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    </div>

    <!-- Modal add products  -->

    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex mt-6">
        <div class="relative w-auto my-6 mx-auto w-full max-w-3xl ">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 class="text-3xl font-semibold">Add a Product</h3>
                    <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                    </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto w-full">
                    <div class="py-6 px-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">R3N0KI4R</h3>
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input v-model="name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input v-model="description" type="description" name="description" id="description" placeholder="anything specific about this modal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            </div>
                            <div>
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                                <select v-model="selectCategory" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                                    <option value="" disabled selected> select category</option>
                                    <option v-for="(c,i) in category" :key="i" :value="c.id">{{ c.title }}</option>
                                </select>
                            </div>
                            <div>
                                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                <input v-on:change="image=$event.target.files[0]" type="file" multiple name="image" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                            </div>
                            <div>
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                <input v-model="prix" type="number" name="prix" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                                <input v-model="quantity" type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
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
                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" v-on:click="this.showModal = !this.showModal">
                        Close
                    </button>
                    <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="addProduct()">
                        Add product
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- modal update product -->

    <div v-if="modalShow" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex mt-6">
        <div class="relative w-auto my-6 mx-auto w-full max-w-3xl ">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 class="text-3xl font-semibold">Update Product</h3>
                    <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                    </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto w-full">
                    <div class="py-6 px-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">R3N0KI4R</h3>
                        <form class="space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input v-model="product.name" type="text" name="name"  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input v-model="product.description" type="description" name="description" id="description" placeholder="anything specific about this modal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            </div>
                            <div>
                                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                                <select v-model="product.selectCategory" type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                                    <option value="" disabled selected> select category</option>
                                    <option v-for="(c,i) in category" :key="i" :value="c.id">{{ c.title }}</option>
                                </select>
                            </div>
                            <div>
                                <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                <input v-on:change="product.image=$event.target.files[0]" type="file" multiple name="image" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
                                
                            </div>
                            <div>
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                <input v-model="product.prix" type="number" name="prix" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                                <input v-model="product.quantity" type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="best fish" required>
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
                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" v-on:click="this.modalShow = !this.modalShow">
                        Close
                    </button>
                    <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" @click="updateProducts()">
                        update product
                    </button>
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
    name: 'Products',
    computed: {
        ...mapState(['sideBarOpen'])
    },
    components: {
        Sidebar,
        Navbar,
        // ...mapGetters(['products', 'categories'])
    },

    data() {
        return {
            searchQuery: '',
            showModal: false,
            modalShow: false,
            title: '',
            name: '',
            description: '',
            prix: '',
            quantity: '',
            image: '',
            selectCategory: '',
            products: [],
            category: [],
            product: {
                idCa: '',
                description: '',
                price: '',
                quantity: '',
                image: '',
                id: '',
                name: ''
            }

        }
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.products.filter((item) => {
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                })
            } else {
                return this.products;
            }
        }
    },
    created() {

        this.getCategory()
    },

    mounted() {
        this.getProducts()
    },

    methods: {
        getImgUrl(pet) {
            var images = require.context('../../../assets/', false)
            return images('./' + pet)
        },
        async addProduct() {

            var form = new FormData()
            // form.append('idCa',this.idCa)
            form.append('name', this.name)
            form.append('description', this.description)
            form.append('prix', this.prix)
            form.append('quantity', this.quantity)
            form.append('title', this.title)
            form.append('image', this.image)
            form.append('idCa', this.selectCategory)

            console.log(form)

            let res = await axios({
                method: 'POST',
                url: 'http://localhost/BACKFISH/Admin/addP',
                data: form,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (res.data.message == 'Produit ajouté avec succès') {
                
                this.showModal = false
                this.getProducts()
            } else {
                alert(res.data)
                this.showModal = false
                this.getProducts()
            }

            

        },
        // passData(product) {
            
        //     this.product.name = product.name
        //     this.product.description = product.description
        //     this.product.prix = product.prix
        //     this.product.quantity = product.quantity
        //     this.product.image = product.image
        //     this.product.selectCategory = product.idCa
        //     this.modalShow = true
            
        // },

        async updateProducts(){
            var form = new FormData()
            form.append('id',this.product.id)
            form.append('name', this.product.name)
            form.append('description', this.product.description)
            form.append('prix', this.product.prix)
            form.append('quantity', this.product.quantity)
            form.append('title', this.product.title)
            form.append('image', this.product.image)
            form.append('idCa', this.product.idCa)
            let res = await axios({
                method: 'POST',
                url: 'http://localhost/BACKFISH/Admin/editP',
                data : form,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(res.data)
            if(res.data=message == 'Produit modifié avec succès'){
                this.getProducts()
                this.modalShow = false
            }else{
                alert(res.data)
                this.modalShow = false
                this.getProducts()
            }

        },
        showAlert() {
      // Use sweetalert2
      this.$swal('deleted!');
    },
        async getProducts() {
            let res = await axios('http://localhost/BACKFISH/Admin/fetchP')
            this.products = res.data
            // this.getCategory()
        },
        async getCategory() {
            console.log('getCategory')
            let res = await axios('http://localhost/BACKFISH/Admin/fetchC')
            this.category = res.data
            console.log(this.category)
            // this.getCategory()
            // axios.get('http://localhost/BACKFISH/Admin/fetchC')
            // .then(response => 
            //     this.category = response.data
            // ) 
            // console.log(response.data)

        },

        async deleteProduct(id) {

            var form = new FormData()
            form.append('id', id)

            let res = await axios.post('http://localhost/BACKFISH/Admin/deleteP', form)
            if (res.data.message == 'Produit supprimé avec succès') {
                this.getProducts()
                console.log(res.data)
            } else {
                alert(res.data)
                this.getProducts()
            }

        },

    }
}
</script>

<style>

</style>
