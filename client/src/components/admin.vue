<template>
  <div>
    <div class="menu">
      <p class="menu-label">
        Item
      </p>
      <ul class="menu-list">
        <li>
          <router-link :to="{ name: 'NewItem' }">New Item</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ItemList' }">Item List</router-link>
        </li>
      </ul>
      <p class="menu-label">
        Method
      </p>
      <ul class="menu-list">
        <li>
          <router-link :to="{ name: 'NewMethod' }">New Method</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'MethodList' }">Method List</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
