<template>
  <div>
    <input type="text" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: 'index.vue',
    data(){
      return{
        name:'张三'
      }
    },
  };
</script>

<style scoped>
  input{
    width: 100px;
    height: 40px;
    border: 2px solid #ededed;
  }
</style>