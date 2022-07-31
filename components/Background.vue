<template>
  <div class="background">
    <!-- {{ $route.path }} -->
    <particle v-for="i in 50" :key="i" />
    <particle v-for="j in 50" :ymin="66" :key="'j' + j" />
    <particle v-for="k in 50" :ymin="33" :key="'k' + k" />

    <particle
      v-for="i in 150"
      :key="'l' + i"
      :xmax="45"
      class="d-none d-lg-block"
    />
    <particle
      v-for="j in 150"
      :ymin="66"
      :xmax="45"
      :key="'m' + j"
      class="d-none d-lg-block"
    />
    <particle
      v-for="k in 150"
      :ymin="33"
      :xmax="45"
      :key="'n' + k"
      class="d-none d-lg-block"
    />
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url("~/images/bg-home.png"); // url("~/images/bg.jpg");
  background-size: cover;
  background-position: bottom center;
  opacity: 0.6;
  // transform: scale(200%);
  // transform-origin: bottom center;

  // animation: zoomOut 1.5s 2s cubic-bezier(0.2, 0, 0.1, 1) forwards;
}

@keyframes zoomOut {
  from {
    // transform: scale(200%);
  }
  to {
    transform: scale(100%);
  }
}
</style>
