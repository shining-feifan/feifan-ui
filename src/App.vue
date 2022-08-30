<template>
  <div id="app">
<!--    <div class="row">
      <ff-button type="primary" disabled @click="getInfo">按钮</ff-button>
      <ff-button type="success">登录</ff-button>
      <ff-button type="info">删除</ff-button>
      <ff-button type="warning">删除</ff-button>
      <ff-button type="danger">删除</ff-button>
    </div>
    <div class="row">
      <ff-button plain type="primary">按钮</ff-button>
      <ff-button plain type="success">登录</ff-button>
      <ff-button plain type="info">删除</ff-button>
      <ff-button plain type="warning">删除</ff-button>
      <ff-button plain type="danger">删除</ff-button>
    </div>
    <div class="row">
      <ff-button plain round icon="icon-gift" type="primary">按钮</ff-button>
      <ff-button plain round icon="icon-gift" type="success">登录</ff-button>
      <ff-button plain round icon="icon-gift" type="info">删除</ff-button>
      <ff-button plain round icon="icon-gift" type="warning">删除</ff-button>
      <ff-button plain round icon="icon-gift" type="danger">删除</ff-button>
    </div>

    <div class="row">
      <ff-button plain circle type="primary">按</ff-button>
      <ff-button plain circle type="success">登</ff-button>
      <ff-button plain circle type="info">删</ff-button>
      <ff-button plain circle type="warning">删</ff-button>
      <ff-button plain circle type="danger">删</ff-button>
    </div>

    <div class="row">
      <ff-button plain disabled circle type="primary">按</ff-button>
      <ff-button plain disabled circle type="success">登</ff-button>
      <ff-button plain disabled circle type="info">删</ff-button>
      <ff-button plain disabled circle type="warning">删</ff-button>
      <ff-button plain disabled circle type="danger">删</ff-button>
    </div>

    <div class="row">
      <ff-button plain icon="icon-gift" circle type="primary"></ff-button>
      <ff-button plain icon="icon-gift" circle type="success"></ff-button>
      <ff-button plain icon="icon-gift" circle type="info"></ff-button>
      <ff-button plain icon="icon-gift" circle type="warning"></ff-button>
      <ff-button plain icon="icon-gift" circle type="danger"></ff-button>
    </div>-->
<!--    <ff-button type="primary"  @click="visible = true">按钮</ff-button>-->
<!--    <ff-dialog with="30%" top="150px" :visible.sync="visible" >111</ff-dialog>-->
<!--    <ff-dialog>
      <template  v-slot:title>
        <h3 style="color:red">我是标题</h3>
      </template>
    </ff-dialog>-->

<!--    <ff-input  placeholder="请输入密码" type="password" name="name" disabled=true></ff-input>-->
<!--    <ff-input v-model="username" clearable></ff-input>
    <ff-input type="password" v-model="username" clearable show-password></ff-input>-->

<!--    <ff-switch v-model="active"></ff-switch>
    <ff-switch v-model="active" active-color="#13ce66" inactive-color="#ff4949"></ff-switch>-->

<!--    <ff-radio v-model="gender" label="0">男</ff-radio>
    <ff-radio v-model="gender" label="1">女</ff-radio>-->

<!--    <ff-radio v-model="gender" label="0"></ff-radio>
    <ff-radio v-model="gender" label="1"></ff-radio>-->
<!--    <ff-radio-group v-model="gender">
      <ff-radio  label="0">男</ff-radio>
      <ff-radio  label="1">女</ff-radio>
    </ff-radio-group>-->

    <ff-checkbox-group>

      <ff-checkbox label="0"></ff-checkbox>
      <ff-checkbox label="1"></ff-checkbox>
      <ff-checkbox label="2"></ff-checkbox>
    </ff-checkbox-group>

  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: 'zs',
      active: false,
      gender: '0'
    }
  },
  components: {},
  methods: {
    getInfo() {
      console.log(123)
    },
    close (value) {
      this.visible = value
    }
  }
}
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;

  .ff-button {
    margin-right: 20px;
  }
}

#app {

}
</style>
