<template>
    <button class="button" :disabled="disabledButton" @click="acaoButao">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{nomeButton}}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'ButaoVue',
    emits: ['clickButao'],
    props: {
        disabledButton: {
            type: Boolean
        },
        nomeButton: {
            type: String,
            required: true
        },
        icone: {
            type: String,
            required: true
        }
    },
    methods: {
        acaoButao() : void {
            this.$emit('clickButao')
        }
    }
})
</script>