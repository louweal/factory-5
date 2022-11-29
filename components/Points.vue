<template>
  <div
    :class="$store.state.showPoints ? 'points--active' : false"
    class="position-absolute points"
  >
    <div class="row">
      <div class="col-12">
        <ul class="list-group">
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
            "
          >
            You
            <span class="heading-c-2">{{ $store.state.myPoints }}</span>
          </li>
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
            "
          >
            Computer
            <span class="heading-c-2">{{ $store.state.computerPoints }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.points {
  transition: opacity 0.5s ease-in;
  z-index: 4;
  opacity: 0;
  visibility: hidden;
  min-width: 300px;
  top: 100px;
  right: 2%;

  &--active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
