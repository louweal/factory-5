<template>
  <section class="min-vh-100">
    <div class="container">
      <div class="row min-vh-100 pt-5">
        <div
          class="col-12 col-lg-8 offset-lg-2 xxxalign-self-center text-center"
        >
          <h1 class="heading-c-4 pt-5">FACTORY FIVE</h1>
          <h2 class="heading-c-4 mb-5 display-6">Win or pollute?!</h2>

          <div @click="showBtns1" v-if="showNewBtn" class="btn btn-primary">
            NEW GAME
          </div>

          <div @click="showJoinForm" v-if="showJoinBtn" class="btn btn-primary">
            JOIN GAME
          </div>

          <nuxt-link
            to="/game/single"
            v-if="showSingleBtn"
            class="btn btn-primary"
          >
            SINGLE PLAYER
          </nuxt-link>
          <div @click="showNewCode" v-if="showMultiBtn" class="btn btn-primary">
            MULTI PLAYER
          </div>

          <div class="hstack gap-1" v-if="showJoinFields">
            <input type="text" placeholder="Your name" class="form-control" />
            <input
              type="text"
              placeholder="Invitation code"
              class="form-control"
            />

            <nuxt-link :to="`/game/single?id=`" class="btn btn-secondary">
              JOIN
            </nuxt-link>
          </div>

          <div xxxclass="hstack" v-if="showInviteOpt">
            <p></p>
            <div class="fs-2 heading-c-4 mb-5">{{ newGameId }}</div>

            <h3>Number of players</h3>
            <div class="hstack mb-3 gap-1">
              <button v-for="i in 9" :key="i" class="btn btn-primary">
                {{ i + 1 }}
              </button>
            </div>

            <h3>Your name</h3>

            <input type="text" placeholder="Jambo" class="form-control mb-3" />

            <nuxt-link
              :to="`/game/single?id=${newGameId}`"
              class="btn btn-primary"
            >
              PLAY!
            </nuxt-link>
          </div>

          <!-- <p v-if="showSingleBtn">*You play against the computer</p> -->

          <!-- <div @click="showBtns2" v-if="showNewBtn" class="btn btn-primary">
            NEW GAME
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showNewBtn: true,
      showJoinBtn: true,
      showSingleBtn: false,
      showMultiBtn: false,
      showJoinFields: false,
      showInviteOpt: false,
    };
  },

  computed: {
    newGameId() {
      return Math.floor(Math.random() * 888888) + 111111;
    },
  },

  methods: {
    showBtns1() {
      this.showSingleBtn = true;
      this.showMultiBtn = true;
      this.showNewBtn = false;
      this.showJoinBtn = false;
    },
    showNewCode() {
      this.showSingleBtn = false;
      this.showMultiBtn = false;
      // this.showNewBtn = false;
      // this.showJoinBtn = false;
      this.showInviteOpt = true;
    },
    // showNewOpt() {
    //   this.showNewBtn = false;
    //   this.showJoinBtn = false;
    //   // this.showNewOpt = true;
    // },

    showJoinForm() {
      this.showJoinFields = true;
      this.showNewBtn = false;
      this.showJoinBtn = false;
    },
  },
};
</script>

<style></style>
