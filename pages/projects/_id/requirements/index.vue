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
            class="req-item"
          >
            <component
              :is="'display-'+todo.type"
              v-bind="todo"
              class=""
            />
            <b-btn
              class="edit-btn"
              @click="edit(todo)"
            >
              edit
            </b-btn>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-btn @click="showNewReqModal">
          New&hellip;
        </b-btn>
        <!-- new requirements modal -->
        <EditReqModal
          ref="NewReqModal"
          v-model="newreq"
          @submit="newReqSubmit"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
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
      newreq: {}
    }
  },
  computed: {
    todos() {
      return this.$store.state.requirements.list;
    }
  },
  async fetch({ store, params }) {
    console.log("fetching reqs");
    await store.dispatch("requirements/getReqs");
  },
  methods: {
    edit(item) {
      console.log("gonna edit", item);
      this.newreq = item
      this.$refs.NewReqModal.show()
    },
    async newReqSubmit(e) {
      console.log("gonna save new req", e);
      console.log("newreq=", this.newreq);
      await this.addTodo(this.newreq)
      this.$refs.NewReqModal.hide()
    },
    showNewReqModal() {
      console.log("showing new req modal")
      this.newreq = {
        text: '',
        reqType: 'business'
      }
      this.$refs.NewReqModal.show()
    },
    ...mapActions({
      addTodo: "requirements/saveTodo"
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
