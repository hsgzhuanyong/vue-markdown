<template>
  <div class="home">
    <Layout class="layout">
      <Header></Header>
      <Layout class="container">
        <Aside width="200px" class="layout__left">
          <div class="menu">
            <template v-for="(menu, index) in menuData">
              <div class="menu__group" :key="index" v-if="isChildren(menu.children)">
                <MenuItem :data="menu" :active="isMenuAcrive(menu)"></MenuItem>
                <template v-for="(menuItem, menuItemIndex) in menu.children">
                  <template v-if="isChildren(menuItem.children)">
                    <MenuItem :data="menuItem" :active="isMenuAcrive(menuItem)"></MenuItem>
                    <template v-for="(item, itemIndex) in menuItem.children">
                      <MenuItem :data="item" :active="isMenuAcrive(item)"></MenuItem>
                    </template>
                  </template>
                  <MenuItem :data="menuItem" :active="isMenuAcrive(menuItem)" v-else></MenuItem>
                </template>
              </div>
              <MenuItem :data="menu" :active="isMenuAcrive(menu)" v-else></MenuItem>
            </template>
          </div>
        </Aside>
        <Main class="layout__right content">
          <router-view v-highlight></router-view>
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
        menuData: menuData,
        menuActive: '/'
      }
    },
    watch: {
      '$route.fullPath'(val) {
        this.setMenuActive();
      }
    },
    methods: {
      setMenuActive() {
        let path = this.$route.path;
        this.menuActive = path;
      },
      isChildren(val) {
        return !isEmpty(val);
      },
      isMenuAcrive({path}) {
        return this.menuActive == path;
      },
      getPath(val) {
        return val ? val : 'javascript:;';
      }
    },
    created() {
      this.setMenuActive();
    },
    components:{
      MenuItem
    }
  }
</script>

<style lang="scss">
  .home,
  .layout,
  .container{
    height: 100%;
    overflow: hidden;
  }
  .home {
    .layout__left,
    .layout__right{
      padding-top: 30px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .layout__left{
      padding-left: 40px;

    }
    .layout__right{
      padding-right: 30px;
      padding-left: 10px;
      /*overflow-scrolling: ;*/
    }
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
            font-weight: 600;
            padding-left: 10px;
            color: $primary;
          }
        }
        &--active{
          font-weight: 600;
          padding-left: 10px;
          color: $primary;
        }
      }
    }
  }
</style>
