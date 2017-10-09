<template>
  <div v-if="method">
    <h1 class="title">{{method.title}}</h1>
    <h2 class="subtitle is-6">別紙:
      <a :href="method.annexedLink.link">{{method.annexedLink.title}}</a>
    </h2>
    <hr>
    <h2 class="subtitle is-4">関連する公定法</h2>
    <ul>
      <li v-for="sub in method.submenu">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              {{sub.title}}
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              <div v-if="sub.link && sub.linkTitle">
                <a :href="sub.link">{{sub.linkTitle}}</a>
              </div>
            </div>
            <template v-for="an in sub.annexed">
              <label for="" class="label">{{an.title}}</label>
              <p>{{an.desc}}</p>
            </template>
          </div>
        </div>
      </li>
    </ul>
    <hr>
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          アプリケーション
        </p>
        <a class="card-header-icon" @click="newApplication">
          <b-icon icon="add"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="message" v-if="showApplicationForm">
            <div class="message-body">
              <application-form @addApplication="addApplication" v-model="application"></application-form>
            </div>
          </div>
          <application-list @reset="getItem" :applications="method.applications"></application-list>
        </div>
      </div>
    </div>
    <hr>
    <h2 class="subtitle is-4">他社アプリ</h2>
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
        title: '',
        titleLink: '',
        issueDate: '',
        point: '',
        likeCount: 0
      }
    }
  }
}
</script>

<style>

</style>
