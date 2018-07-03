<template>
  <b-container>
    <b-row class="mt-4">
      <b-col
        v-for="project in projects"
        :key="project.id"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        xl="2"
        class="site text-center">
        <nuxt-link :to="'/projects/'+project.id+'/requirements'">
          <img
            :src="'http://placehold.it/300x300/000000/ffffff?text='+project.name"
            style="max-width:150px;">
          <div>{{ project.name }}</div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async fetch({ store, params }) {
    console.log("fetching dashboard");
    await store.dispatch("dashboard/getDashboard");
  },
  computed: {
    projects() {
      return this.$store.state.dashboard.projects;
    }
  }
};
</script>

<style>
.site {
  margin-bottom: 1rem;
}
.site a {
  color: black;
}
.site a:hover img {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.site a:active {
  position: relative;
  top: 3px;
}
</style>
