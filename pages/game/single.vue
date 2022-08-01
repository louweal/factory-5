<template>
  <main class="mh-100">
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
              :style="index > 0 ? 'margin-top: -75%' : false"
              style="cursor: pointer"
              @click.native="playCard(c, index)"
            />

            <!-- hand mobile -->
            <div class="hstack flex-wrap gap-1 d-lg-none">
              <card
                :num="c"
                v-for="(c, index) in hand"
                :key="index"
                style="max-width: calc(20% - 0.2rem); cursor: pointer"
                @click.native="playCard(c, index)"
              />
            </div>

            <!-- {{ computerPoints }} -->

            <hr class="d-lg-none" />
          </div>

          <div
            class="
              col-12 col-lg-9
              offset-lg-1
              align-self-center
              xxxmb-5 xxxmb-lg-0
            "
          >
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
          </div>
        </div>
      </div>
    </section>

    <span
      v-if="updatedPoints !== false && activePlayer === 0"
      class="position-absolute top-0 end-0 heading-c-4 fs-1 animation-c"
    >
      -{{ updatedPoints }}
    </span>

    <points :points="points" :leaderboard="leaderboard" />
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
      card: -1,
      cardIndex: -1,
      computerHand: [],
      rowsSelectable: false,
      selectedRow: -1,
      updatedPoints: false,
      points: 50,
      computerPoints: 50,
      activePlayer: 0,
    };
  },

  watch: {
    hand(newHand, oldHand) {
      if (newHand.length === 0) {
        console.log("hand is empty!");

        this.shuffledDeck = this.shuffle(this.shuffledDeck); // re-shuffle the deck

        this.hand = this.dealHand().sort((a, b) => a - b);
        this.computerHand = this.dealHand();

        console.log(this.shuffledDeck.length);
      }
    },
    points(newPoints, oldPoints) {
      if (newPoints <= 0) {
        console.log("you lost!");
        this.$router.push("/lost");
      }
    },
    computerPoints(newPoints, oldPoints) {
      if (newPoints <= 0) {
        console.log("computer lost!");
        this.$router.push("/won");
      }
    },
  },

  computed: {
    leaderboard() {
      return [
        {
          name: "You",
          points: this.points,
        },
        {
          name: "Computer",
          points: this.computerPoints,
        },
      ];
    },
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

    console.log(this.shuffledDeck.length);
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
        this.selectedRow = row;

        // update points
        let cats = this.rows[row].map((c) => category(c));
        let points = cats.reduce((partialSum, a) => partialSum + a, 0);
        this.updatePoints(points);

        // update hand
        this.hand.splice(this.cardIndex, 1); //remove card from hand

        // place all cards in row back in deck
        this.rows[row].map((c) => this.shuffledDeck.push(c));

        // update row
        this.rows[row] = [this.card];
        this.rowsSelectable = false;
        this.selectedRow = -1;
        this.computerPlayCard();
      }
    },

    lastCardInRow(row) {
      return row[row.length - 1];
    },

    updatePoints(points) {
      if (this.activePlayer === 0) {
        this.updatedPoints = points;
        this.points -= points;
      } else {
        this.computerPoints -= points;
      }
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
      this.rowsSelectable = false;
      this.selectedRow = -1;
      this.card = c;
      this.cardIndex = index;
      let row = this.getRow(c);

      // reset state for points update animation
      this.updatedPoints = false;

      if (row === -1) {
        this.rowsSelectable = true;
        return;
      } else {
        if (this.rows[row].length < 5) {
          this.rows[row].push(c);
          this.hand.splice(index, 1); //remove card from hand
        } else {
          let cats = this.rows[row].map((c) => category(c));
          let points = cats.reduce((partialSum, a) => partialSum + a, 0);
          this.updatePoints(points);
          this.rows[row].map((c) => this.shuffledDeck.push(c)); // place all cards in row back to deck
          this.rows[row] = [c]; // replace row
          this.hand.splice(index, 1); // remove card from hand
        }
      }

      this.computerPlayCard();
    },

    computerPlayCard() {
      this.activePlayer = (this.activePlayer + 1) % 2;
      let randomCard = -1;
      let row = -1;
      let i = 0;

      while (i <= 9) {
        randomCard = this.computerHand[i];
        row = this.getRow(randomCard);
        if (row !== -1) break;
        i += 1;
      }
      if (row === -1) {
        let sortedHand = [...this.computerHand].sort((a, b) => a - b);
        // chooses lowest value from hand
        let c = sortedHand[0];
        console.log("card:" + c);
        // takes row from board with least amount of ponts
        let cats = this.rows.map((r) => r.map((c) => category(c)));

        let points = cats.map((c) =>
          c.reduce((partialSum, a) => partialSum + a, 0)
        );

        const min = Math.min(...points);
        let bestRowIndex = points.indexOf(min);

        this.rows[bestRowIndex].map((c) => this.shuffledDeck.push(c)); // place all cards in row back to deck
        this.rows[bestRowIndex] = [c]; // replace row
        this.updatePoints(min); //update points
        this.computerHand.splice(0, 1); // remove card from hand
      } else {
        console.log(randomCard);
        if (this.rows[row].length < 5) {
          this.rows[row].push(randomCard);
        } else {
          let cats = this.rows[row].map((c) => category(c));
          let points = cats.reduce((partialSum, a) => partialSum + a, 0);
          this.updatePoints(points);
          this.rows[row].map((c) => this.shuffledDeck.push(c)); // place all cards in row back to deck
          this.rows[row] = [randomCard]; // replace row
        }
        this.computerHand.splice(i, 1); //remove card from hand
      }

      this.activePlayer = (this.activePlayer + 1) % 2;
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
