<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="first">{{first}}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="last">{{last}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import Qs from "qs";
export default {
  data() {
    return {
      first: this.getMenu(0),
      last: this.getMenu(1)
    };
  },
  watch: {
    $route() {
      this.first = this.getMenu(0);
      this.last = this.getMenu(1);
    }
  },
  methods: {
    getMenu(index) {
      return Qs.parse(window.sessionStorage.getItem("menuPath"))[index];
    }
  }
};
</script>