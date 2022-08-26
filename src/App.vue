<template>
  <div id="app">
    <div class="row">
      <ff-button type="primary" @click="fu">按钮</ff-button>
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
      <ff-button plain round type="primary">按钮</ff-button>
      <ff-button plain round type="success">登录</ff-button>
      <ff-button plain round type="info">删除</ff-button>
      <ff-button plain round type="warning">删除</ff-button>
      <ff-button plain round type="danger">删除</ff-button>
    </div>

    <div class="row">
      <ff-button plain circle type="primary">按钮</ff-button>
      <ff-button plain circle type="success">登录</ff-button>
      <ff-button plain circle type="info">删除</ff-button>
      <ff-button plain circle type="warning">删除</ff-button>
      <ff-button plain circle type="danger">删除</ff-button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
  methods: {
    fu () {
      console.log(123)
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
