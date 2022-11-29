<template>
  <main class="mh-100">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-2 align-self-center">
            <!-- hand desktop -->
            <card
              class="d-none d-lg-flex"
              :num="c"
              v-for="(c, index) in hand"
              :key="index"
              :style="index > 0 ? 'margin-top: -75%' : false"
              style="cursor: pointer"
              @click.native="selectCard(c, index)"
            />

            <!-- hand mobile -->
            <div class="hstack flex-wrap gap-1 d-lg-none">
              <card
                :num="c"
                v-for="(c, index) in hand"
                :key="index"
                style="max-width: calc(20% - 0.2rem); cursor: pointer"
                @click.native="selectCard(c, index)"
              />
            </div>

            <!-- {{ computerHand }} -->

            <hr class="d-lg-none" />

            <!-- {{ queue }} -->
          </div>

          <div class="col-12 col-lg-9 offset-lg-1 align-self-center">
            <div
              @click="rowsSelectable ? selectRow(index) : false"
              :class="rowsSelectable ? 'board-row-c cursor-pointer' : false"
              class="hstack gap-1 mb-3 rounded"
              v-for="(row, index) in rows"
              :key="index"
            >
              <card
                :num="card"
                v-for="card in row"
                :key="card"
                style="max-width: calc(20% - 0.2rem)"
              />
            </div>

            <div class="d-lg-none my-5 w-100"><!-- spacer --></div>
          </div>
        </div>
      </div>
    </section>

    <span
      v-if="updatedPoints !== false"
      class="position-absolute top-0 end-0 heading-c-4 fs-1 animation-c"
    >
      -{{ updatedPoints }}
    </span>
  </main>
</template>

<script>
import { category } from "@/utils/game.js";

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
      rowsSelectable: false,
      updatedPoints: false,
      // points: 10,
      // computerPoints: 10,
      activePlayer: 0,
      queue: [],
      handIndex: [], // indices of the queue cards in the hands
    };
  },

  watch: {
    handsEmpty(newValue) {
      if (newValue === true) {
        this.shuffledDeck = this.shuffle(this.shuffledDeck); // re-shuffle the deck
        this.hand = this.dealHand().sort((a, b) => a - b);
        this.computerHand = this.dealHand();
      }
    },
    "$store.state.myPoints": function () {
      if (this.$store.state.myPoints <= 0) {
        this.$router.push("/lost");
      }
    },
    "$store.state.computerPoints": function () {
      if (this.$store.state.computerPoints <= 0) {
        this.$router.push("/won");
      }
    },
  },

  computed: {
    handsEmpty() {
      return (
        this.hand.length === 0 &&
        this.computerHand.length === 0 &&
        this.queue.length === 0
      );
    },
  },

  created() {
    this.$store.commit("setPoints");
  },

  mounted() {
    let row1 = [this.shuffledDeck.pop()];
    let row2 = [this.shuffledDeck.pop()];
    let row3 = [this.shuffledDeck.pop()];
    let row4 = [this.shuffledDeck.pop()];
    this.rows = [row1, row2, row3, row4];

    this.computerHand = this.dealHand();
    this.hand = this.dealHand();
    this.hand.sort((a, b) => a - b); // sort hand (in place)
  },

  methods: {
    dealHand() {
      let hand = [];
      for (let i = 0; i < 10; i++) {
        hand.push(this.shuffledDeck.pop());
      }
      return hand;
    },
    togglePoints() {
      this.showPoints = !this.showPoints;
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

    selectRow(row) {
      if (this.rowsSelectable) {
        // && this.activePlayer === 0) {
        // update points
        let cats = this.rows[row].map((c) => category(c));
        let points = cats.reduce((partialSum, a) => partialSum + a, 0);
        this.updatePoints(points);

        // update hand
        this.hand.splice(this.handIndex[0], 1); //remove card from hand

        // place all cards in row back in deck
        this.rows[row].map((c) => this.shuffledDeck.push(c));

        // update row
        this.rows[row] = [this.queue[0]];
        this.rowsSelectable = false; // after toggling this, the playCards() continues
      }
    },

    async lastCardInRow(row) {
      return row[row.length - 1];
    },

    updatePoints(lost) {
      this.updatedPoints = this.activePlayer === 0 ? lost : false; // for animation

      this.$store.commit("updatePoints", {
        i: this.activePlayer,
        lost: lost,
      });
    },

    async getRow(c) {
      let lasts = [
        await this.lastCardInRow(this.rows[0]),
        await this.lastCardInRow(this.rows[1]),
        await this.lastCardInRow(this.rows[2]),
        await this.lastCardInRow(this.rows[3]),
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

    async getBestCard(cards) {
      let lasts = [
        await this.lastCardInRow(this.rows[0]),
        await this.lastCardInRow(this.rows[1]),
        await this.lastCardInRow(this.rows[2]),
        await this.lastCardInRow(this.rows[3]),
      ];

      let lowestDiff = 104;
      let card = -1;
      let row = -1;
      let index = -1;

      for (let i = 0; i < cards.length; i++) {
        let c = cards[i];

        let diffs = lasts.map((v, i) =>
          v < c && this.rows[i].length < 5 ? v - i : null
        );
        let filteredDiffs = diffs.filter((i) => i !== null);

        if (filteredDiffs.length !== 0) {
          const min = Math.min(...filteredDiffs);
          if (min < lowestDiff) {
            lowestDiff = min;
            card = c;
            row = diffs.indexOf(min);
            index = i;
          }
        }
      }
      console.log(card + "!");
      console.log("row :>> ", row);
      return [card, index, row];
    },

    async selectCard(c, index) {
      this.rowsSelectable = false;
      // reset state for points update animation
      this.updatedPoints = false;
      this.queue.push(c);

      this.handIndex.push(index);
      await this.computerSelectCard();
    },

    async computerSelectCard() {
      let c = -1;
      let row = -1;
      let i = 0;

      [c, i, row] = await this.getBestCard(this.computerHand);

      // while (i <= 9) {
      //   c = this.computerHand[i];
      //   row = await this.getRow(c);
      //   if (row !== -1) break;
      //   i += 1;
      // }
      if (row === -1) {
        // simply choose first (lowest) in sorted hand
        c = [...this.computerHand].sort((a, b) => a - b)[0];
        i = 0;
      }

      this.queue.push(c);
      this.handIndex.push(i);
      await this.playCards();
    },

    async sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    async playCard(c, i) {
      let row = await this.getRow(c);
      if (row === -1) {
        this.rowsSelectable = true;
        while (this.rowsSelectable) {
          console.log("computer is waiting..." + this.rowsSelectable);
          await this.sleep(500);
        }
      } else {
        if (this.rows[row].length < 5) {
          this.rows[row].push(c);
          this.hand.splice(i, 1); //remove card from hand
        } else {
          let cats = this.rows[row].map((c) => category(c));
          let points = cats.reduce((partialSum, a) => partialSum + a, 0);
          this.updatePoints(points);
          this.rows[row].map((c) => this.shuffledDeck.push(c)); // place all cards in row back to deck
          this.rows[row] = [c]; // replace row
          this.hand.splice(i, 1); // remove card from hand
        }
      }
    },

    async computerPlayCard(c, i) {
      let row = await this.getRow(c);
      if (row !== -1) {
        if (this.rows[row].length < 5) {
          this.rows[row].push(c);
        } else {
          let cats = this.rows[row].map((c) => category(c));
          let points = cats.reduce((partialSum, a) => partialSum + a, 0);
          this.updatePoints(points);
          this.rows[row].map((c) => this.shuffledDeck.push(c)); // place all cards in row back to deck
          this.rows[row] = [c]; // replace row
        }
        this.computerHand.splice(i, 1); //remove card from hand
      } else {
        // take the first row with the least points and place the lowest numbered card there
        let min = 99;
        [row, min] = await this.getBestRow();

        this.rows[row].map((c) => this.shuffledDeck.push(c)); // place all cards in row back to deck
        this.rows[row] = [c]; // replace row
        this.updatePoints(min); //update points
        console.log("i :>> ", i);
        console.log("before:" + this.computerHand);
        // this.computerHand = this.computerHand.slice(1); // remove first card from hand
        this.computerHand.splice(i, 1); //remove card from hand

        console.log("after:" + this.computerHand);
      }
      return;
    },

    async getBestRow() {
      // takes row from board with least amount of points
      let cats = this.rows.map((r) => r.map((c) => category(c)));

      let points = cats.map((c) =>
        c.reduce((partialSum, a) => partialSum + a, 0)
      );

      const min = Math.min(...points);
      let bestRowIndex = points.indexOf(min);

      return [bestRowIndex, min];
    },

    async playCards() {
      let sortedQueue = [...this.queue].sort((a, b) => a - b); // because the lowest card is played first

      // lowest card
      let c = sortedQueue[0];
      let player = this.queue.indexOf(c);
      this.activePlayer = player;
      let index = this.handIndex[player];
      if (player === 0) {
        await this.playCard(c, index);
      } else {
        await this.computerPlayCard(c, index);
      }
      await this.sleep(1000); // sleep for animation

      // other card
      c = sortedQueue[1];
      player = this.queue.indexOf(c);
      this.activePlayer = player;
      index = this.handIndex[player];
      if (player === 0) {
        await this.playCard(c, index);
      } else {
        await this.computerPlayCard(c, index);
      }
      await this.sleep(1000); // sleep for animation

      // reset variables
      this.activePlayer = 0;
      this.queue = [];
      this.handIndex = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.board-row-c {
  background-color: rgba(0, 0, 0, 0.12);
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
