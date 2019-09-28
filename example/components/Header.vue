<template>
  <div class="Header">
    <router-link to="/">
      <h1 class="Header__logo">
        <img class="Header__logo--img" src="@@/assets/images/logo.jpg" alt="style-ui logo"/>
        <span class="Header__logo--title">
          style-ui
        </span>
      </h1>
    </router-link>
    <div class="Header__nav">
      <router-link class="Header__nav--item" to="/docs">首页</router-link>
      <!--<router-link class="Header__nav&#45;&#45;item" to="/docs">文档</router-link>-->
    </div>
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
      flex: 1;
      text-align: right;
      padding: 0 50px;
      &--item{
        height: 70px;
        line-height: 70px;
        font-size: 16px;
        display: inline-block;
        padding:0 20px;
        color: #333333;
      }
    }
    &__user{

    }
  }
</style>
