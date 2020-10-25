<template>
   <div class="maintenance">
      <header>
         <img class="brand-large" v-if="theme == 'dark'" :src="$store.state.logoDark"/>
         <img class="brand-large" v-else :src="$store.state.logoLight"/>
      </header>
      <div>
         <lottie-animation path="@/assets/lottie/working-man.json"/>
      </div>
   </div>
</template>

<script>

export default {
   name: 'Maintenance',
   data() {
      return {
         //
      }
   },
   components: {
      //
   },
   computed: {
      theme() {
         let theme = this.$store.state.theme
         return theme
      },
   },
}
</script>

<style lang='scss'>

   .maintenance {
      height: 100vh;

      header {
         text-align: center;
      }
   }

   .brand-large {
      width: 300px;
      margin: 48px auto;
   }

</style>