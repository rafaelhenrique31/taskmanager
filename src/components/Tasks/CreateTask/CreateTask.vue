<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  userId: number;
}>();

function createTaskAsync() {}

const title = ref("");
const description = ref("");
const estimatedDate = ref("");
const priority = ref("");
const status = ref("");
const id = ref("");
</script>

<template>
  <div class="form">
    <h2>Criar Registro</h2>
    <form @submit.prevent="createTaskAsync">
      <div>
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="description">Descrição:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div>
        <label for="estimatedDate">Data estimada:</label>
        <input
          type="datetime-local"
          id="estimatedDate"
          v-model="estimatedDate"
          required
        />
      </div>
      <div>
        <label for="priority">Prioridade:</label>
        <select id="priority" v-model="priority" required>
          <option value="1">Média</option>
          <option value="2">Urgente</option>
          <option value="3">Baixa</option>
        </select>
      </div>
      <div>
        <label for="status">Status:</label>
        <select id="status" v-model="status" required>
          <option value="1">Criado</option>
          <option value="2">Em Progresso</option>
          <option value="3">Finalizado</option>
        </select>
      </div>
      <button class="button" type="submit">Criar Registro</button>
    </form>
  </div>
</template>

<style>
.form {
  background-color: aliceblue;
  width: 50%;
  padding: 20px;
  margin: 10% 0 0 20%;
}

.button {
  margin-top: 30px;
}
</style>
