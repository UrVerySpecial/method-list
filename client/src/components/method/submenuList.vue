<template>
  <b-table :items="submenu" :fields="submenuFields" striped hover>
    <template slot="link" scope="data">
      <div v-if="data.value.url">
        <a :href="data.value.url">{{data.value.title}}</a>
      </div>
      <div v-else>
        {{data.value.title}}
      </div>
    </template>
    <template slot="actions" scope="data">
      <button class="btn btn-danger" @click="submenu.splice(data.index)">
        削除
      </button>
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
  },
  data () {
    return {
      submenuFields: [
        {
          key: 'title',
          label: 'タイトル'
        },
        {
          key: 'link',
          label: 'リンク'
        },
        {
          key: 'actions',
          label: '削除'
        }
      ]
    }
  }
}
</script>

<style>

</style>
