<template>
  <NavBar></NavBar>
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  data() {
    return {
      baseUrl: window.location.origin,
    };
  },
  components: {
    NavBar
  },
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css');
</style>