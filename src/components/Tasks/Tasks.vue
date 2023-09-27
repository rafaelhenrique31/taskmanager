<script setup lang="ts">
import { UseTask } from "../../composables/UseTask";
import { TaskGetResponse } from "services/task/types";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const useTaskStore = UseTask();
const routerPush = useRouter();
const router = useRoute();

const id = Number(router.params.userId);
const props = defineProps<{
  userId: number;
  tasks: TaskGetResponse[];
}>();

async function deleteTask(taskId: number) {
  await useTaskStore.deleteTask(taskId);
}

function UpdateTask(taskId: number) {
  routerPush.push(`/updateTask/${id}/${taskId}`);
}

const showModal = ref(false);
function abrirModal() {
  showModal.value = true;
}
</script>

<template>
  <div v-for="task in props.tasks" :key="task.id" class="ag-courses_item">
    <a @click="UpdateTask(task.id)" href="#" class="ag-courses-item_link">
      <div class="ag-courses-item_bg"></div>
      <span>Task</span>
      <div class="ag-courses-item_title">Titulo: {{ task.title }}</div>
      <div class="ag-courses-item_title">Descrição: {{ task.description }}</div>
      <div class="ag-courses-item_title">
        status:
        {{
          task.status == 1
            ? "Criado"
            : task.status == 2
            ? "Em progresso"
            : "Finalizado"
        }}
      </div>
      <div class="ag-courses-item_title">
        priority:
        {{
          task.priority == 1
            ? "Média"
            : task.priority == 2
            ? "Urgente"
            : "Baixa"
        }}
      </div>
      <div class="ag-courses-item_date-box">
        Data da criação: {{ task.createAt }}
      </div>
      <div class="ag-courses-item_date-box">
        Data estimada para conclusão: {{ task.estimatedDate }}
      </div>
    </a>
    <div class="div-delete">
      <button class="btn-delete" @click="abrirModal">Deletar</button>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <p>Tem certeza de que deseja excluir?</p>
        <button @click="deleteTask(task.id)">Sim</button>
        <button class="btn-delete" @click="showModal = false">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<style></style>
