<template>
  <div v-if="method">
    <h1>{{method.title}}
      <small class="text-muted">
        別紙:
        <a target="_blank" :href="method.annexedLink.url">{{method.annexedLink.title}}</a>
      </small>
    </h1>
    <hr>
    <h4>関連する公定法</h4>
    <hr>
    <b-card v-for="(sub, index) in method.submenu" :key="index" :header="sub.title">
      リンク：<a target="_blank" :href="sub.link.url" class="card-link">{{sub.link.title}}</a>
      <b-list-group>
        <b-list-group-item v-for="(ax,index) in sub.annexed" :key="index">
          <h6>
            {{ax.title}}
          </h6>
          <p v-html="changeToEnterCode(ax.desc)"></p>
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <hr>
    <h4>アプリケーション
      <button class="btn btn-info float-right" @click="newApplication">追加</button>
    </h4>
    <span class="clearfix"></span>
    <hr>
    <b-card header="新規アプリケーション"　bg-variant="light" v-if="showApplicationForm">
      <application-form @addApplication="addApplication" v-model="application"></application-form>
    </b-card>
    <application-list @reset="getItem" :applications="method.applications"></application-list>
    <hr>
    <h4>他社アプリ</h4>
    <hr>
  </div>
</template>

<script>
import applicationList from './applicationList'
import applicationForm from './applicationForm'
export default {
  components: {
    applicationList,
    applicationForm
  },
  data () {
    return {
      method: null,
      showApplicationForm: false,
      application: null
    }
  },
  created () {
    this.getItem()
    this.initApplication()
  },
  methods: {
    newApplication () {
      this.showApplicationForm = !this.showApplicationForm
    },
    getItem () {
      this.initApplication()
      console.log(this.$route.params.id)
      return this.$http.get('/methods/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        this.method = res.data
      })
    },
    addApplication () {
      console.log(this.application)
      this.$http.post(`/methods/${this.$route.params.id}/newApplication`, this.application)
      .then(res => {
        console.log(res)
        this.getItem()
      })
    },
    initApplication () {
      this.showApplicationForm = false
      this.application = {
        kind: '',
        usedEquipment: '',
        link: {
          title: '',
          url: ''
        },
        issueDate: '',
        point: '',
        likeCount: 0
      }
    },
    changeToEnterCode (str) {
      return str.replace(/\n/g, '<br/>')
    }
  }
}
</script>

<style>

</style>
