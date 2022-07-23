<template>
  <main>
    <section class="py-5">
      <div class="row">
        <div class="col-12 col-md-2">hand</div>

        <div class="col-12 col-md-9 offset-md-1">
          <div class="hstack flex-wrap gap-1">
            <card :num="i" v-for="i in 20" :key="i" />
            <!-- <card :num="9" /> -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Main",

  transition: "page",

  data() {
    return {
      activeRow: 1,
      activeColor: -1,
    };
  },

  methods: {
    getSelected(id) {
      console.log(id);
      this.activeColor = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
