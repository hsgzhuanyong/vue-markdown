<template>
  <div class="Header">
    <h1 class="Header__logo">
      <img class="Header__logo--img" src="@@/assets/images/logo.jpg" alt="style-ui logo"/>
      <span class="Header__logo--title">
        style-ui
      </span>
    </h1>
    <div class="Header__nav"></div>
    <div class="Header__user"></div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  .Header{
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 107, 100, 0.14);
    padding: 0 40px;
    &__logo{
      display: flex;
      align-items: center;
      &--title{
        font-size: 24px;
        font-weight: 500;
        margin-left: 10px;
      }
      &--img{
        height: 50px;
        display: block;
      }
    }
    &__nav{

    }
    &__user{

    }
  }
</style>
