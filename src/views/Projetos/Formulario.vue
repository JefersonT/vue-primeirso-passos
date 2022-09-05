<template>
  <section class="projetos">
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="labal"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import useNotificador from "@/hooks/notificador";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { ADICIONA_PROJETO, EDITA_PROJETO } from "@/store/tipo-mutacoes";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioVue",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(EDITA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificacao.SUCESSO,
        "Excelente!",
        "Projeto cadastrado com sucesso."
      );
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>
