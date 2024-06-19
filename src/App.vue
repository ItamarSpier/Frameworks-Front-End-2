<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <PrimeiroComponente />
  <!-- <LifeCycle /> -->
  <Suporte />
  <ListadeProdutos />
</div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  // import LifeCycle from './components/LifeCycle.vue'
  import ListadeProdutos from './components/ListadeProdutos.vue'
  import Suporte from './components/Suporte.vue'
  
  export default {
    name: 'App',
    components: { 
      PrimeiroComponente,
      // LifeCycle,
      Suporte,
      ListadeProdutos
    }
      }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>