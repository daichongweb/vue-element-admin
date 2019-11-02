
<template>
  <el-aside width="250px" style="background-color: rgba(238,241,246, 1)">
    <el-menu :router="true" :default-active="this.$route.name" :unique-opened="true">
      <template v-for="(item, index) in navList">
        <el-submenu :index="item.name" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.name}}
          </template>
          <div class="menu-item" v-for="(itemChild, childIndex) in item.child" :key="childIndex">
            <el-menu-item :index="itemChild.name">{{itemChild.name}}</el-menu-item>
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
          route: "/Home",
          icon: "el-icon-platform-eleme",
          child: [
            {
              name: "Table",
              route: "/Table"
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
          route: "/PostForm",
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