<template>
  <div>
    <b-field label="分析法名">
      <b-input v-model="method.title" placeholder="分析法名" required></b-input>
    </b-field>
    <div class="field">
      <b-switch v-model="method.haveLink">リンク有無</b-switch>
    </div>
    <div v-show="method.haveLink">
      <b-field grouped>
        <b-field label="別紙名">
          <b-input v-model="method.annexedLink.title" placeholder="別紙名"></b-input>
        </b-field>
        <b-field label="別紙リンク">
          <b-input v-model="method.annexedLink.link" placeholder="別紙リンク"></b-input>
        </b-field>
      </b-field>
      <label class="tabel">
        関連する公定法
      </label>
      <submenu-list :submenu="method.submenu" v-if="method.submenu.length > 0"></submenu-list>
      <div class="message is-primary">
        <div class="message-header">
          <p>公定法追加</p>
          <button class="button" type="button" @click="addSubmenu">
            <b-icon icon="add"></b-icon>
          </button>
        </div>
        <div class="message-body">
          <b-field label="タイトル">
            <b-input v-model="submenu.title" placeholder="タイトル"></b-input>
          </b-field>
          <b-field label="リンクタイトル">
            <b-input v-model="submenu.linkTitle" placeholder="リンクタイトル"></b-input>
          </b-field>
          <b-field label="リンク">
            <b-input v-model="submenu.link" placeholder="リンク"></b-input>
          </b-field>
          <label for="" class="label">別紙</label>
          <b-table :data="submenu.annexed" :bordered="true" :striped="true" :narrowed="true">
            <template scope="props">
              <b-table-column label="別紙名">
                  {{ props.row.title }}
              </b-table-column>
              <b-table-column label="説明">
                  {{ props.row.desc }}
              </b-table-column>
              <b-table-column label="削除" width="100">
                <button type="button" class="button is-danger is-small" @click="deleteAnnexed(props.index)">
                  <b-icon icon="delete"></b-icon>
                </button>
              </b-table-column>
            </template>
          </b-table>
          <template scope="props">
            <b-table-column label="タイトル">
                {{ props.row.title }}
            </b-table-column>
            <b-table-column label="リンク">
                {{ props.row.link }}
            </b-table-column>
          </template>
          <div class="message">
            <div class="message-body">
              <b-field label="別紙名">
                <b-input v-model="annexed.title" placeholder="別紙名"></b-input>
              </b-field>
              <b-field label="説明">
                <b-input v-model="annexed.desc" @keydown="inputHandler" type="textarea" placeholder="説明"></b-input>
              </b-field>
              <button class="button is-warning" type="button" @click="addAnnexed">
                <b-icon icon="add"></b-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmenuList from './submenuList'
export default {
  components: {
    SubmenuList
  },
  model: {
    prop: 'method'
  },
  props: {
    method: {
      type: Object
    }
  },
  methods: {
    deleteAnnexed (index) {
      this.submenu.annexed.splice(index, 1)
    },
    addSubmenu () {
      let newSubmenu = Object.assign({}, this.submenu)
      this.method.submenu.push(newSubmenu)
      this.initSubMenu()
    },
    inputHandler (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.submitForm()
      }
    },
    addAnnexed () {
      let newAnnexed = Object.assign({}, this.annexed)
      this.submenu.annexed.push(newAnnexed)
      this.initAnnexed()
    },
    initSubMenu () {
      this.submenu = {
        title: '',
        link: '',
        annexed: []
      }
      this.initAnnexed()
    },
    initAnnexed () {
      this.annexed = {
        title: '',
        desc: ''
      }
    }
  },
  data () {
    return {
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
  }
}
</script>

<style>

</style>
