<template>
  <div
    class="
      w-100
      min-vh-100
      h-100
      position-absolute
      start-0
      top-0
      rules
      bg-white
    "
    :class="$store.state.showRules ? 'rules--active' : false"
  >
    <div>
      <div class="container-xl py-1">
        <div class="row pt-4">
          <div class="col-12 col-lg-6">
            <h3>Overview</h3>
            <hr />

            <p><b>Deck:</b> 104 playing cards</p>

            <h3>Objective</h3>
            <hr />

            <p>
              Try to receive as few as possible cards. Every card you receive,
              yields a minus point for each pollution symbol (<span
                class="heading-c-2"
                >o</span
              >) shown on that card. Each player starts with 50 points.
            </p>

            <h3>Introduction</h3>
            <hr />

            <p>
              All players select one card from their hand. Your hand is shown on
              the left side of the board on computers and above the board on
              mobile devices.
            </p>

            <p>
              When every player has selected a card, the cards are added to the
              board according to the rules explained below. The numbers on the
              card determine the order in which they are added to the board:
              they will be added in ascending order.
            </p>

            <p>A row can't contain more than 5 cards.</p>

            <p>
              When everyone has played all 10 cards from their hands, everyone
              gets 10 new cards from the deck. This continues until someone has
              lost all their points. The person who has the most remaining
              points, wins the game.
            </p>
          </div>
          <div class="col-12 col-lg-6">
            <h3>Rules</h3>
            <hr />

            <p>This game has only 4 simple rules!</p>

            <h4>#1: Ascending order</h4>

            <p>The numbers in each row need to be in ascending order.</p>

            <h4>#2: Smallest difference</h4>

            <p>
              A card has to be added to the row of which the last card has the
              smallest difference with the new card.
            </p>

            <h4>#3: Full row</h4>

            <p>
              A row is full when it contains 5 cards. If someone needs to add a
              new card to this row, according to Rule #2, he has to take the 5
              cards away from the board and the new card forms a new row. He
              loses a number of points equal to the number of pollution symbols
              on the cards he takes.
            </p>

            <h4>#4: Lowest number</h4>

            <p>
              If a card is too low to fit in any of the rows, the player chooses
              a random row to take away from the board. The new card will be the
              first card in a new row.
            </p>

            <h3>End of game</h3>
            <hr />

            <p>The game ends when one of the players lost all his points.</p>
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
  overflow: scroll;
  padding-top: 80px;

  &--active {
    opacity: 1;
    visibility: visible;
    animation: fadeInUp 0.5s 0s cubic-bezier(0.2, 0, 0.1, 1) forwards;
    transform: translateY(-90%);
  }
}
</style>
