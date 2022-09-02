<template>
  <BoxVue>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || "Tarefa sem descricão" }}
      </div>
      <div class="column is-4">
        {{ tarefa.projeto.nome || "Sem Projeto" }}
      </div>
      <div class="column">
        <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column">
        <router-link :to="`/tarefa/${tarefa.id}`" class="button">
          <span class="icon is-small">
            <i class="fas fa-pencil-alt"></i>
          </span>
        </router-link>
        <button class="button ml-2 is-danger" @click="excluir(tarefa.id)">
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </div>
  </BoxVue>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { useStore } from "@/store";
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import BoxVue from "./Box.vue";
import { EXCLUIR_TAREFA } from "@/store/tipo-mutacoes";

export default defineComponent({
  name: "TarefaVue",
  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUIR_TAREFA, id);
    },
  },
  components: {
    Cronometro,
    BoxVue,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>