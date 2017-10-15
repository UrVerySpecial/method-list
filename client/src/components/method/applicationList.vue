<template>
  <b-table :items="applications" :fields="applicationFields" striped hover>
    <template slot="link" scope="data">
      <div v-if="data.value.url">
        <a :href="data.value.url">{{data.value.title}}</a>
      </div>
      <div v-else>
        {{data.value.title}}
      </div>
    </template>
    <template slot="point" scope="data">
      <p v-html="changeToEnterCode(data.value)"></p>
    </template>
    <template slot="issueDate" scope="data">
      {{data.value | dateFormat}}
    </template>
    <template slot="createDate" scope="data">
      {{data.value | dateFormat}}
    </template>
    <template slot="likeCount" scope="data">
      {{data.value}}
      <button class="btn btn-primary btn-sm" @click="addLike(data.index)">
        いいね
      </button>
    </template>
    <template slot="actions" scope="data">
      <button class="btn btn-danger btn-sm" @click="deleteApplication(data.index)">
        削除
      </button>
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      applicationFields: [
        {
          key: 'kind',
          label: '機種'
        },
        {
          key: 'usedEquipment',
          label: '使用装置'
        },
        {
          key: 'link',
          label: 'タイトル'
        },
        {
          key: 'issueDate',
          label: '発行年月'
        },
        {
          key: 'point',
          label: 'おすすめポイント'
        },
        {
          key: 'likeCount',
          label: '評価'
        },
        {
          key: 'createDate',
          label: '登録日'
        },
        {
          key: 'actions',
          label: '削除'
        }
      ]
    }
  },
  props: {
    applications: {
      type: Array
    }
  },
  methods: {
    addLike (index) {
      console.log(index)
      console.log(this.applications[index])
      this.$http.patch(`methods/addLike/${this.applications[index]._id}`)
      .then(res => {
        console.log(res)
        this.$emit('reset')
      })
    },
    changeToEnterCode (str) {
      return str.replace(/\n/g, '<br/>')
    },
    deleteApplication (index) {
      console.log(index)
      console.log(this.applications[index])
      this.$http.delete(`methods/deleteAppication/${this.applications[index]._id}`)
      .then(res => {
        console.log(res)
        this.$emit('reset')
      })
    }
  }
}
</script>

<style>

</style>
