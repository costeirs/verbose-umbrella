<template>
  <b-modal
    ref="modal"
    :title="title"
    hide-header-close
    no-close-on-backdrop
    no-close-on-esc
    ok-title="Save"
    size="lg"
    @ok="onsubmit"
  >
    <b-container fluid>
      <b-row class="my-1">
        <b-col
          sm="2"
          lg="1"
        >
          <label for="name">
            Name:
          </label>
        </b-col>
        <b-col
          sm="7"
          md="8"
          lg="9"
        >
          <b-form-input
            id="name"
            v-model="value.text"
            size="sm"
            type="text"
          />
        </b-col>
        <b-col
          sm="3"
          md="2"
          class="p-0"
        >
          <b-form-select
            v-model="value.reqType"
            :options="reqTypeOptions"
            size="sm"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-tabs
            no-fade
          >
            <b-tab
              active
              title="Business Case"
            >
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
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "New Requirement"
    },
    value: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      reqTypeOptions: [
        { value: 'business', text: '💼 Business' }, // aka functional
        { value: 'system', text: '🛠 System' } // aka non-functional
      ]
    }
  },
  methods: {
    show() {
      this.$refs.modal.show()
    },
    hide() {
      this.$refs.modal.hide()
    },
    onsubmit: function (e) {
      e.preventDefault();
      // validation
      this.value.type = 'text'
      // notify parent
      this.$emit('submit')
    }
  }
}
</script>

<style>

</style>
