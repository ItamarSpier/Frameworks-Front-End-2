<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h3>Menu</h3>
    <ul>
      <!-- <li><a href="cadastrocliente" target="_blank" rel="noopener">Cadastro de Cliente</a></li>
      <li><a href="Link1" target="_blank" rel="noopener">Suporte</a></li>
      <li><a href="Link2" target="_blank" rel="noopener">Sistema</a></li> -->
      <li><router-link to="/">Principal</router-link></li>
      <li><router-link to="/cadastro-cliente">Cadastro de Cliente</router-link></li>
    </ul>
      <router-view/>
   <!-- <objetoCadastroCliente /> -->

  </div>
</template>

<script>
// import objetoCadastroCliente from './CadastroCliente.vue'

export default {
  name: 'HelloWorld',
  components: {
        // objetoCadastroCliente
      },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
