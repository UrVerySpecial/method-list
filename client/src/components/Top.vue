<template>
  <div>
    <h1 class="title">水質基準項目(51項目)</h1>
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
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      methods: []
    }
  },
  computed: {
    isAdminPage () {
      return this.$route.path.search(/admin/) >= 0
    }
  },
  created () {
    this.getItemList()
    this.getMethodList()
  },
  methods: {
    getMethodList () {
      return this.$http.get('methods')
      .then(res => {
        console.log(res)
        this.methods = res.data
      })
    },
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
