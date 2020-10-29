<template>
   <div class="maintenance">
      <header>
         <img class="brand-large" v-if="theme == 'dark'" :src="$store.state.settings.logoDark"/>
         <img class="brand-large" v-else :src="$store.state.settings.logoLight"/>
      </header>
      <div class="animation-container">
         <LottiePlayer :name="workinMan.name" :path="workinMan.path" :loop="workinMan.loop"/>
      </div>
   </div>
</template>

<script>

import LottiePlayer from '@/components/tools/Lottieplayer.vue';

export default {
   name: 'Maintenance',
   data() {
      return {
         workinMan: {
            name: 'Working-Man',
            path: 'https://assets3.lottiefiles.com/packages/lf20_vo0a1yca.json',
            loop: true
         },
      }
   },
   components: {
      LottiePlayer,
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
      height: 100%;
      padding: 32px;

      header {
         text-align: center;
      }
   }

   .brand-large {
      width: 300px;
      margin: auto;
   }

   .animation-container {
      width: 50%;
      margin: auto;
   }

</style>