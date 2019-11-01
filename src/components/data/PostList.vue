<template>
  <section>
    <!-- 搜索 -->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!-- 搜索 -->

    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      ref="multipleTable"
      tooltip-effect="dark"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
      <el-table-column prop="age" label="年龄" width="180"></el-table-column>
      <el-table-column prop="home" label="户口" width="180"></el-table-column>
      <el-table-column prop="city" label="城市" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <el-button size="mini" type="danger" @click="del()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格 -->

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage"
    ></el-pagination>
    <!-- 分页 -->
  </section>
</template>

<script>
import { getUserList } from "@/api/home/api";

export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        date: "",
        desc: "",
        city: ""
      },
      tableData: [],
      total: 1,
      page: 1
    };
  },
  created() {
    this.getList();
  },
  methods: {
    edit() {
      this.dialogFormVisible = true;
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add() {
      this.$message({
        message: "添加成功",
        type: "success"
      });
    },
    getList(page = 1) {
      getUserList({}, { action: "list", page: page }).then(response => {
        this.tableData = response.data.data;
        this.total = response.data.total;
      });
    },
    changePage(page) {
      this.getList(page);
    }
  }
};
</script>