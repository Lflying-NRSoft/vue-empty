<template>
  <div class="app">
    <header-layout></header-layout>
    <left-layout></left-layout>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
  import headerLayout from '@/views/layout/headerLayout'   // 头部
  import leftLayout from '@/views/layout/leftLayout'   // 左侧
  export default {
    name: "Home",
    components: {
      headerLayout,
      leftLayout,
    },
  };
</script>
<style scoped>
  .app {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .content {
    position: absolute;
    top: 80px;
    left: 250px;
    bottom: 0;
    right: 0;
    background-color: cadetblue;
  }
</style>