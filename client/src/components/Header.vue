<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        App
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: 'AdminMenu'}"
          active-class="is-active"
          class="navbar-item is-tab">AdminMenu
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
