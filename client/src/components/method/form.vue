<template>
  <div>
    <b-form-group label="分析法名" label-for="title">
      <b-form-input id="title" type="text" v-model="method.title" placeholder="分析法名" required></b-form-input>
    </b-form-group>
    <b-form-checkbox v-model="method.haveLink">
      リンク有無
    </b-form-checkbox>
    <div v-show="method.haveLink">
      <b-form-group label="別紙名" label-for="annexedLinkTitle">
        <b-form-input id="annexedLinkTitle" type="text" v-model="method.annexedLink.title" placeholder="別紙名"></b-form-input>
      </b-form-group>
      <b-form-group label="別紙リンク" label-for="annexedLinkLink">
        <b-form-input id="annexedLinkLink" type="text" v-model="method.annexedLink.url" placeholder="別紙リンク"></b-form-input>
      </b-form-group>
      <hr>
      <h5>関連する公定法</h5>
      <submenu-list :submenu="method.submenu" v-if="method.submenu.length > 0"></submenu-list>
      <b-card header="公定法追加">
        <div class="card-block">
          <b-form-group label="タイトル" label-for="submenuTitle">
            <b-form-input id="submenuTitle" type="text" v-model="submenu.title" placeholder="タイトル"></b-form-input>
          </b-form-group>
          <b-form-group label="リンクタイトル" label-for="submenuLinkTitle">
            <b-form-input id="submenuLinkTitle" type="text" v-model="submenu.link.title" placeholder="リンクタイトル"></b-form-input>
          </b-form-group>
          <b-form-group label="リンク" label-for="submenuLink">
            <b-form-input id="submenuLink" type="text" v-model="submenu.link.url" placeholder="リンク"></b-form-input>
          </b-form-group>
          <b-card header="別紙"　bg-variant="light">
            <b-table striped hover
                  :items="submenu.annexed"
                  :fields = "annexedFields"
                  >
              <template slot="desc" scope="data">
                <p v-html="changeToEnterCode(data.value)"></p>
              </template>
              <template slot="actions" scope="data">
                <button class="btn btn-danger" @click="submenu.annexed.splice(data.index)">
                  削除
                </button>
              </template>
            </b-table>
            <b-form-group label="別紙名" label-for="annexedTitle">
              <b-form-input id="annexedTitle" type="text" v-model="annexed.title" placeholder="別紙名"></b-form-input>
            </b-form-group>
            <b-form-group label="別紙名" label-for="annexedDesc">
              <b-form-textarea id="annexedDesc" v-model="annexed.desc" @keydown="inputHandler" placeholder="説明" :rows="2"></b-form-textarea>
            </b-form-group>
            <button class="btn btn-warning" type="button" @click="addAnnexed">
              別紙追加
            </button>
          </b-card>
          <button class="btn btn-primary" type="button" @click="addSubmenu">
            公定法追加
          </button>
        </div>
      </b-card>
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
        link: {
          title: '',
          url: ''
        },
        annexed: []
      }
      this.initAnnexed()
    },
    initAnnexed () {
      this.annexed = {
        title: '',
        desc: ''
      }
    },
    changeToEnterCode (str) {
      return str.replace(/\n/g, '<br/>')
    }
  },
  data () {
    return {
      submenu: {
        title: '',
        link: {
          title: '',
          url: ''
        },
        annexed: []
      },
      annexed: {
        title: '',
        desc: ''
      },
      annexedFields: [
        {
          key: 'title',
          label: 'タイトル'
        },
        {
          key: 'desc',
          label: '詳細'
        },
        {
          key: 'actions',
          label: '削除'
        }
      ]
    }
  }
}
</script>

<style>

</style>
