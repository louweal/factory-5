<template>
  <main>
    <section class="min-vh-100">
      <div class="container">
        <div class="row min-vh-100">
          <!-- <div class="col-12 align-self-center">
            <div class="row"> -->
          <div class="col-12 col-lg-2 align-self-center">
            <!-- hand desktop -->
            <card
              class="d-none d-lg-flex"
              :num="i"
              v-for="(i, index) in hand"
              :key="index"
              :style="index > 0 ? 'margin-top: -82%' : false"
              style="cursor: pointer"
            />

            <!-- hand mobile -->
            <div class="hstack flex-wrap gap-1 d-lg-none">
              <card
                :num="i"
                v-for="i in hand"
                :key="i"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>

            <hr class="d-lg-none" />
          </div>

          <div class="col-12 col-lg-9 offset-lg-1 align-self-center">
            <div class="hstack gap-1">
              <card
                :num="i"
                v-for="i in shuffledDeck.slice(0, 1).sort((a, b) => a - b)"
                :key="i"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>
            <div class="hstack gap-1">
              <card
                :num="i"
                v-for="i in shuffledDeck.slice(1, 2).sort((a, b) => a - b)"
                :key="i"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>
            <div class="hstack gap-1">
              <card
                :num="i"
                v-for="i in shuffledDeck.slice(2, 3).sort((a, b) => a - b)"
                :key="i"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>
            <div class="hstack gap-1">
              <card
                :num="i"
                v-for="i in shuffledDeck.slice(3, 8).sort((a, b) => a - b)"
                :key="i"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>
            <!-- </div>
            </div> -->
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
  deck: Array(104)
    .fill(1)
    .map((x, y) => x + y),

  data() {
    return {
      activeRow: 1,
      activeColor: -1,
    };
  },

  computed: {
    shuffledDeck() {
      return this.shuffle(this.$options.deck);
    },

    hand() {
      return this.shuffle(this.$options.deck.slice(4, 104))
        .slice(0, 10)
        .sort((a, b) => a - b);
    },
  },

  methods: {
    getSelected(id) {
      console.log(id);
      this.activeColor = id;
    },

    shuffle(array) {
      // fisher yates
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
  },
};
</script>

<style lang="scss" scoped></style>
