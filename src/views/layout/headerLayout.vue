<doc>
  头部
</doc>
<template>
  <div class="top">
    <h1>Vue空项目框架 —— 超级无敌炫酷暴龙战神 制作</h1>
    <p>你好，{{username}} 先生</p>
  </div>
</template>
<script>
  export default {
    computed: {
      username: {
        get() {
          return this.$store.state.common.username
        },
      },
    }
  }
</script>
<style scoped>
.top {
  height: 80px;
  width: 100%;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>