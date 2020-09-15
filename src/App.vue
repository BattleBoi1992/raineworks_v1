<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  }, 
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Raineworks'
    }, 
    immediate: true
  },
  beforeCreate() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.dispatch('toggleTheme');
    }
  },
}
</script>

<style lang='scss'>

</style>