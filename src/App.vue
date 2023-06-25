<template>
  <router-link to="/" class="btn btn-primary m-3">Home</router-link>
  <a href="/" class="btn btn-primary m-3">Zur Startseite</a>
  <div class="container">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      baseUrl: window.location.origin,
    };
  },
  components: {
    
  },
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css');
</style>