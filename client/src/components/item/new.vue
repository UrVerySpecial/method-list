<template>
  <div>
    <h1 class="title">水質基準項目 新規作成</h1>
    <b-form @submit.prevent="saveNewItem" id="myform">
      <b-form-group label="分類" label-for="submenuTitle">
        <b-form-input id="submenuTitle" type="text" v-model="newItem.class" placeholder="分類" required></b-form-input>
      </b-form-group>
      <b-form-group label="項目" label-for="item">
        <b-form-input id="item" type="text" v-model="newItem.item" placeholder="項目" required></b-form-input>
      </b-form-group>
      <b-form-group label="基準値" label-for="standardValue">
        <b-form-input id="standardValue" type="text" v-model="newItem.standardValue" placeholder="基準値" required></b-form-input>
      </b-form-group>
      <b-form-group label="検査方法">
        <b-form-select multiple v-model="newItem.method">
          <option v-for="method in methods" :value="method._id" :key="method._id">{{method.title}}</option>
        </b-form-select>
      </b-form-group>
      <button class="button is-primary" type="submit">追加</button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      methods: [],
      newItem: {}
    }
  },
  computed: {
    isAdminPage () {
      return this.$route.path.search(/admin/) >= 0
    }
  },
  created () {
    this.getMethodList()
    this.initItem()
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
      this.initItem()
    },
    initItem () {
      this.newItem = {
        class: '',
        item: '',
        standardValue: '',
        method: []
      }
    }
  }
}
</script>

<style scoped>
</style>
