<script setup lang="ts">
import { ref } from "vue";
import { UseTask } from "../../../composables/UseTask";
import { TaskPostRequest } from "services/task/types";
import { useRouter } from "vue-router";

const router = useRouter();
const useTaskStore = UseTask();

const props = defineProps<{
  userId: number;
}>();

async function createTaskAsync() {
  try {
    const body = {
      userTaskId: props.userId,
      description: description.value,
      title: title.value,
      estimatedDate: estimatedDate.value,
      priority: Number(priority.value),
      status: Number(status.value),
    } as TaskPostRequest;
    await useTaskStore.createTask(body);
  } catch (e) {
    console.log(e);
  } finally {
    router.push(`/task/${props.userId}`);
  }
}

const title = ref("");
const description = ref("");
const estimatedDate = ref(new Date());
const priority = ref("");
const status = ref("");
const id = ref("");
</script>

<template>
  <div class="center-div form">
    <h2>Criar Registro</h2>
    <form @submit.prevent="createTaskAsync">
      <div class="title">
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="title" required />
      </div>
      <div>
        <label for="description">Descrição:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div class="estimatedDate_date">
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
  background-color: #121212;
  color: aliceblue;
  min-width: 700px;
}

.center-div {
  position: absolute;
  top: 50%; /* Move a div para o meio verticalmente */
  left: 50%; /* Move a div para o meio horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza a div */
}

.estimatedDate_date {
  max-width: 100px;
}

.title {
  max-width: 250px;
}

.button {
  margin-top: 30px;
  background-color: dimgrey;
}

.button:hover {
  background-color: black;
}
</style>
