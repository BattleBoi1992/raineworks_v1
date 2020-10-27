<template>
   <div class="maintenance">
      <header>
         <img class="brand-large" v-if="theme == 'dark'" :src="$store.state.settings.logoDark"/>
         <img class="brand-large" v-else :src="$store.state.settings.logoLight"/>
      </header>
      <div>
      </div>
   </div>
</template>

<script>

// import workingMan from '@/assets/lottie/working-man.json';

export default {
   name: 'Maintenance',
   data() {
      return {
         // workingMan: workingMan,
      }
   },
   components: {
      //
   },
   computed: {
      theme() {
         let theme = this.$store.state.settings.theme
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