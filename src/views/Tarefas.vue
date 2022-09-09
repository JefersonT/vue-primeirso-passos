<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          placeholder="Filtrar"
          v-model="filter"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Tarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
      @aoTarefaClicada="selecionarTarefa"
    />
    <Box v-if="listEmpty"> Nenhuma tarefa iniciada </Box>
    <div
      class="modal"
      :class="{ 'is-active': tarefaSelecionada }"
      v-if="tarefaSelecionada"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editar Tarefa</p>
          <button
            @click="fecharModal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div
            class="column"
            role="form"
            aria-label="Formulário para criação de uma nova tarefa"
          >
            <input
              v-model="tarefaSelecionada.descricao"
              type="text"
              class="input"
              placeholder="Qual tarefa você deseja iniciar?"
            />
          </div>
          <div class="column">
            <div class="select">
              <select v-model="tarefaSelecionada.projeto.id">
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
        </section>
        <footer class="modal-card-foot">
          <button @click="alterarTarefa" class="button is-success">
            Salvar
          </button>
          <button @click="fecharModal" class="button">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "../components/Box.vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import notificador from "@/hooks/notificador";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null,
    };
  },
  computed: {
    listEmpty(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa).then(() => {
        this.notificar(
          TipoNotificacao.SUCESSO,
          "Excelente!",
          "Sua tarefa já está registrada."
        );
      });
    },
    alterarTarefa() {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada).then(() => {
        this.notificar(
          TipoNotificacao.SUCESSO,
          "Excelente!",
          "Tarefa salva com sucesso."
        );
        this.fecharModal();
      });
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa;
    },
    fecharModal() {
      document.location.reload();
      this.tarefaSelecionada = null;
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = notificador();
    store.dispatch(OBTER_PROJETOS);
    store.dispatch(OBTER_TAREFAS);
    const filter = ref("");
    const projetos = computed(() => store.state.projeto.projetos);
    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filter.value)
    });

    return {
      projetos,
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      notificar,
      filter,
    };
  },
});
</script>

