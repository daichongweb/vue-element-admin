
<template>
  <el-aside width="250px" style="background-color: rgba(238,241,246, 1)">
    <el-menu :default-openeds="['0']" :router="true">
      <template v-for="(item, index) in navList">
        <el-submenu :index="index.toString()" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.name}}
          </template>
          <div class="menu-item" v-for="(itemChild, childIndex) in item.child" :key="childIndex">
            <el-menu-item :index="itemChild.route">{{itemChild.name}}</el-menu-item>
          </div>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "常用组件",
          icon: "el-icon-platform-eleme",
          child: [
            {
              name: "Table",
              route: "/Home"
            },
            {
              name: "Form",
              route: "Form"
            },
            {
              name: "Calendar",
              route: "Calendar"
            }
          ]
        },
        {
          name: "数据交互",
          icon: "el-icon-s-platform",
          child: [
            {
              name: "PostForm",
              route: "PostForm"
            },
            {
              name: "PostList",
              route: "PostList"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>