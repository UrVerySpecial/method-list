<template>
  <div>
    <h1>水質基準項目(51項目)</h1>
    <hr>
    <b-table striped bordered hover
      :items="items"
      :fields="itemFields">
      <template slot="method" scope="data">
        <ul>
          <li v-for="method in data.value" :key="method._id">
            <div v-if="method.haveLink">
              <router-link :to="{ name: 'Method', params: {id: method._id} }">{{method.title}}</router-link>
            </div>
            <div v-else>
              {{method.title}}
            </div>
          </li>
        </ul>
      </template>
    </b-table>
<!--
    <b-table
      :data="items"
      :striped="true"
      :narrowed="true">
      <template scope="props">
        <b-table-column label="分類" width="40">
            {{ props.row.class }}
        </b-table-column>
        <b-table-column label="項目" width="300">
            {{ props.row.item }}
        </b-table-column>
        <b-table-column label="基準値" width="300">
            {{ props.row.standardValue }}
        </b-table-column>
        <b-table-column label="検査方法">
          <ul>
            <li v-for="method in props.row.method">
              <div v-if="method.haveLink">
                <router-link :to="{ name: 'Method', params: {id: method._id} }">{{method.title}}</router-link>
              </div>
              <div v-else>
                {{method.title}}
              </div>
            </li>
          </ul>
          <!-- <router-link :to="{ name: 'NewMethod' }">New Method</router-link>
            {{ props.row.title }} -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      itemFields: [
        {
          key: 'class',
          label: '分類'
        },
        {
          key: 'item',
          label: '項目'
        },
        {
          key: 'standardValue',
          label: '基準値'
        },
        {
          key: 'method',
          label: '検査方法'
        }
      ]
    }
  },
  computed: {
    isAdminPage () {
      return this.$route.path.search(/admin/) >= 0
    }
  },
  created () {
    this.getItemList()
  },
  methods: {
    getItemList () {
      return this.$http.get('items')
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
