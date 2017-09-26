<template>
  <div id="app">
    <header-bar></header-bar>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>

  </div>
</template>

<script>
import HeaderBar from './components/Header.vue'
export default {
  name: 'app',
  components: {HeaderBar}
}
</script>

<style>
</style>
