<template>
  <div class="container-fluid bg-light">
    <div class="d-flex justify-content-between">
      <div>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <nuxt-link to="/new">New game</nuxt-link>
          </li>
          <li class="list-inline-item">
            <nuxt-link to="/rules">Rules</nuxt-link>
          </li>
          <li class="list-inline-item">
            <nuxt-link to="/about">About</nuxt-link>
          </li>

          <!-- <li class="list-inline-item">
            <span @click="test">Help</span>
            <div
              class="dropdown-menu"
              ref="dropdown"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item" href="#">Invite friend</a>
              <a class="dropdown-item" href="#">Rules</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->

          <!-- <li>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="test"
              >
                Dropdown button
              </button>
            </div>
          </li> -->
        </ul>
      </div>
      <div>Score: 24 - 42</div>
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
