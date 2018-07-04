export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
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
//   addTodo({ commit }, todo) {
//     commit('ADD_TODO', todo)
//   },
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
//   saveTodos({ state }) {
//     axios.put('/api/todos', { todos: state.todos })
//   },
  async getReqs ({ commit, rootState }) {
    console.log("getReqs")
    const currentProject = rootState.currentProject
    const { data } = await this.$axios.get('/api/projects/'+currentProject._id+'/requirements')
    commit('SET_TODOS', data)
  }
}
