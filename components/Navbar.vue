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

        <b-navbar-nav>
          <b-nav-item to="/projects/0/requirements">Requirements</b-nav-item>
          <b-nav-item to="/projects/0/qa">QA</b-nav-item>
          <b-nav-item to="/projects/0/artifacts">Artifacts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
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
