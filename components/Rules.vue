<template>
  <div
    class="w-100 min-vh-100 position-absolute start-0 top-0 rules"
    :class="$store.state.showRules ? 'rules--active' : false"
  >
    <div
      class="
        rules__bg
        min-vh-100 min-vw-100
        position-absolute
        top-0
        cursor-pointer
      "
      :class="$store.state.showRules ? 'rules__bg--active' : false"
      @click="$store.commit('toggleRules')"
    ></div>
    <div>
      <div class="container py-5">
        <div
          class="
            card
            rules__inner
            p-5
            animation-rules
            max-vh-100
            position-relative
          "
          :class="$store.state.showRules ? 'rules__inner--active' : false"
        >
          <div
            @click="$store.commit('toggleRules')"
            class="
              position-absolute
              end-0
              top-0
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
            <i class="bi bi-x-lg fw"></i>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <h3>Overview</h3>
              <hr />

              <p><b>Deck:</b> 104 playing cards</p>

              <h3>Objective</h3>
              <hr />

              <p>
                Try to get as few as possible cards. Every card you get, yields
                a minus point for each
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione molestias, rerum quo.
              </p>

              <h4>#2: Smallest difference</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione molestias, rerum quo, odio ea iste ut illo velit
                deserunt est animi unde dolores enim. Deserunt repellendus fuga
                ipsam! Cum, esse?
              </p>

              <h4>#3: Full row</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione molestias, rerum quo, odio ea iste ut illo velit
                deserunt est animi unde dolores enim. Deserunt repellendus fuga
                ipsam! Cum, esse?
              </p>

              <h4>#4: Lowest number</h4>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione molestias, rerum quo, odio ea iste ut illo velit
                deserunt est animi unde dolores enim. Deserunt repellendus fuga
                ipsam! Cum, esse?
              </p>

              <h3>End of game</h3>
              <hr />

              <p>The game ends when one of the players lost all his points.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rules {
  opacity: 0;
  visibility: hidden;

  &--active {
    opacity: 1;
    visibility: visible;
  }

  &__bg {
    background-color: var(--bs-light);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s linear;

    &--active {
      opacity: 0.6;
      visibility: visible;
    }
  }

  &__inner {
    top: 80px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s linear;

    &--active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
