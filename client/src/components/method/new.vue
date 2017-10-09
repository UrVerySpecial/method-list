<template>
  <div>
    <h1 class="title">分析法新規作成</h1>
    <div class="is-pulled-right">
      <router-link class="button is-primary" :to="{ name: 'MethodList' }">リストへ</router-link>
    </div>
    <div class="is-clearfix"></div>
    <form @submit.prevent="save">
      <method-form v-model="method"></method-form>
      <button class="button is-primary" type="submit">追加</button>
    </form>
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
      method: {
        title: '',
        haveLink: false,
        submenu: [],
        annexedLink: {
          title: '',
          link: ''
        },
        applications: []
      },
      submenu: {
        title: '',
        link: '',
        annexed: []
      },
      annexed: {
        title: '',
        desc: ''
      }
    }
  },
  methods: {
    async save () {
      await this.$http.post('methods', this.method)
      this.$toast.open('作成成功')
      this.initMethod()
    },
    addApplication () {
      let newApplication = Object.assign({}, this.application)
      this.method.applications.push(newApplication)
      this.initApplication()
    },
    initMethod () {
      this.method = {
        title: '',
        haveLink: false,
        submenu: [],
        annexedLink: {
          title: '',
          link: ''
        },
        applications: []
      }
    },
    initApplication () {
      this.application = {
        type: '',
        usedEquipment: '',
        title: '',
        titleLink: '',
        issueDate: '',
        point: '',
        likeCount: '',
        updateDate: '',
        deleteComment: ''
      }
    }
  }
}
</script>

<style>

</style>
