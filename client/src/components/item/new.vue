<template>
  <div>
    <h1 class="title">水質基準項目 新規作成</h1>
    <form @submit.prevent="saveNewItem" id="myform">
      <b-field grouped>
        <b-field label="分類">
          <b-input v-model="newItem.class" placeholder="分類" required></b-input>
        </b-field>
        <b-field label="項目">
          <b-input v-model="newItem.item" placeholder="項目" required></b-input>
        </b-field>
        <b-field label="基準値">
          <b-input v-model="newItem.standardValue" placeholder="基準値" required></b-input>
        </b-field>
        <b-field label="検査方法">
          <b-select
            multiple
            v-model="newItem.method">
            <option v-for="method in methods" :value="method._id">{{method.title}}</option>
          </b-select>
          <!-- <b-input v-model="newItem.method" placeholder="検査方法" required></b-input> -->
        </b-field>
      </b-field>
      <button class="button is-primary" type="submit">追加</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      methods: [],
      newItem: {
        class: '',
        item: '',
        standardValue: '',
        method: []
      }
    }
  },
  computed: {
    isAdminPage () {
      return this.$route.path.search(/admin/) >= 0
    }
  },
  created () {
    this.getMethodList()
  },
  methods: {
    getMethodList () {
      return axios.get('/methods')
      .then(res => {
        console.log(res)
        this.methods = res.data
      })
    },
    async saveNewItem () {
      let res = await axios.post('item', this.newItem)
      console.log(res)
    }
  }
}
</script>

<style scoped>
</style>
