<script setup lang="ts">
import { TaskGetResponse } from "services/task/types";
import Login from "../../components/Login/Login.vue";
import { UseTask } from "../../composables/UseTask";
import { ref } from "vue";

const useTaskStore = UseTask();

const tasks = ref<TaskGetResponse[]>();

async function getAllTasks() {
  try {
    var response = await useTaskStore.getAllTask();
    tasks.value = response;
  } catch (error) {}
}
</script>

<template>
  <Login></Login>
</template>

<style></style>
