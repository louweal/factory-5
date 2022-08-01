<template>
  <div
    :class="showPoints ? 'points--active' : false"
    class="w-100 position-absolute points start-0"
  >
    <div class="container py-5">
      <div class="card p-5 position-relative">
        <div
          @click="togglePoints"
          class="
            position-absolute
            top-100
            start-50
            translate-middle
            rounded-circle
            bg-primary
            cursor-pointer
            border
            fw-bold
          "
        >
          <div v-if="showPoints" class="mt-1 mx-1">
            <i class="bi-x fs-3 lh-1"></i>
          </div>

          <div v-else class="my-1 mx-2">
            {{ points }}
          </div>
        </div>

        <div class="row">
          <div
            class="
              col-12 col-lg-10
              offset-lg-1
              text-center
              align-items-center
              justify-content-center
            "
          >
            <h3>Points</h3>
            <hr />
          </div>

          <div class="col-12 col-lg-8 offset-lg-2 mt-3">
            <ul class="list-group">
              <li
                v-for="(player, index) in leaderboard"
                :key="index"
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                {{ player.name }}
                <span class="heading-c-2">{{ player.points }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPoints: false,
    };
  },

  props: {
    points: {
      type: Number,
      default: 50,
    },
    leaderboard: {
      type: [Array, Boolean],
      default: () => {},
    },
  },

  methods: {
    togglePoints() {
      this.showPoints = !this.showPoints;
    },
  },
};
</script>

<style lang="scss" scoped>
.points {
  bottom: calc(100% - 2 * 42px); //calc(86% + 2vw);
  transition: all 0.5s ease-in;
  z-index: 4;

  &--active {
    // bottom: auto;
    // top: 0;
    bottom: 25%;
  }
}
</style>
