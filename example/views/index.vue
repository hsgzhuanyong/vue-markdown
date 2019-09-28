<template>
  <div class="index">
    <router-link to="/docs" class="index__item">
      <img src="@@/assets/images/icon-doc.png" alt="styleui-css库" class="index__item--img">
      <p class="index__item--title">css库</p>
    </router-link>
    <router-link to="/" class="index__item">
      <img src="@@/assets/images/icon-mobile.png" alt="styleui-mobile库" class="index__item--img">
      <p class="index__item--title">移动端ui</p>
    </router-link>
    <router-link to="/" class="index__item">
      <img src="@@/assets/images/icon-pc.png" alt="styleui-pc库" class="index__item--img">
      <p class="index__item--title">pc-ui</p>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .index{
    height: 100%;
    background-color: $primary;
    display: flex;
    align-items: center;
    justify-content: center;

    &__item{
      height: 430px;
      /*width: 100%;*/
      /*box-shadow: 3px 3px 6px rgba(255, 255, 255, .3);*/
      background-color: #ffffff;
      border:1px solid #ffffff;
      margin: 0 10px;
      padding: 0 40px;
      border-radius: 4px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--img{
        width: 160px;
        margin: 66px auto 60px;
      }
      &--title{
        margin: 0;
        font-size: 18px;
        color: #1f2f3d;
        font-weight: 400;
      }
    }
  }
</style>
