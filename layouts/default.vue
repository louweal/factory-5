<template>
  <div id="top">
    <Background />

    <nuxt-link to="/">Factory 5</nuxt-link>

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
