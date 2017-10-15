<template>
  <div>
    <h1 class="title">分析法新規作成</h1>
    <div class="float-right">
      <router-link class="button is-primary" :to="{ name: 'MethodList' }">リストへ</router-link>
    </div>
    <div class="clearfix"></div>
    <b-form @submit.prevent="save">
      <method-form v-model="method"></method-form>
      <button class="btn btn-primary" type="submit">追加</button>
    </b-form>
  </div>
</template>

<script>
import MethodForm from './form'
export default {
  components: {
    MethodForm
  },
  data () {
    return {
      method: {}
    }
  },
  created () {
    this.initMethod()
  },
  methods: {
    async save () {
      await this.$http.post('methods', this.method)
      this.initMethod()
    },
    initMethod () {
      this.method = {
        title: '',
        haveLink: false,
        submenu: [],
        annexedLink: {
          title: '',
          url: ''
        },
        applications: []
      }
    }
  }
}
</script>

<style>

</style>
