<doc>
  左侧
</doc>
<template>
  <div class="left">
    <el-menu :default-active="this.$router.path" router class="el-menu-vertical-demo">
      <el-menu-item index="/index">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/about">
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .left {
    height: calc(100% - 80px);
    width: 250px;
    background-color: aquamarine;
  }
</style>