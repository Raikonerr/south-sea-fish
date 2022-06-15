<template>
  
    <NavBar />
    <section class="relative py-24 bg-white bg-bottom bg-cover" style="background-image:url('https://images.unsplash.com/photo-1530053969600-caed2596d242?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774')">
    <div class="absolute inset-0 block w-full h-full opacity-25 bg-gradient-to-br from-transparent via-black to-transparent lg:hidden"></div>
    <div class="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-12 lg:flex-row">
        <div class="relative mb-6 lg:mb-0">
            <h2 class="w-full mx-auto mb-2 text-4xl font-extrabold leading-none text-center text-white md:text-5xl xl:text-6xl lg:text-left">This section only for About us</h2>
            <p class="w-full max-w-3xl mx-auto text-base text-center text-gray-100 xl:text-xl lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a laborum, minus incidunt minima deserunt nulla animi enim praesentium nihil illum expedita quo similique corporis</p>
        </div>
        
        
    </div>
</section>

<section class="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
    <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div class="flex flex-col w-full md:flex-row">

            <!-- Top Text -->
            <div class="flex justify-between">
                <h1 class="relative flex flex-col text-6xl font-extrabold text-left text-black">
                    High
                    <span>Quality</span>
                    <span>Required</span>
                </h1>
            </div>
            <!-- Right Image -->
            <div class="relative top-0 right-0 p-10 mt-12 md:-mt-16  md:h-96">
                <img src="https://images.unsplash.com/photo-1531012278403-e5db3b774373?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" class="object-cover mt-3 mr-5 h-30 lg:h-96">
            </div>
        </div>

        <!-- Separator -->
        <div class="my-16 border-b border-gray-300 lg:my-24"></div>

        <!-- Bottom Text -->
        <h2 class="text-left text-gray-500 xl:text-xl">
            Building beautiful designs for your next project. We've unlocked the secret to converting visitors into customers. Download our re-usable and extandable components today.
        </h2>
    </div>
</section>
    <FooTer/>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FooTer.vue'
export default{
  name: 'AboutView',
  components: {
    NavBar,
    FooTer
}
}
</script>

<style scoped>

</style>
