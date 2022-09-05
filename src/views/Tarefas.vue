<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listEmpty"> Nenhuma tarefa iniciada </Box>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "../components/Box.vue";
import { useStore } from "@/store";
import { ADICIONA_TAREFA } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import notificador from "@/hooks/notificador";

export default defineComponent({
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {};
  },
  computed: {
    listEmpty(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) : void {
      this.store.commit(ADICIONA_TAREFA, tarefa);
      this.notificar(TipoNotificacao.SUCESSO,'Excelente!',"Sua tarefa já está registrada.")
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = notificador()
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
      notificar
    };
  },
});
</script>

