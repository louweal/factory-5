<template>
  <div id="top">
    <Background />

    <div class="fixed-top">
      <navbar />
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "Default",

  transition: "page",
};
</script>
