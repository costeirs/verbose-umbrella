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
              <component

                v-bind:is="'display-'+todo.type"
                v-bind="todo"
                class="tab"
              ></component>
            </li>
            <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
          </ul>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex"
import DisplayText from '~/components/reqs/text'
import DisplayUML from '~/components/reqs/uml'

export default {
  components: {
    'display-text': DisplayText,
    'display-plantuml': DisplayUML
  },
  async fetch({ store, params }) {
    console.log("fetching reqs");
    await store.dispatch("requirements/getReqs");
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
