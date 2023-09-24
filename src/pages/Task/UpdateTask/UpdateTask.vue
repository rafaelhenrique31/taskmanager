<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { UseTask } from "../../../composables/UseTask";
import { TaskPutRequest } from "services/task/types";

const router = useRoute();
const routerPush = useRouter();
const taskId = Number(router.params.taskId);
const userId = Number(router.params.userId);
const useTaskStore = UseTask();

const completionDate = ref(new Date());
const status = ref("");

const isFinish = computed(() => {
  return status.value == "3" ? true : false;
});

async function updateTask() {
  try {
    const body = {
      completionDate: completionDate.value,
      statusEnum: Number(status.value),
    } as TaskPutRequest;

    await useTaskStore.updateTask(taskId, body);
  } catch {
  } finally {
    routerPush.push(`/task/${userId}`);
  }
}

async function exitPage() {
  routerPush.push(`/task/${userId}`);
}
</script>

<template>
  <div class="form">
    <div class="card-title">
      <h1 class="title">Atualizar Status Task</h1>
      <button @click="exitPage()" class="button-exit">X</button>
    </div>
    <form @submit.prevent="updateTask">
      <div>
        <label class="status" for="status">Selecione o status atual:</label>
        <select id="status" v-model="status" required>
          <option value="1">Criado</option>
          <option value="2">Em Progresso</option>
          <option value="3">Finalizado</option>
        </select>
      </div>

      <div v-if="isFinish" class="conclusionDate">
        <label>Data da conclusão:</label>
        <input type="datetime-local" v-model="completionDate" />
      </div>

      <input class="button" type="submit" value="Enviar Atualização" />
    </form>
  </div>
</template>

<style>
.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-exit {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #121212;
  background-color: aliceblue;
}
.title {
  padding: 15px;
  max-width: 350px;
  color: #121212;
}

.status {
  color: #121212;
  font-size: 20px;
}

.form {
  position: absolute;
  top: 50%; /* Move a div para o meio verticalmente */
  left: 50%; /* Move a div para o meio horizontalmente */
  transform: translate(-50%, -50%); /* Centraliza a div */
  background-color: aliceblue;
  padding: 15px;
  max-width: 350px;
}

.button {
  margin-top: 20px;
  max-width: 130px;
  background-color: dimgrey;
}

.button:hover {
  background-color: #121212;
}

.conclusionDate {
  max-width: 150px;
  margin-top: 8px;
}
</style>
