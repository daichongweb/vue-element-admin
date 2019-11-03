<template>
  <el-form :rules="rules" ref="form" :model="form" label-width="100px" class="ruleForm">
    <el-form-item label="名字" required prop="name">
      <el-col :span="4">
        <el-input v-model="form.name" placeholder="请输入姓名" auto-complete="off"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="城市" required prop="city">
      <el-select v-model="form.city" placeholder="请选择城市">
        <el-option label="杭州" value="杭州"></el-option>
        <el-option label="北京" value="北京"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="村名" required prop="home">
      <el-col :span="4">
        <el-input v-model="form.home" placeholder="请输入村名" auto-complete="off"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="时间" required prop="date">
      <el-date-picker
        v-model="form.date"
        type="date"
        placeholder="选择日期"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="年龄" required prop="age">
      <el-input-number v-model="form.age" controls-position="right" :min="1" :max="100"></el-input-number>
    </el-form-item>
    <el-form-item label="地址" required prop="address">
      <el-col :span="6">
        <el-input type="textarea" v-model="form.address" placeholder="请输入地址" auto-complete="off"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { createUser } from "@/api/form/api";

export default {
  data() {
    return {
      form: {
        name: "",
        city: "",
        date: "",
        age: "",
        city: "",
        address: "",
        home: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        home: [
          { required: true, message: "请输入村名", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        date: [{ required: true, message: "请选择时间", trigger: "blur" }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        city: [{ required: true, message: "请选择城市", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          createUser({}, { action: "createUser", data: this.form }).then(
            response => {
              if (response.code == 200) {
                this.$message({
                  type: "success",
                  message: "添加成功!"
                });
                this.$router.push("/PostList");
                this.getList();
              } else {
                this.$message({
                  type: "error",
                  message: "添加失败!"
                });
              }
            }
          );
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>