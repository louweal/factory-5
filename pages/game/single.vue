<template>
  <main>
    <span
      v-if="updatedPoints !== false && activePlayer === 0"
      class="position-absolute top-0 end-0 heading-c-4 fs-1 animation-c"
      >-{{ updatedPoints }}</span
    >

    <section class="min-vh-100">
      <div class="container">
        <div class="row min-vh-100 pt-5 pt-lg-0">
          <div class="col-12 col-lg-2 align-self-center">
            <!-- hand desktop -->
            <card
              class="d-none d-lg-flex"
              :num="c"
              v-for="(c, index) in hand"
              :key="index"
              :style="index > 0 ? 'margin-top: -82%' : false"
              style="cursor: pointer"
              @click.native="playCard(c, index)"
            />

            <!-- hand mobile -->
            <div class="hstack flex-wrap gap-1 d-lg-none">
              <card
                :num="c"
                v-for="(c, index) in hand"
                :key="index"
                style="max-width: calc(20% - 0.2rem)"
                @click.native="playCard(c, index)"
              />
            </div>

            <span class="heading-c-4 fs-4">
              {{ points }} / {{ computerPoints }}
            </span>

            {{ computerHand }}

            <hr class="d-lg-none" />
          </div>

          <div class="col-12 col-lg-9 offset-lg-1 align-self-center">
            <div class="hstack gap-1" v-for="(r, index) in rows" :key="index">
              <span
                xxxclick="selectRow"
                class="fs-2 heading-c-4 me-2"
                style="cursor: pointer"
              >
                {{ index + 1 }}
              </span>
              <card
                :num="i"
                v-for="i in rows[index]"
                :key="i"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { category } from "../../utils/game.js";

export default {
  name: "Main",

  transition: "page",
  deck: Array(104)
    .fill(1)
    .map((x, y) => x + y), // is sorted

  data() {
    return {
      shuffledDeck: this.shuffle(this.$options.deck),
      rows: [],
      hand: [],
      computerHand: [],
      selectedRow: -1,
      updatedPoints: false,
      points: 66,
      computerPoints: 66,
      activePlayer: 0,
    };
  },

  mounted() {
    let row1 = this.shuffledDeck.slice(0, 1);
    let row2 = this.shuffledDeck.slice(1, 2);
    let row3 = this.shuffledDeck.slice(2, 3);
    let row4 = this.shuffledDeck.slice(3, 4);
    this.rows = [row1, row2, row3, row4];

    this.hand = this.shuffledDeck.slice(4, 14).sort((a, b) => a - b);
    this.computerHand = this.shuffledDeck.slice(14, 24);
  },

  methods: {
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

    lastCardInRow(row) {
      return row[row.length - 1];
    },

    updatePoints(points) {
      this.updatedPoints = points;
      this.points -= points;
    },

    getRow(c) {
      let lasts = [
        this.lastCardInRow(this.rows[0]),
        this.lastCardInRow(this.rows[1]),
        this.lastCardInRow(this.rows[2]),
        this.lastCardInRow(this.rows[3]),
      ];

      let diffs = lasts.map((i) => (i < c ? c - i : null));

      let filteredDiffs = diffs.filter((i) => i !== null);

      if (filteredDiffs.length === 0) {
        return -1;
      } else {
        const min = Math.min(...filteredDiffs);
        return diffs.indexOf(min);
      }
    },

    playCard(c, index) {
      // console.log(c);
      // console.log("index" + index);

      let row = this.getRow(c);

      if (row === -1) {
        // console.log("remove a row!");
      } else {
        if (this.rows[row].length < 5) {
          this.rows[row].push(c);

          this.hand.splice(index, 1); //remove card from hand
        } else {
          let cats = this.rows[row].map((c) => category(c));
          let points = cats.reduce((partialSum, a) => partialSum + a, 0);
          this.updatePoints(points);
        }
      }

      this.computerPlayCard();
    },

    computerPlayCard() {
      this.activePlayer = (this.activePlayer + 1) % 2;

      // do shit
      let randomCard = -1;
      let row = -1;
      let i = 0;

      while (i <= 9) {
        randomCard = this.computerHand[i];
        row = this.getRow(randomCard);

        if (row !== -1) {
          // found card
          console.log("found!");
          break;
        } else {
          console.log("not found!");
        }
        i += 1;
      }
      if (row === -1) {
        console.log("other strategy");
      } else {
        console.log(randomCard);

        if (this.rows[row].length < 5) {
          this.rows[row].push(randomCard);
          this.computerHand.splice(i, 1); //remove card from hand
        }
      }

      this.activePlayer = (this.activePlayer + 1) % 2;
    },
  },
};
</script>

<style lang="scss" scoped></style>
