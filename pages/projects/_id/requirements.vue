<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Requirements</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ul>
          <li
            v-for="todo in todos"
            :key="todo._id"
            class="req-item">
            <component
              :is="'display-'+todo.type"
              v-bind="todo"
              class=""
            />
            <button
              class="edit-btn"
              @click="edit(todo)">
              edit
            </button>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-btn v-b-modal.newReqModal>New&hellip;</b-btn>
        <!-- new requirements modal -->
        <b-modal
          id="newReqModal"
          ok-title="Save"
          size="lg"
          title="New Requirement"
        >
          <b-container fluid>
            <b-row class="my-1">
              <b-col sm="3">
                <label for="newreq.name">Name:</label>
              </b-col>
              <b-col sm="9">
                <b-form-input
                  id="newreq.name"
                  :v-text="newreq.name"
                  size="sm"
                  type="text" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-tabs
                  no-fade>
                  <b-tab
                    active
                    title="Business Case">
                    Tab Contents 1
                  </b-tab>
                  <b-tab title="Justification">
                    Tab Contents 2
                  </b-tab>
                  <b-tab title="Links">
                    Tab Contents 3
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
import DisplayText from "~/components/reqs/text";
import DisplayUML from "~/components/reqs/uml";

export default {
  components: {
    "display-text": DisplayText,
    "display-plantuml": DisplayUML
  },
  data: function() {
    return {newreq: {name: null}}
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
    edit(item) {
      console.log("gonna edit", item);

    },
    ...mapMutations({
      toggle: "requirements/toggle"
    })
  }
};
</script>

<style scoped>
li {
  vertical-align: top;
}
.req-item .edit-btn {
  display: none;
}
.req-item:hover .edit-btn {
  display: block;
}
</style>
