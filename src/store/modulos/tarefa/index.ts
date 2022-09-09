import http from "@/http";
import ITarefa from "@/interfaces/ITarefa";
import { Estado } from "@/store";
import { OBTER_TAREFAS, CADASTRAR_TAREFA, ALTERAR_TAREFA, REMOVER_TAREFA } from "@/store/tipo-acoes";
import { ADICIONA_TAREFA, EDITA_TAREFA, EXCLUIR_TAREFA, DEFINIR_TAREFAS } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoTarefa {
    tarefas: ITarefa[]
}

export const tarefa: Module<EstadoTarefa, Estado> = {
    state: {
        tarefas: [],
    },
    mutations: {
        [ADICIONA_TAREFA](state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },
        [EDITA_TAREFA](state, tarefa: ITarefa) {
            const indice = state.tarefas.findIndex(p => p.id == tarefa.id)
            state.tarefas[indice] = tarefa
        },
        [EXCLUIR_TAREFA](state, id: string) {
            state.tarefas = state.tarefas.filter(p => p.id != id)
        },
        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        },
    },
    actions: {
        [OBTER_TAREFAS]({ commit }, filter: string) {
            let url = 'tarefas'

            if (filter){
                url += '?descricao=' + filter
            }
            
            http.get(url)
                .then(resposta => commit(DEFINIR_TAREFAS, resposta.data))
        },
        [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
            return http.post('/tarefas', tarefa).then(resposta => commit(ADICIONA_TAREFA, resposta.data))
        },
        [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
            return http.put(`/tarefas/${tarefa.id}`, tarefa).then(resposta => commit(EDITA_TAREFA, resposta.data))
        },
        [REMOVER_TAREFA]({ commit }, id: string) {
            return http.delete(`/tarefas/${id}`).then(() => commit(EXCLUIR_TAREFA, id))
        },
    }
}