<template>
  <div>
    <label>Lista de Produtos</label>
    <select name="ListadeProdutos" id="ListadeProdutos">
      <option value="Produto1">Placa Mãe</option>
      <option value="Produto2">Processador</option>
      <option value="Produto3">Memória</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ListadeProdutos',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

select {
  color: #42b983;
  font-size: 14px;
}
select{
  color: #000000;
}
</style>
