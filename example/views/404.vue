<template>
  <div class="page-404">
    <div class="wrap">
      <div class="content">
        <div class="inner">
          <h1>404</h1>
          <p><!--[-->对不起，你要找的这个页面突然不见了。不过，放心，一切都在我的掌控之中，不会跑多远！<!--]--></p>
        </div>
      </div>
      <ul>
        <li><router-link to="/docs">首页</router-link></li>
        <li><router-link to="/docs/cssnorm">css命名规范</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .page-404{
    height: 100%;
    background: url("~@@/assets/images/bg.jpg") no-repeat center center / cover;
    & .wrap{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      & .inner{
        & h1{
          font-size: 60px;
          color: #ffffff;
        }
        & p{
          font-size: 14px;
          color: #ffffff;
          margin-top: 20px;
        }
      }
      & ul{
        margin-top: 40px;
        & li{
          display: inline-block;
          & a{
            width: 100px;
            height: 40px;
            line-height: 40px;
            color: #ffffff;
            border: 1px solid #ffffff;
            display: inline-block;
            transition: all .2s ease-in-out;
            &:hover{
              background-color: #ffffff;
              color: #333333;
            }
          }
        }
      }
    }
  }
</style>
