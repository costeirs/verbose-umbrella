export const state = () => ({
  authUser: null,
  currentProject: null,
  recentProjects: []
})

export const mutations = {
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_CURRENT_PROJECT: function (state, newProject) {
    state.currentProject = newProject
  },
  SET_RECENT_PROJECTS: function (state, newRecentProjects) {
    state.recentProjects = newRecentProjects
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit, dispatch, rootState }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }

    // left outside auth for prototyping
    await dispatch("getRecentProjects")
    if (rootState.recentProjects.length > 0) {
      commit('SET_CURRENT_PROJECT', rootState.recentProjects[0])
    }
  },
  async getRecentProjects({ commit }) {
    console.log("getting recent projects")
    const { data } = await this.$axios.get('/api/projects/recent')
    commit('SET_RECENT_PROJECTS', data)
  },
  /**
   * Account actions
   */
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
