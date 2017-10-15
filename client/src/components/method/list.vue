<template>
  <div>
    <h3>検査方法一覧</h3>
    <div class="float-right">
      <router-link class="btn btn-primary" :to="{ name: 'NewMethod' }">新規作成</router-link>
    </div>
    <span class="clearfix"></span>
    <b-table striped hover
      :items="methods"
      :fields="fields">
      <template slot="actions" scope="row">
        <router-link class="btn is-link" :to="{ name: 'Method', params: {id: row.item._id} }">詳細</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import submenuList from './submenuList'
export default {
  components: {
    submenuList
  },
  data () {
    return {
      methods: [],
      fields: [
        {
          key: 'title',
          sortable: true
        },
        {
          key: 'haveLink',
          label: 'リンク有無'
        },
        {
          key: 'actions',
          label: '詳細'
        }
      ]
    }
  },
  created () {
    this.getMethodList()
  },
  methods: {
    getMethodList () {
      return this.$http.get('methods')
      .then(res => {
        console.log(res)
        this.methods = res.data
      })
    }
  }
}
</script>

<style>

</style>
