<template>
  <section class="min-vh-100">
    <div class="container text-center">
      <div class="row min-vh-100">
        <div class="col-12 col-lg-8 offset-lg-2 text-center">
          <h1 class="h1 heading-c-4 fs-1 mt-5">Start game</h1>
        </div>
        <div class="col-12 col-lg-5">
          <h2 class="h2">Create new game</h2>

          <p>
            Factory 5 is a two-player game. Send the following code to a friend
            to invite him or her to play this game with you, then click continue
            to start playing the game!
          </p>

          <div class="fs-2 heading-c-4 mb-5">{{ newGameId }}</div>

          <nuxt-link
            :to="`/game/single?id=${newGameId}`"
            class="btn btn-primary mb-2"
            >CONTINUE</nuxt-link
          >
        </div>
        <div class="col-12 col-lg-6 offset-lg-1">
          <h2 class="h2">Join game</h2>
          <p>Invited to play?</p>

          <div class="d-flex">
            <input
              type="text"
              placeholder="000 000"
              class="form-control xxxbg-c"
            />

            <nuxt-link :to="`/game/single?id=`" class="btn btn-secondary mb-5"
              >CONTINUE</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    newGameId() {
      return Math.floor(Math.random() * 888888) + 111111;
    },
  },
};
</script>

<style></style>
