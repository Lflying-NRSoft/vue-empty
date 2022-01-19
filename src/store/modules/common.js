// 常规配置
export default {
  namespaced: true,
  state: {
    username: '超级无敌炫酷暴龙战神',   // 用户名
  },
  mutations: {
    // 修改用户名
    updateStatus(state, username) {
      state.username = username
    },
  }
}