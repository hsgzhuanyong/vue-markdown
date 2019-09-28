<template>
  <div class="Layout" :class="setClass" :ref="ref">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    direction: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      ref: '',
      isChildren: false
    }
  },
  created() {
    this.ref = `ref${1}`;
  },
  methods: {
    isSub() {
      let results = false;
      let chilren = this.$slots.default;
      for(let i=0,len=chilren.length; i<len; i++) {
        if(chilren[i].componentOptions && chilren[i].componentOptions.tag === 'Layout') {
          results = true;
          break;
        }
      }
      return results;
    }
  },
  computed: {
    setClass(){
      let value = '';
      switch (this.direction) {
        case 'column':
          value = "is-vertical";
          break;
        case 'row':
          value = "";
          break;
        default:
          value = this.isSub() === true ? 'is-vertical' : ''
      }

      return value;
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
  .Layout{
    min-width: 0;
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    flex: 1;
  }
  .is-vertical{
    flex-direction: column;
  }
</style>
