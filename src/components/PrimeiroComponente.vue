<template>
    <div>
        <h1>SPIER INFORMATICA</h1>
    <p>Meu nome é {{ nome }} e sou {{  profissao }} e {{ profissao2 }}</p>
    </div>

    <ObjetoLifeCycle />

</template>

<script>
import ObjetoLifeCycle from './LifeCycle.vue'

    export default {
      name: 'PrimeiroComponente',
      components: {
        ObjetoLifeCycle
      },
      data() {
        return {
            nome: "Itamar",
            profissao: "TI",
            profissao2: "programador"
        }
      }
    }
</script>