<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <cronometro :tempoEmSegundos="tempoEmSegundos" />
        <Botao :disabled-button="cronometroRodando" nome-button="play" @click-butao="iniciar" icone="fas fa-play"/>
        <Botao :disabled-button="!cronometroRodando" nome-button="stop" @click-butao="finalizar" icone="fas fa-stop"/>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
    name: "TemporizadorVue",
    emits: ['aoTemporizadorFinalizado'],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    components: {
    Cronometro,
    Botao
},
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    }
})
</script>