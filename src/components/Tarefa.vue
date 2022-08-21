<template>
    <BoxVue>
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descricão'}}
            </div>
            <div class="column">
                <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </BoxVue>
</template>

<script lang="ts">
import ITarefa from '@/interfaces/ITarefa';
import {defineComponent, PropType} from 'vue'
import Cronometro from './Cronometro.vue'
import BoxVue from './Box.vue';

export default defineComponent({
    name: 'TarefaVue',
    components: {
        Cronometro,
        BoxVue
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
});
</script>

<style scoped>
.box {
    background: #faf0ca;
}
</style>