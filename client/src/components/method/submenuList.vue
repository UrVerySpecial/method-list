<template>
  <b-table :data="submenu" :bordered="true" :striped="true" :narrowed="true">
    <template scope="props">
      <b-table-column label="タイトル">
          {{ props.row.title }}
      </b-table-column>
      <b-table-column label="リンク">
          {{ props.row.link }}
      </b-table-column>
      <b-table-column label="別紙">
        <ul v-for="a in props.row.annexed">
          <li>
            <p>{{a.title}}</p>
          </li>
          <li>
            <p>{{a.desc}}</p>
          </li>
        </ul>
      </b-table-column>
      <b-table-column label="削除" width="100">
        <button type="button" class="button is-danger is-small" @click="deleteSubmenu(props.index)">
          <b-icon icon="delete"></b-icon>
        </button>
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    submenu: {
      type: Array
    }
  },
  methods: {
    deleteSubmenu (index) {
      this.submenu.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
