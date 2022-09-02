<template>
  <div class="box formulario">
    <form @submit.prevent="salvar">
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
        <div class="column is-2">
          <div class="select">
            <select v-model="idProjeto">
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
        <div class="column is-2">
          <button class="button" type="submit">Salvar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { EDITA_TAREFA } from "@/store/tipo-mutacoes";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "FormularioTarefa",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    const tarefa = this.store.state.tarefas.find((tar) => tar.id == this.id);
    this.descricao = tarefa?.descricao || "";
    if (tarefa?.projeto.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == tarefa?.projeto.id
      );
      this.idProjeto = projeto?.id || "";
    }
  },
  emits: ["aoSalvarTarefa"],
  data() {
    return {
      descricao: "",
      idProjeto: "",
    };
  },
  methods: {
    salvar() {
      const tarefa = this.store.state.tarefas.find((tar) => tar.id == this.id);
      this.store.commit(EDITA_TAREFA, {
        id: this.id,
        descricao: this.descricao,
        duracaoEmSegundos: tarefa?.duracaoEmSegundos,
        projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
      });

      this.$router.push("/");
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
      store,
    };
  },
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>