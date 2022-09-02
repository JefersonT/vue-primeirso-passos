import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'
import Lista from '../views/Projetos/Lista.vue'
import FormularioTarefa from '../views/Tarefas/Formulario.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/tarefa/:id',
        name: 'Editar Tarefas',
        component: FormularioTarefa,
        props: true
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista,
            },
            {
                path: 'novo',
                name: 'Novo Projetos',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projetos',
                component: Formulario,
                props: true
            }
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;