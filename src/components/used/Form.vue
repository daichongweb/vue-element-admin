<template>
  <el-form :rules="rules" ref="form" label-width="100px" class="ruleForm">
    <el-form-item label="名称">
      <el-col :span="4">
        <el-input v-model="form.name"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间">
      <el-date-picker
        v-model="form.date"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio v-model="form.radio" label="1">男</el-radio>
      <el-radio v-model="form.radio" label="2">女</el-radio>
    </el-form-item>
    <el-form-item label="爱好">
      <el-checkbox-group v-model="form.checkList">
        <el-checkbox label="1">足球</el-checkbox>
        <el-checkbox label="2">篮球</el-checkbox>
        <el-checkbox label="3">菜徐坤</el-checkbox>
        <el-checkbox label="4" disabled>禁用</el-checkbox>
        <el-checkbox label="5" disabled>选中且禁用</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input-number v-model="form.age" controls-position="right" :min="1" :max="10"></el-input-number>
    </el-form-item>
    <el-form-item label="城市-单选">
      <el-select v-model="form.city" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="城市-多选">
      <el-select v-model="form.citys" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="付款方式">
      <el-switch
        v-model="form.type"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费"
      ></el-switch>
    </el-form-item>
    <el-form-item label="评分">
      <el-rate v-model="form.star"></el-rate>
    </el-form-item>
    <el-form-item label="内容">
      <el-col :span="6">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date: [],
        radio: "1",
        checkList: ["5", "3"],
        age: "",
        city: "",
        citys: [],
        type: "1",
        star: null,
        desc: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      rules: {}
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    }
  }
};
</script>