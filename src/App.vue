<template>
  <div id="app" class="app-container" :class="theme">
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
    '$route' (to) {
      document.title = to.meta.title
    },
    immediate: true
  },
  beforeCreate() {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.dispatch('toggleTheme');
    }
    document.title = this.$route.meta.title
  },
  computed: {
    theme() {
      return this.$store.state.theme
    }, 
  },
}
</script>

<style lang='scss'>

  .app-container {
    min-height: 100vh;
    transition: $standard-transition;

    &.light {
      background-color: $background-light;
      color: $text-color-light;
    }

    &.dark {
      background-color: $background-dark;
      color: $text-color-dark;
    }
  }
</style>