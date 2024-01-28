<script setup>
import navComponent from '../components/navComponent.vue'
</script>

<template>
    <!-- <header>
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="../assets/images/Instagram_logo.png" alt="" class="logo"></a>
      </div>
    </nav>
  </header> -->
  <div class="row mx-0">
    <navComponent />
    <main class="col m-0 border-start min-vh-100">
      profile
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>

      <button type="button" class="btn btn-link">Link</button>
    </main>
  </div>

</template>
