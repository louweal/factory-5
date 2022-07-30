<template>
  <main>
    <section class="py-5">
      <div class="row">
        <div class="col-12 col-md-2">
          <card
            :num="i"
            v-for="(i, index) in hand"
            :key="index"
            :style="index > 0 ? 'margin-top: -82%' : false"
            style="cursor: pointer"
          />
        </div>

        <div class="col-12 col-md-9 offset-md-1">
          <div class="hstack flex-wrap gap-1">
            <card
              :num="i"
              v-for="i in shuffledDeck.slice(0, 5).sort((a, b) => a - b)"
              :key="i"
              style="max-width: calc(20% - 4 * 0.25rem)"
            />
            <card
              :num="i"
              v-for="i in shuffledDeck.slice(5, 10).sort((a, b) => a - b)"
              :key="i"
              style="max-width: calc(20% - 4 * 0.25rem)"
            />
            <card
              :num="i"
              v-for="i in shuffledDeck.slice(10, 15).sort((a, b) => a - b)"
              :key="i"
              style="max-width: calc(20% - 4 * 0.25rem)"
            />
            <card
              :num="i"
              v-for="i in shuffledDeck.slice(15, 20).sort((a, b) => a - b)"
              :key="i"
              style="max-width: calc(20% - 4 * 0.25rem)"
            />
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
      return this.shuffle(this.$options.deck.slice(20, 104))
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
