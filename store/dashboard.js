export const state = () => ({
  projects: []
})

export const mutations = {
  SET_PROJECTS(state, todos) {
    state.projects = todos.projects
  },
}

export const actions = {
  setProjects({ commit }, todos) {
    commit('SET_PROJECTS', todos)
  },
  async getDashboard({ commit }) {
    console.log("get dashboard")
    const { data } = await this.$axios.get('/api/dashboard')
    commit('SET_PROJECTS', data)
  }
}
