<template>
  <el-container>
    <el-header>
      <header-nav></header-nav>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <left></left>
      </el-aside>
      <el-main>
        <breadcrumb-text></breadcrumb-text>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import header from "./layout/html/common/header.vue";
import left from "./layout/html/common/aside.vue";
import breadcrumb from "./layout/html/common/breadcrumb.vue";

export default {
  name: "app",
  components: {
    headerNav: header,
    left: left,
    breadcrumbText: breadcrumb
  }
};
</script>