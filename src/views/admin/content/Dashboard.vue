<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Sidebar/>

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar/>
       



    

      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import Sidebar from '@/components/admin/layouts/Sidebar.vue'
import Navbar from '@/components/admin/layouts/Navbar.vue'
export default {
  name: 'Dashboard',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    Sidebar,
    Navbar,
  }
}


</script>