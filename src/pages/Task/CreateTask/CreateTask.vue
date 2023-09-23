<script setup lang="ts">
import { useRoute } from "vue-router";
import CreateTask from "../../../components/Tasks/CreateTask/CreateTask.vue";

const router = useRoute();
const id = Number(router.params.userId);
</script>

<template>
  <CreateTask :user-id="id"> </CreateTask>
</template>

<style></style>
