<template>
  <div class="card bg-dark text-white mb-3">
    <img
      :src="require(`~/images/bg${cat}.png`)"
      class="card-img"
      alt="factories"
    />

    <particle v-for="k in 3 * cat" :min="33" :key="'k' + k" />

    <div class="corners fs-4">
      <div class="top-left-corner">
        {{ num }}
      </div>
      <div class="top-right-corner">
        {{ num }}
      </div>
      <div class="bottom-left-corner">
        {{ num }}
      </div>

      <div class="bottom-right-corner">
        {{ num }}
      </div>
    </div>

    <div class="card-cat">
      <span class="text-center" style="letter-spacing: 1px">
        <span v-for="i in cat" :key="i">
          o
          <br v-if="cat > 3 && parseInt(cat / 2) === i" />
        </span>
      </span>
    </div>

    <div class="card-center">
      <h3 class="card-title text-center display-3">
        {{ num }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: -1,
      required: true,
    },
  },

  computed: {
    cat() {
      if (this.num === 5) {
        // 5
        return 7;
      }
      if (this.num % 10 === 0) {
        // 10, 20, 30, ...
        return 2;
      }
      if (this.num % 5 === 0) {
        // 15, 25, 35, ...
        return 3;
      }
      let s = this.num.toString();

      if (s.length > 1 && [...new Set(s.split(""))].length === 1) {
        // repdigit (11, 22, 33, ...)
        return 5;
      } else {
        return 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  font-family: "Chewy", sans-serif;

  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;

  .card-center {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgba(orange, 0.5);
  }

  .card-cat {
    position: absolute;
    width: 100%;
    // letter-spacing: 1px;
    line-height: 0.86rem !important;
    margin-top: 0.5rem;
    text-align: center;
  }

  .corners {
    width: 100%;
    height: 100%;
    position: absolute;
    // border: 2px solid blue;

    .top-left-corner,
    .top-right-corner,
    .bottom-left-corner,
    .bottom-right-corner {
      position: absolute;
    }

    .top-left-corner {
      top: 0; //0.2rem;
      left: 0.7rem;
    }

    .top-right-corner {
      top: 0; //0.2rem;
      right: 0.7rem;
    }

    .bottom-left-corner {
      bottom: 0; // 0.2rem;
      left: 0.7rem;
    }

    .bottom-right-corner {
      bottom: 0; // 0.2rem;
      right: 0.7rem;
    }
  }
}
</style>
