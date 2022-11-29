<template>
  <div
    class="w-100 min-vh-100 position-absolute start-0 top-0 rules"
    :class="$store.state.showRules ? 'rules--active' : false"
  >
    <div
      class="rules__bg h-100 min-vw-100 position-absolute top-0 cursor-pointer"
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
                Try to receive as few as possible cards. Every card you receive,
                yields a minus point for each pollution symbol (<span
                  class="heading-c-2"
                  >o</span
                >) shown on that card. Each player starts with 50 points.
              </p>

              <h3>Introduction</h3>
              <hr />

              <p>
                All players select one card from their hand. Your hand is shown
                on the left side of the board on computers and above the board
                on mobile devices.
              </p>

              <p>
                When every player has selected a card, the cards are added to
                the board according to the rules explained below. The numbers on
                the card determine the order in which they are added to the
                board: they will be added in ascending order.
              </p>

              <p>A row can't contain more than 5 cards.</p>

              <p>
                When everyone has played all 10 cards from their hands, everyone
                gets 10 new cards from the deck. This continues until someone
                has lost all their points. The person who has the most remaining
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
                A row is full when it contains 5 cards. If someone needs to add
                a new card to this row, according to Rule #2, he has to take the
                5 cards away from the board and the new card forms a new row. He
                loses a number of points equal to the number of pollution
                symbols on the cards he takes.
              </p>

              <h4>#4: Lowest number</h4>

              <p>
                If a card is too low to fit in any of the rows, the player
                chooses a random row to take away from the board. The new card
                will be the first card in a new row.
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
    background-color: #fff; // var(--bs-light);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s cubic-bezier(0.2, 0, 0.1, 1);

    &--active {
      opacity: 1;
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
