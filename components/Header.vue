<template>
  <nav
    class="header shadow-sm border-bottom bg-white fixed-top py-2 py-md-3"
    id="header"
    ref="header"
  >
    <div class="container-xl d-flex justify-content-between align-items-center">
      <a :href="$route.path" class="me-3 me-sm-4" aria-label="to homepage">
        <h1 class="heading-c-2 fs-2 mb-0">FactoryFive</h1>

        <!-- <img
          xxxsrc="@/images/logo.svg"
          alt="to homepage"
          height="46"
        /> -->
      </a>

      <div class="ms-auto d-flex align-items-center gap-2 gap-md-4">
        <nuxt-link
          to="/account"
          event=""
          @click.native="$router.push('/account')"
          class="cursor-pointer"
        >
          Rules
        </nuxt-link>

        <div class="btn btn-secondary">Points</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      prevPosY: 0,
      showDropdown: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.aosHeader);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.aosHeader);
  },

  computed: {},

  methods: {
    aosHeader() {
      let header = this.$refs["header"];

      if (header) {
        let scrollY = window.pageYOffset;
        let direction = scrollY > this.prevPosY ? "down" : "up";

        if (
          direction === "down" &&
          scrollY > 0 &&
          !header.classList.contains("move-up")
        ) {
          header.classList.remove("move-down");
          header.classList.add("move-up");
        }

        if (direction === "up" && !header.classList.contains("move-down")) {
          header.classList.remove("move-up");
          header.classList.add("move-down");
        }

        // update previous scroll positon
        this.prevPosY = window.scrollY;
      }

      // hide dropdown on scroll
      let menu = this.$refs["dropdown-menu"];

      if (menu && this.showDropdown) {
        menu.style.display = "none";
        this.showDropdown = false;
      }
    },

    // toggleDropdown() {
    //   this.showDropdown = !this.showDropdown;
    // },

    // hideDropdown() {
    //   this.showDropdown = false;
    // },

    // toggleModal() {
    //   this.$store.commit("toggleModal");
    //   document.getElementById("page").classList.toggle("is-blurred");
    // },
  },
};
</script>
<style lang="scss" scoped>
.move-up {
  transform: translateY(-100%);
}

.move-down {
  transform: translateY(0);
}

.dropdown-menu {
  display: block;
}

.header {
  transition: transform 0.4s ease-in-out;
  will-change: transform;

  &-logo img {
    max-width: 20vw !important;
  }
}
</style>
