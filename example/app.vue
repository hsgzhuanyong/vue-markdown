<template>
  <div id="app" class="app">
    <Layout>
      <Header></Header>
      <Layout class="container">
        <Aside width="200px" class="layout__left">
          <div class="menu">
            <template v-for="(menu, index) in menuData">
              <div class="menu__group" :key="index" v-if="isChildren(menu.children)">
                <MenuItem :data="menu"></MenuItem>

                <template v-for="(menuItem, menuItemIndex) in menu.children">
                  <template v-if="isChildren(menuItem.children)">

                    <MenuItem :data="menuItem"></MenuItem>
                    <template v-for="(item, itemIndex) in menuItem.children">
                      <MenuItem :data="item"></MenuItem>
                    </template>
                  </template>
                  <MenuItem :data="menuItem" v-else></MenuItem>
                </template>
              </div>
              <MenuItem :data="menu" v-else></MenuItem>
            </template>
          </div>
        </Aside>
        <Main class="layout__right">
          <router-view></router-view>
        </Main>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import menuData from "@@/config/menuData.js";
  import { isEmpty } from "@@/utils/isEmpty.js";
  import MenuItem from "@@/components/MenuItem.vue";
  export default {
    data() {
      return {
        menuData: menuData
      }
    },
    methods: {
      isChildren(val) {
        return !isEmpty(val);
      },
      getPath(val) {
        return val ? val : 'javascript:;';
      }
    },
    components:{
      MenuItem
    }
  }
</script>

<style lang="scss">
  .app{
    height: 100%;
  }
  .container{
    /*max-width: 1200px;*/
    /*margin: 0 20px;*/
    margin-top: 30px;
  }
  .layout__left{
    margin-left: 40px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .layout__right{}
  .menu{
    &__group--link,
    &__item--link{
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      position: relative;
      transition: .15s ease-out;
      display: block;
      position: relative;
    }
    &__group{
      &--link{
        font-size: 16px;
        color: #333;
        font-weight: 700;
      }
      & > .menu__group--link{
        margin-top: 15px;
      }
    }
    &__title{
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
      display: block;
    }
    &__item{
      &--link{
        color: #444;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        &:hover{
          font-weight: bold;
        }
      }
    }
  }
</style>
