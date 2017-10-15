<template>
  <b-navbar type="light" variant="light">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        App
      </a>
    </div>
    <b-nav is-nav-bar>
      <b-nav-item>
        <router-link :to="{name: 'AdminMenu'}"
          active-class="is-active"
          class="navbar-item is-tab">AdminMenu
        </router-link>
      </b-nav-item>
    </b-nav>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
