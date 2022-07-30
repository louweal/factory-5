<template>
  <div
    class="particle"
    :style="{
      background: randomGradient,
      left: randomXPos,
      top: randomYPos,
      width: randomSize,
      height: randomSize,
      animationDelay: randomDelay,
    }"
  />
</template>

<script>
export default {
  name: "particle",

  props: {
    ymin: {
      type: Number,
      default: 0,
    },
    ymax: {
      type: Number,
      default: 110,
    },
    xmin: {
      type: Number,
      default: 0,
    },
    xmax: {
      type: Number,
      default: 100,
    },
  },

  computed: {
    randomGradient() {
      return `radial-gradient( circle, ${this.randomRGB(
        0.8
      )} 0%, ${this.randomRGB(0.9)} 100%)`;
    },
    randomXPos() {
      // return Math.ceil(Math.random() * 50) + "%";
      return (
        this.xmin + Math.ceil(Math.random() * (this.xmax - this.xmin)) + "%"
      );
    },
    randomYPos() {
      return (
        this.ymin + Math.ceil(Math.random() * (this.ymax - this.ymin)) + "%"
      );
    },
    randomSize() {
      return 2 + Math.ceil(Math.random() * 6) + "px";
    },
    randomDelay() {
      return Math.ceil(Math.random() * 15) + "s";
    },
  },

  methods: {
    randomColor(min, max) {
      return min + Math.ceil(Math.random() * (max - min));
    },

    randomRGB(opacity) {
      return `rgba(
        ${this.randomColor(160, 200)}, 
      ${this.randomColor(150, 190)}, 
      ${this.randomColor(100, 140)}, ${opacity}
      )`;
    },
  },
};
</script>

<style lang="scss" scoped>
.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border: 1px solid (#fff, 0.2);
  border-radius: 50%;
  opacity: 0;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: scale(10%);
    opacity: 0.3;
  }
  66% {
    transform: scale(100%) translate(0px, -50px);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>
