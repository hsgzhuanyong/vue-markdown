<template>
  <div>
    <template v-if="getPath(data.path)">
      <router-link v-if="data.type == 1" :to="getPath(data.path)" class="menu__group--link">{{data.name}}</router-link>
      <router-link v-else-if="data.type == 2" :to="getPath(data.path)" class="menu__title">{{data.name}}</router-link>
      <div v-else-if="data.type == 3" class="menu__item">
        <router-link :to="getPath(data.path)" class="menu__item--link">{{data.name}}</router-link>
      </div>
    </template>
    <template v-else>
      <div v-if="data.type == 1" class="menu__group--link">{{data.name}}</div>
      <div v-else-if="data.type == 2" class="menu__title">{{data.name}}</div>
      <div v-else-if="data.type == 3" class="menu__item">
        <div class="menu__item--link">{{data.name}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    data: {

    }
  },
  methods: {
    getPath(val) {
      return val ? val : false;
    }
  },
  mounted() {
    console.log(this.data);
  }
}
</script>

<style lang="scss">

</style>
