<template>
  <b-table :data="applications" :bordered="true" :striped="true" :narrowed="true">
    <template scope="props">
      <b-table-column label="機種" width="30">
        {{props.row.kind}}
      </b-table-column>
      <b-table-column label="使用装置" width="50">
        {{props.row.usedEquipment}}
      </b-table-column>
      <b-table-column label="タイトル" width="100">
        {{props.row.title}}
      </b-table-column>
      <b-table-column label="発行年月" width="10s0">
        {{props.row.issueDate | dateFormat}}
      </b-table-column>
      <b-table-column label="おすすめポイント" width="300">
        <p v-html="changeToEnterCode(props.row.point)"></p>
      </b-table-column>
      <b-table-column label="評価" width="200">
        {{props.row.likeCount}}
        <button class="button is-primary is-small is-pulled-right" @click="addLike(props.row._id)">
          <b-icon icon="thumb_up"></b-icon>
        </button>
      </b-table-column>
      <b-table-column label="登録日" width="50">
        {{props.row.createDate | dateFormat}}
      </b-table-column>
    </template>
  </b-table>
</template>

<script>
export default {
  props: {
    applications: {
      type: Array
    }
  },
  methods: {
    addLike (applicationId) {
      console.log(applicationId)
      this.$http.patch(`methods/addLike/${applicationId}`)
      .then(res => {
        console.log(res)
        this.$emit('reset')
      })
    },
    changeToEnterCode (str) {
      return str.replace(/\n/g, '<br/>')
    }
  }
}
</script>

<style>

</style>
