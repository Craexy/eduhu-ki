<template>
  <a href="/" class="btn btn-primary m-3">Zurück zur Startseite</a>
  <div class="container">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
};
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css');
</style>