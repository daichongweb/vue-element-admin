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
          <el-button size="mini" @click="edit()">编辑</el-button>
          <el-button size="mini" type="danger" @click="del()">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格 -->

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
    <!-- 分页 -->

    <!-- 弹框 -->
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width:50%;"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input-number v-model="form.age" controls-position="right" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-select v-model="form.city" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc" style="width:50%;"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 弹框 -->
  </section>
</template>

<script>
import { getUserList } from "@/api/home/api";

export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "杭州"
        },
        {
          value: "选项2",
          label: "北京"
        },
        {
          value: "选项3",
          label: "上海"
        },
        {
          value: "选项4",
          label: "郑州"
        },
        {
          value: "选项5",
          label: "湖南"
        }
      ],
      form: {
        name: "",
        age: "",
        date: "",
        desc: "",
        city: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "60px",
      tableData: [],
      total: 1
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
    getList() {
      getUserList({}, { action: "list" }).then(response => {
        this.tableData = response.data.data;
        this.total = response.data.total;
      });
    }
  }
};
</script>