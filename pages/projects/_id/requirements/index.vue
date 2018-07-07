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
            <b-btn
              class="edit-btn"
              @click="edit(todo)">
              edit
            </b-btn>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-btn @click="showNewReqModal">New&hellip;</b-btn>
        <!-- new requirements modal -->
        <EditReqModal
          ref="NewReqModal"
          v-model="newreq"
          @submit="newReqSubmit" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
import DisplayText from "~/components/reqs/text";
import DisplayUML from "~/components/reqs/uml";

import EditReqModal from "~/components/ReqEditModal";

export default {
  components: {
    "display-text": DisplayText,
    "display-plantuml": DisplayUML,
    EditReqModal
  },
  data: function () {
    return {
      newreq: {
        name: '',
        reqType: 'business'
      }
    }
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
    newReqSubmit(e) {
      console.log("gonna save new req", e);
      console.log("newreq=", this.newreq);
      this.$refs.NewReqModal.hide()
    },
    showNewReqModal() {
      console.log("showing new req modal")
      this.$refs.NewReqModal.show()
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
