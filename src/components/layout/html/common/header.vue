<template>
  <el-header>
    <el-col :span="3">
      <div class="grid-content bg-purple logo">ADMIN</div>
    </el-col>
    <el-col :span="2" style="float:right">
      <el-dropdown>
        <span class="el-dropdown-link">
          DaiChongweb
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <el-badge :value="200" :max="99" class="item">我的消息</el-badge>
          </el-dropdown-item>
          <el-dropdown-item>信息设置</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
    <el-col :span="1" class="align-center right">
      <el-avatar src="https://www.daichongweb.com/image/user.png"></el-avatar>
    </el-col>
  </el-header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginOut() {
      console.log(1)
      this.$confirm("您确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push({ path: "/Login" });
      });
    }
  }
};
</script>