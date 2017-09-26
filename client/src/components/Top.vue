<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="title">水質基準項目(51項目)</h1>
        </div>
      </div>
      <div class="level-right">
        <button class="button is-primary is-outlined">
          <b-icon icon="add"></b-icon>
        </button>
      </div>
    </nav>
    <b-table
      :data="items"
      :striped="true"
      :narrowed="true">
      <template scope="props">
        <b-table-column label="分類" width="40">
            {{ props.row.type }}
        </b-table-column>
        <b-table-column label="項目" width="300">
            {{ props.row.item }}
        </b-table-column>
        <b-table-column label="基準値" width="300">
            {{ props.row.default }}
        </b-table-column>
        <b-table-column label="検査方法">
            {{ props.row.method }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:3000/items'
export default {
  name: 'hello',
  data () {
    return {
      items: []
    }
  },
  created () {
    this.getItemList()
  },
  methods: {
    getItemList () {
      return axios.get(url)
      .then(res => {
        console.log(res)
        this.items = res.data
      })
    }
  }
}
</script>

<style scoped>
</style>
