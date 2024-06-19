import {createRouter, createWebHistory} from 'vue-router'
import CadastroCliente from './components/CadastroCliente.vue'
import App from './App.vue';
import Suporte from './components/Suporte.vue';

const routes = [
    {
        path: '/cadastro-cliente',
        component: CadastroCliente,
    },
    {
        path:'/',
        componente:App,
    },
    {
        path:'/cadastro-empresa',
        componente:Suporte,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;