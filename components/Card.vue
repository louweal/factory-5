<template>
  <div
    class="card bg-dark text-white mb-3"
    style="max-width: calc(20% - 4 * 0.25rem)"
  >
    <img
      :src="require(`~/images/bg${cat}.png`)"
      class="card-img"
      alt="factories"
    />
    <div class="card-img-overlay">
      <!-- <particle v-for="i in 50" :key="i" />
      <particle v-for="j in 50" :min="66" :key="'j' + j" /> -->
      <particle v-for="k in 15" :min="33" :key="'k' + k" />

      <div class="d-flex justify-content-between">
        <div>
          {{ num }}
        </div>
        <div class="text-center">
          <span
            class="text-center"
            style="letter-spacing: 1px; line-height: 7px"
          >
            <span v-for="i in cat" :key="i">
              o
              <br v-if="cat > 3 && parseInt(cat / 2) === i" />
            </span>
          </span>
        </div>
        <div>
          {{ num }}
        </div>
      </div>

      <h3 class="card-title text-center display-1">
        {{ num }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: -1,
      required: true,
    },
  },

  computed: {
    cat() {
      if (this.num === 5) {
        return 7;
      }
      if (this.num % 10 === 0) {
        return 2;
      }
      if (this.num % 5 === 0) {
        return 3;
      }
      let s = this.num.toString();

      if (s.length > 1 && [...new Set(s.split(""))].length === 1) {
        // repdigit
        return 5;
      } else {
        return 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  font-family: "Chewy", sans-serif;

  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;

  &-title {
    // font-size: 7.5rem;
    text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
      -2px -2px 0 #000;
  }
}
</style>
