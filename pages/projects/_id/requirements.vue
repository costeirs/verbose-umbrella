<template>
  <b-container>
    <b-row>
        <b-col>
          <b-jumbotron
          header="Requirements"
          >
          </b-jumbotron>

          <ul>
            <li v-for="todo in todos" v-bind:key="todo.id">
              <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
              <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
            <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
          </ul>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  async fetch ({ store, params }) {
    console.log("fetching reqs")
    await store.dispatch('requirements/getReqs');
  },
  computed: {
    todos() {
      return this.$store.state.requirements.list;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit("requirements/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "requirements/toggle"
    })
  }
};
</script>

<style>
</style>
