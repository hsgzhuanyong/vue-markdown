<template>
  <div class="Aside" :style="setStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    props: {
      width: {
        type: String ,
        default: '200px'
      }
    },
    computed:{
      setStyle(){
        return `width: ${this.width}`
      }
    }
  }
</script>

<style lang="scss">
  .Aside{
    overflow: auto;
  }
</style>
