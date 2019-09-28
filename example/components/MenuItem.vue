<template>
  <div>
    <router-link v-if="data.group" :to="getPath(data.path)" class="menu__group--link">{{data.group}}</router-link>
    <router-link v-else-if="data.title" :to="getPath(data.path)" class="menu__title">{{data.title}}</router-link>
    <div v-else-if="data.name" class="menu__item">
      <router-link :to="getPath(data.path)" class="menu__item--link">{{data.name}}</router-link>
    </div>
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
      return val ? val : 'javascript:;';
    }
  },
  mounted() {
    console.log(this.data);
  }
}
</script>

<style lang="scss">

</style>
