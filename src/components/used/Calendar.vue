<template>
  <el-col :span="12">
    <el-calendar v-model="value"></el-calendar>
  </el-col>
</template>
<script>
export default {
  data() {
    return {
      value: new Date()
    };
  }
};
</script>