<template>
  <nav
    class="header shadow-sm border-bottom bg-white fixed-top py-2 py-md-3"
    id="header"
    ref="header"
  >
    <div class="container-xl d-flex justify-content-between align-items-center">
      <a :href="$route.path[0]" class="me-3 me-sm-4" aria-label="to homepage">
        <h1 class="heading-c-2 fs-2 mb-0">FactoryFive</h1>
      </a>

      <div class="ms-auto d-flex align-items-center gap-2 gap-md-4">
        <div @click="$store.commit('toggleRules')" class="cursor-pointer">
          {{ $store.state.showRules ? "Hide rules" : "Rules" }}
        </div>

        <div class="btn btn-secondary" @click="$store.commit('togglePoints')">
          Points
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
