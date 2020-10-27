<template>
   <div class="home">
      <Nav/>
   </div>
</template>

<script>

import Nav from '@/components/global/Nav'

export default {
   name: 'Home', 
   components: {
      Nav,
   }, 
   data() {
      return {
         //
      }
   }, 
   computed: {
      theme() {
         return this.$store.state.theme
      }
   },
}
</script>

<style lang='scss'>

</style>