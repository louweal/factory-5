<template>
  <div id="top">
    <Background />

    <div class="fixed-top">
      <!-- <navbar /> -->

      <div
        @click="toggleRules"
        class="btn btn-secondary mx-2 my-1 xxxcursor-pointer"
      >
        RULES
      </div>
    </div>

    <Nuxt />

    <div
      v-if="showRules"
      class="
        w-100
        min-vh-100
        position-absolute
        top-50
        start-50
        translate-middle
      "
    >
      <div class="container py-5">
        <div class="card p-5 animation-rules max-vh-100 position-relative">
          <div
            @click="toggleRules"
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              rounded-circle
              bg-primary
              cursor-pointer
            "
          >
            <i class="bi-x fs-2 lh-1"></i>
          </div>

          <rules />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",

  transition: "page",

  data() {
    return {
      showRules: false,
    };
  },

  methods: {
    toggleRules() {
      this.showRules = !this.showRules;
    },
  },
};
</script>
