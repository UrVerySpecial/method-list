<template>
  <form @submit.prevent="addApplication">
    <div class="columns">
      <div class="column">
        <b-field label="機種">
          <b-input v-model="application.kind" placeholder="機種" required></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="使用装置">
          <b-input v-model="application.usedEquipment" placeholder="使用装置" required></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="タイトル">
          <b-input v-model="application.title" placeholder="タイトル" required></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="リンク">
          <b-input type="url" v-model="application.titleLink" placeholder="リンク"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="発行年月">
          <b-input type="date" v-model="application.issueDate" placeholder="発行年月"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="おすすめポイント">
          <b-input type="textarea" v-model="application.point" placeholder="おすすめポイント"></b-input>
        </b-field>
      </div>
    </div>
    <button type="submit" class="button is-info">アプリケーション追加</button>
  </form>
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
