<template>
  <BoxVue>
    <div class="columns">
      <div class="column is-4">
        {{ tarefa.descricao || "Tarefa sem descricão" }}
      </div>
      <div class="column is-3">
        {{ nomeDoProjeto || "Sem Projeto" }}
      </div>
      <div class="column">
        <Cronometro :tempo-em-segundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column">
        <div class="button" @click="tarefaClicada">
          <span class="icon is-small">
            <i class="fas fa-pencil-alt"></i>
          </span>
        </div>
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
import { REMOVER_TAREFA } from "@/store/tipo-acoes";
import notificador from "@/hooks/notificador";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "TarefaVue",
  emits: ['aoTarefaClicada'],
  data() {
    return {
      nomeDoProjeto: "",
      projeto: this.tarefa.projeto,
    };
  },
  mounted() {
    if (this.projeto) {
      const projeto = this.store.state.projeto.projetos.find(
        (proj) => proj.id == this.projeto.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  methods: {
    excluir(id: string) {
      this.store.dispatch(REMOVER_TAREFA, id).then(() => {
        this.notificar(
          TipoNotificacao.SUCESSO,
          "Excelente!",
          "Tarefa removida com sucesso."
        );
      });
    },
    tarefaClicada (): void{
      this.$emit('aoTarefaClicada', this.tarefa)
    }
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
    const { notificar } = notificador();
    return {
      store,
      notificar,
    };
  },
});
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>