<template>
  <div>
    <b-navbar
      toggleable="sm"
      type="dark"
      variant="dark">

      <b-navbar-toggle target="nav_collapse" />

      <b-navbar-brand to="/">
        Umbrella
      </b-navbar-brand>

      <b-collapse
        id="nav_collapse"
        is-nav>

        <!-- current project switcher -->
        <b-navbar-nav>
          <b-nav-item-dropdown v-if="projects.length > 0">
            <template slot="button-content">
              {{ currentProject.name }}
            </template>
            <b-dropdown-item
              v-for="p in projects"
              :key="p._id"
              :href="'/projects/'+p._id">
              {{ p.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item :to="currentProjectUrl+'/requirements'">Requirements</b-nav-item>
          <b-nav-item :to="currentProjectUrl+'/qa'">QA</b-nav-item>
          <b-nav-item :to="currentProjectUrl+'/artifacts'">Artifacts</b-nav-item>
        </b-navbar-nav>

        <!-- user menu -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="/help">Help</b-dropdown-item>
            <b-dropdown-item href="/logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    currentProject () {
      return this.$store.state.currentProject
    },
    currentProjectUrl() {
      return '/projects/' + this.currentProject._id
    },
    projects () {
      return this.$store.state.recentProjects
    }
  }
};
</script>
