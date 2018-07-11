export const state = () => ({
  list: []
})

export const mutations = {
  add(state, item) {
    if(!item.type){
      item.type = 'text'
    }
    state.list.push(item)
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  SET_TODOS (state, todos) {
    state.list = todos
  },
}

export const actions = {
  addTodo({ commit }, todo) {
    commit('add', todo)
  },
  setTodos({ commit }, todos) {
    commit('SET_TODOS', todos)
  },
//   removeTodo({ commit }, todo) {
//     commit('REMOVE_TODO', todo)
//   },
//   allDone({ state, commit }) {
//     var value = state.todos.filter(todo => todo.completed).length === state.todos.length
//     commit('FILTER_TODOS', value)
//   },
  async saveTodo({ dispatch, rootState }, todo) {
    dispatch('addTodo', todo)
    const currentProject = rootState.currentProject
    await this.$axios.post('/api/projects/'+currentProject._id+'/requirements', todo)
  },
// async saveTodos({ state }) {
//   await this.$axios.put('/api/projects/'+currentProject._id+'/requirements', { todos: state.todos })
// },
  async getReqs ({ commit, rootState }) {
    console.log("getReqs")
    const currentProject = rootState.currentProject
    const { data } = await this.$axios.get('/api/projects/'+currentProject._id+'/requirements')
    commit('SET_TODOS', data)
  }
}
