<template>
  <div class="background">
    <!-- {{ $route.path }} -->
    <particle v-for="i in 50" :key="i" />
    <particle v-for="j in 50" :ymin="66" :key="'j' + j" />
    <particle v-for="k in 50" :ymin="33" :key="'k' + k" />

    <particle v-for="i in 150" :key="'l' + i" class="d-none d-lg-block" />
    <particle
      v-for="j in 150"
      :ymin="66"
      :key="'m' + j"
      class="d-none d-lg-block"
    />
    <particle
      v-for="k in 150"
      :ymin="33"
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
  opacity: 0.45;
}
</style>
