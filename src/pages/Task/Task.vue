<script setup lang="ts">
 import axios from "axios";
import Tasks from "../../components/Tasks/Tasks.vue";
 import { useRoute } from "vue-router";
 import { useFetch } from '../../composables/fetch'
import { computed } from "vue";

const router = useRoute();

 interface Task {
  id: number;
  title: string;
  description: string;
  createAt: Date;
  completionDate: Date;
  estimatedDate: Date;
  status: number;
  priority: number;
  userTaskId: number;
}
const id = Number(router.params.userId);

const { isFetching, error, data } = useFetch(`http://localhost:5044/Task/${id}`)

const allTasks = computed(() =>{
  if(!data) return [];
  return data;
})

let tasks: Task[];

function onSubmit(){
  axios
  .get<Task[]>(`http://localhost:5044/Task/${id}` )
  .then((res) => {
    tasks = res.data;
    console.log(tasks);
  })
  .catch((error) => {
          console.log(error);
  });
};

</script>

<template>
    <div v-for="task in data">
      <span>{{ task }}</span>
    </div>
</template>

<style>
</style>