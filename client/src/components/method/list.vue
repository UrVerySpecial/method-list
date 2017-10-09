<template>
  <div>
    <h1 class="title">検査方法一覧</h1>
    <div class="is-pulled-right">
      <router-link class="button is-primary" :to="{ name: 'NewMethod' }">新規作成</router-link>
    </div>
    <b-table
      :data="methods"
      :striped="true"
      :narrowed="true">
      <template scope="props">
        <b-table-column label="分析法名" width="100">
            {{ props.row.title }}
        </b-table-column>
        <b-table-column label="別紙名" width="100">
          <span v-if="props.row.annexedLink">
            {{props.row.annexedLink.title}}
          </span>
        </b-table-column>
        <b-table-column label="別紙リンク" width="100">
          <span v-if="props.row.annexedLink">
            {{props.row.annexedLink.link}}
          </span>
        </b-table-column>
        <b-table-column label="関連する公定法" width="500">
          <submenu-list :submenu="props.row.submenu"></submenu-list>
        </b-table-column>
        <b-table-column label="詳細">
          <router-link class="button is-link" :to="{ name: 'Method', params: {id: props.row._id} }">詳細</router-link>
        </b-table-column>
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
      methods: []
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
