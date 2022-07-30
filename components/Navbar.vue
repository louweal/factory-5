<template>
  <div class="container-fluid xxxbg-primary p-1 px-2">
    <div class="d-flex justify-content-between">
      <div>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="list-inline-item">
            <nuxt-link to="/new">New game</nuxt-link>
          </li>
          <li class="list-inline-item">
            <nuxt-link to="/invite">Invite</nuxt-link>
          </li>
          <li class="list-inline-item btn btn-primary">
            <nuxt-link to="/rules">Rules</nuxt-link>
          </li>
          <li class="list-inline-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="list-inline mb-0">
          <li class="list-inline-item heading-c-4 fs-4" v-if="$route.query.id">
            #{{ $route.query.id }}
          </li>
          <li class="xxxlist-inline-item heading-c-4 fs-1">+5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownActive: false,
    };
  },

  methods: {
    test() {
      let dd = this.$refs["dropdown"];

      if (!this.dropdownActive) {
        dd.style.display = "block";
        this.dropdownActive = true;
      } else {
        dd.style.display = "none";
        this.dropdownActive = false;
      }
    },
  },
};
</script>

<style>
.navbar {
}

.dropdown-menu {
}
</style>
