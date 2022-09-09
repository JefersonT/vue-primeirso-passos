<template>
  <div class="box formulario">
    <div class="colunms is-flex">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          v-model="descricao"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <temporizador @ao-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import notificador from "@/hooks/notificador";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { key } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "FormularioVue",
  emits: ["aoSalvarTarefa"],
  components: {
    Temporizador,
  },
  methods: {
    
  },
  setup(props, {emit}) {
    const store = useStore(key);
    const {notificar} = notificador()
    const descricao = ref("")
    const idProjeto = ref("")
    const projetos = computed(() => store.state.projeto.projetos)

    const finalizarTarefa = (tempoDecorrido: number): void => {
      const projeto = projetos.value.find((p) => p.id == idProjeto.value);
      if (!projeto) {
        notificar(TipoNotificacao.FALHA,'Ops!',"Selecione um projeto antes de finalizar a tarefa!")
        return;
      }
      emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: descricao.value,
        projeto: projetos.value.find(proj => proj.id == idProjeto.value),
      });
      descricao.value = '';
    }

    return {
      descricao,
      idProjeto,
      projetos,
      finalizarTarefa
    }
  },
});
</script>

<style scoped>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>