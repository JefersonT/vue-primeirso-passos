<template>
    <div class="box">
        <div class="colunms is-flex">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa você deseja iniciar?"/>
            </div>
            <div class="column">
                <temporizador @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
    name: "FormularioVue",
    components: {
        Temporizador
    },
    data (){
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            console.log('tempo da tarefa', tempoDecorrido)
            console.log('descrição da tarefa', this.descricao)
            this.descricao = ''
        }
    }
})
</script>