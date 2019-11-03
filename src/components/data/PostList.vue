<template>
  <section>
    <!-- 搜索 -->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="form">
        <el-form-item>
          <el-input v-model="name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
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
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
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
import { getUserList, delUser } from "@/api/form/api";

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
      page: 1,
      name: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delUser({}, { action: "delUser", id: id }).then(response => {
            if (response.code == 200) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.getList();
            } else {
              this.$message({
                type: "error",
                message: "删除失败!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    getList(page = 1, name = "") {
      getUserList({}, { action: "list", page: page, name: name }).then(
        response => {
          this.tableData = response.data.data;
          this.total = response.data.total;
        }
      );
    },
    changePage(page) {
      this.getList(page);
    },
    search() {
      this.getList(this.page, this.name);
    }
  }
};
</script>