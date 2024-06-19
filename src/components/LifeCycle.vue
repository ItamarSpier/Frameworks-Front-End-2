<template>
    <div>
        <h1>Bem vindo a loja {{ nome }} {{ nome2 }}.</h1>
        <h2>Escolha os seus produtos!</h2>
        <h3>Teremos enorme prazer em lhe atender.</h3>
    </div>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                nome: 'Spier',
                nome2: 'Informática'
            }
    }
}
</script>