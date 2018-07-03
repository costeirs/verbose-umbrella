export const state = () => ({
  authUser: null,
  currentProject: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_CURRENT_PROJECT: function (state, newProject) {
    state.currentProject = newProject
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit, dispatch }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }

    // left outside auth for prototyping
    await dispatch("dashboard/getDashboard")
    commit('SET_CURRENT_PROJECT', 0)
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await this.$axios.post('/api/login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await this.$axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
