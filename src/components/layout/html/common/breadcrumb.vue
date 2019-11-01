<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a>{{this.$route.name}}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>