<template>
  <NavBar />
  <section class="relative py-24 bg-black bg-bottom bg-cover" style="background-image:url('https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=905')">
    <div class="absolute inset-0 block w-full h-full opacity-25 bg-gradient-to-br from-transparent via-black to-transparent lg:hidden"></div>
    <div class="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-12 lg:flex-row">
      <div class="relative mb-6 lg:mb-0">
        <h2 class="w-full mx-auto mb-2 text-4xl font-extrabold leading-none text-center text-white md:text-5xl xl:text-6xl lg:text-left">Quality</h2>
        <p class="w-full max-w-3xl mx-auto text-base text-center text-gray-100 xl:text-xl lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  </section>
<section class="w-full py-32 bg-black">
    <div class="relative max-w-5xl px-12 mx-auto xl:px-0">
        <h2 class="font-bold text-white text-xl sm:text-4xl">Our quality is important</h2>
        <div class="my-20 border border-gray-800"></div>
        <div class="flex flex-col items-center lg:flex-row">
            <div class="relative w-full lg:w-2/3">
                <p class="text-xl font-normal text-gray-300"> Quality is a basic factor within our philosophy. Our fish follows a rigorous control and traceability in order to ensure an optimun quality.
Our qualified team of professionals performs the necessary controls aimed to meet the highest customer satisfaction. </p>
                <p class="mt-12 text-sm text-purple-500 uppercase">its real</p>
            </div>
            <div class="relative w-full lg:w-1/3">
                <img src="https://images.unsplash.com/photo-1550016728-6e898923de4c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861" class="w-full h-auto">
            </div>
             </div>
    </div>
</section>

<FooTer/>
</template>

<script>
import FooTer from '../components/FooTer.vue'
import NavBar from '../components/NavBar.vue'
export default {
    components: { NavBar,
                  FooTer}
}

</script>

<style>

</style>