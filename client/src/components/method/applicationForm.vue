<template>
  <b-form @submit.prevent="addApplication">
    <b-form-group label="機種" label-for="applicationKind">
      <b-form-input id="applicationKind" v-model="application.kind" placeholder="機種" required></b-form-input>
    </b-form-group>
    <b-form-group label="使用装置">
      <b-form-input type="text" v-model="application.usedEquipment" placeholder="使用装置" required></b-form-input>
    </b-form-group>
    <b-form-group label="タイトル">
      <b-form-input type="text" v-model="application.link.title" placeholder="タイトル" required></b-form-input>
    </b-form-group>
    <b-form-group label="リンク">
      <b-form-input type="url" v-model="application.link.url" placeholder="リンク"></b-form-input>
    </b-form-group>
    <b-form-group label="発行年月">
      <b-form-input type="date" v-model="application.issueDate" placeholder="発行年月"></b-form-input>
    </b-form-group>
    <b-form-group label="おすすめポイント">
      <b-form-textarea v-model="application.point" placeholder="おすすめポイント"></b-form-textarea>
    </b-form-group>
    <button type="submit" class="btn btn-info">アプリケーション追加</button>
  </b-form>
</template>

<script>
export default {
  model: {
    prop: 'application'
  },
  props: {
    application: {
      type: Object
    }
  },
  methods: {
    addApplication () {
      this.$emit('addApplication')
    }
  }
}
</script>

<style>

</style>
