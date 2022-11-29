<template>
  <div
    class="
      card
      xxxbg-dark
      ratio ratio-1x1
      text-white
      position-relative
      border
      rounded
    "
  >
    <!-- <img
      :src="require(`~/images/bg${cat}.png`)"
      class="card-img"
      alt="factories"
    /> -->

    <div class="ratio ratio-1x1 rounded" :class="`card__bg${cat}`"></div>

    <particle v-for="k in 3 * cat" :ymin="33" :key="'k' + k" />

    <div class="corners fs-4 d-none d-lg-block">
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
          <br
            class="d-none d-lg-block"
            v-if="cat > 3 && parseInt(cat / 2) === i"
          />
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
import { category } from "../utils/game.js";

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
      return category(this.num);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-img {
  opacity: 0;
  background-color: pink;
}

.card {
  font-family: "Chewy", sans-serif;
  animation: fadeIn 0.5s 0.2s ease-in forwards;
  opacity: 0;
  background-color: pink;
  border: 1px solid #000;
  position: relative;

  text-shadow: -2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000;

  &__bg {
    &1 {
      background-color: #80c6e6;
    }
    &2 {
      background-color: #aad9e6;
    }
    &3 {
      background-color: #c9e3e7;
    }
    &5 {
      background-color: #c89866;
    }
    &7 {
      background-color: #994c01;
    }
  }

  .card-center {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1.2rem;
    // border: 1px solid rgba(orange, 0.5);
    // border-radius: 1rem;
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

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
