''
<template>
  <div class="hstack">
    <div
      class="color"
      :class="index === activeColor ? 'color--active' : false"
      v-for="(color, index) in $options.colors"
      :key="index"
      :style="{
        backgroundColor: backgroundColor(index),
      }"
      :id="index"
      @click="handleClick"
    ></div>
  </div>
</template>

<script>
import colors from "@/data/colors";

export default {
  colors,

  // props: {
  //   active: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  data() {
    return {
      activeColor: -1,
    };
  },

  methods: {
    backgroundColor(i) {
      let color = this.$options.colors[i];
      return `rgba(
        ${color.R}, 
      ${color.G}, 
      ${color.B}, 1
      )`;
    },

    handleClick(e) {
      this.activeColor = +e.target.id;
      this.$emit("selected", e.target.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  background: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  border: 1px solid #ccc;

  &--active {
    border-color: #000;

    &:after {
      border-color: #000;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    left: 0;
    top: 0;
  }

  &:before {
    border: 7px solid white;
  }

  &:after {
    // border: 1px solid #ccc;
  }
}
</style>
