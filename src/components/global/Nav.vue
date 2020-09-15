<template>
   <div class="nav">
      <button @click="toggleTheme">Theme</button>
   </div>
</template>

<script>
export default {
   name: 'Nav', 
   components: {
      //
   }, 
   data() {
      return {
         //
      }
   },
   methods: {
      toggleTheme() {
         this.$store.dispatch('toggleTheme');
      }
   }
}
</script>

<style lang='scss'>

</style>