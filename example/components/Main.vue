<template>
  <div class="Main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Main",
}
</script>

<style lang="scss">
  .Main{
    display: block;
    flex: 1;
    flex-basis: auto;
  }
</style>
