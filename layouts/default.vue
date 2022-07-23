<template>
  <div id="top">
    <Background />

    <a href="#">Factory 5</a>

    <navbar />

    <div class="container-lg">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",

  transition: "page",
};
</script>
