<template>
  <div id="top">
    <Background />

    <Header />

    <div class="min-vh-100 d-flex flex-column justify-content-between">
      <div id="pushdown" class="mb-2 mb-md-3 mb-lg-4 w-100"></div>

      <Nuxt />
      <Footer />
    </div>
    <!-- <rules /> -->
  </div>
</template>

<script>
export default {
  async mounted() {
    let headerHeight = document.querySelector("#header").offsetHeight; //refs ?
    let pushdown = document.querySelector("#pushdown"); // refs?
    pushdown.style.height = headerHeight + "px";
  },
};
</script>
