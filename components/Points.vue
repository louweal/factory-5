<template>
  <div
    :class="$store.state.showPoints ? 'points--active' : false"
    class="w-100 position-absolute points start-50 top-50 translate-middle"
  >
    <div class="container py-5">
      <div class="card p-5 position-relative">
        <div
          @click="$store.commit('togglePoints')"
          class="
            position-absolute
            top-0
            end-0
            translate-middle
            rounded-circle
            bg-primary
            cursor-pointer
            border
            fw-bold
          "
        >
          <div class="mt-1 mx-1">
            <i class="bi-x fs-3 lh-1"></i>
          </div>
        </div>

        <div class="row">
          <div
            class="
              col-12 col-lg-6
              offset-lg-3
              text-center
              align-items-center
              justify-content-center
            "
          >
            <h3>Points</h3>
            <hr />
          </div>

          <div class="col-12 col-lg-6 offset-lg-3 mt-3">
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
  // data() {
  //   return {
  //     showPoints: false,
  //   };
  // },

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
};
</script>

<style lang="scss" scoped>
.points {
  transition: opacity 0.5s ease-in;
  z-index: 4;
  opacity: 0;
  visibility: hidden;

  &--active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
