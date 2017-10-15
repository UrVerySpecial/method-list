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
    <!-- <template scope="props">
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
    </template> -->
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
