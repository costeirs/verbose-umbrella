<template>
  <b-container>
    <b-row>
      <b-col
        md="4"
        offset-md="4"
      >
        <b-card
          header="Please Log in"
          header-tag="header"
        >
          <b-form
            @submit="onSubmit"
            @reset="onReset"
          >
            <b-form-group
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="username"
                type="text"
                required
                autofocus
              />
            </b-form-group>
            <b-form-group
              label="Password:"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                required
              />
            </b-form-group>
            <b-button
              href="#"
              variant="success"
            >
              Go somewhere
            </b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: "nonav",
  data: function() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onReset: function() {
      this.username = "";
      this.password = "";
    },
    onSubmit: function() {
      console.log("submit", this.username, this.password);
    }
  }
};
</script>
