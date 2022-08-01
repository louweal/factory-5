<template>
  <div
    :class="showRules ? 'rules--active' : false"
    class="w-100 min-vh-100 position-absolute rules start-0"
  >
    <div class="container py-5">
      <div class="card p-5 animation-rules max-vh-100 position-relative">
        <div
          @click="toggleRules"
          class="
            position-absolute
            top-0
            start-0
            translate-middle-y
            rounded
            bg-secondary
            cursor-pointer
            border
            fw-bold
            py-1
            px-3
          "
        >
          <!-- {{ showRules ? "Hide" : "Show" }}  -->
          Rules
        </div>

        <div
          @click="toggleRules"
          class="
            position-absolute
            top-0
            start-50
            translate-middle
            rounded-circle
            bg-primary
            cursor-pointer
            border
            fw-bold
            py-1
            px-2
          "
        >
          <!-- {{ showRules ? "Hide" : "Show" }}  -->
          <div :class="`i bi-arrow-${showRules ? 'down' : 'up'}`"></div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-6">
            <h3>Overview</h3>
            <hr />

            <p><b>Deck:</b> 104 playing cards</p>

            <h3>Objective</h3>
            <hr />

            <p>
              Try to get as few as possible cards. Every card you get, yields a
              minus point for each
              <span class="heading-c-2">&nbsp;o</span>-symbol shown on that
              card!
            </p>

            <h3>Start</h3>
            <hr />

            <p>lorem ipsum to do</p>
          </div>
          <div class="col-12 col-lg-6">
            <h3>Rules</h3>
            <hr />

            <p>This game has only 4 simple rules!</p>

            <h4>#1: Ascending order</h4>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              molestias, rerum quo.
            </p>

            <h4>#2: Smallest difference</h4>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              molestias, rerum quo, odio ea iste ut illo velit deserunt est
              animi unde dolores enim. Deserunt repellendus fuga ipsam! Cum,
              esse?
            </p>

            <h4>#3: Full row</h4>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              molestias, rerum quo, odio ea iste ut illo velit deserunt est
              animi unde dolores enim. Deserunt repellendus fuga ipsam! Cum,
              esse?
            </p>

            <h4>#4: Lowest number</h4>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              molestias, rerum quo, odio ea iste ut illo velit deserunt est
              animi unde dolores enim. Deserunt repellendus fuga ipsam! Cum,
              esse?
            </p>

            <h3>End of game</h3>
            <hr />

            <p>The game end when one of the players lost all his points.</p>
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
      showRules: false,
    };
  },

  methods: {
    toggleRules() {
      this.showRules = !this.showRules;
    },
  },
};
</script>

<style lang="scss" scoped>
.rules {
  top: calc(100% - 2 * 42px); //calc(86% + 2vw);
  transition: all 0.5s ease-in;

  &--active {
    // bottom: auto;
    top: 0;
    z-index: 5;
    // bottom: 0;
  }
}
</style>
