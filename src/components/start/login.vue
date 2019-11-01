<template>
  <el-col :span="24">
    <el-form class="login-container">
      <h3 class="title">ADMIN</h3>
      <el-form-item>
        <el-input type="text" v-model="form.user" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.pass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" :loading="logining" @click="loginIn()">登录</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      logining: false,
      form: {
        user: "daichongweb",
        pass: "123456"
      },
      checked: true
    };
  },
  methods: {
    loginIn() {
      sessionStorage.setItem("user", "daichongweb");
      this.$router.push({ path: "/Home" });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 350px;
  margin: 180px auto;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>