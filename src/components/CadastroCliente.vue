<template>
    <div class="cadastro-cliente">
        <h1>Cadastro de Cliente</h1>
        <form @submit.prevent="submitFormulario" >
            <div>
               <label for="nome">CPF:</label>
               <input type="text" placeholder="CPF do cliente" id="CPF" v-model="m_cpf" required
               @input="carregarNomeCliente(m_cpf)" >
            </div>
            <div>
               <label for="nome">Nome:</label>
               <input type="text" placeholder="Nome completo do cliente" id="nome" v-model="m_nome" required>
            </div>
            <div>
               <label for="email">E-mail:</label>
               <input type="email" placeholder="E-mail" id="email" v-model="m_email" required>
            </div>
            <div>
               <label for="cep">CEP</label>
               <input type="cep" placeholder="Código de Endereço Postal" id="cep" v-model="m_cep" required
               @input="carregarEnderecoPorCep(m_cep)" >
            </div>
            <div>
               <label for="endereco">Endereço:</label>
               <input type="endereco" 
                id="endereco" v-model="m_endereco" required>
            </div>
            
                <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
    import axiosVariavel from 'axios';

    export default {
        name: 'CadastroCliente',
        data() {
            return {
                m_cpf: '',
                m_nome: '',
                m_email: '',
                m_cep: '',
                m_endereco: ''
            }
        },
        methods: {
            async carregarEnderecoPorCep(par_cep) {
                if (par_cep.length >=8) {
                const resposta = await axiosVariavel.get(`https://viacep.com.br/ws/${par_cep}/json`);
                this.m_endereco = resposta.data.logradouro + ',' +
                                  resposta.data.bairro + ',' +
                                  resposta.data.localidade + '-' +
                                  resposta.data.uf;
                }
            },
            async carregarNomeCliente(par_cpf) {
                if (par_cpf.length >=11) {
                    try {
                        const resposta = await axiosVariavel.get(`https://receitafederal.gov.br/ws/${par_cpf}/json`);
                        this.m_nome = resposta.data.contribuinte;
                    }
                    catch (error){
                        alert("Erro na tentativa de comunicação com o serviço da Receita Federal." + "Tente mais tarde");
                        error;
                    }
                }
            },
            
            submitFormulario() {
                // arrayForm = {m_nome,m_email,m_cep,m_endereco};
                // axiosVariavel.Array = arrayForm;
                // axiosVariavel.set('https://sistemabackend.com.br/ws/set/')
                alert("Formulario submetido ao servidor");
            }
        },
    };

</script>

<style scoped>
.cadastro-cliente {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
input {
    width: 300px;
}
</style>