<script setup lang="ts">
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { UseTask } from "../../composables/UseTask";
import { TaskGetResponse } from "services/task/types";
import { useRouter } from "vue-router";
import Task from "../../components/Tasks/Tasks.vue";

const router = useRoute();
const routerPush = useRouter();
const id = Number(router.params.userId);
const useTaskStore = UseTask();

const tasks = ref<TaskGetResponse[]>([]);
const tasksFinish = ref<TaskGetResponse[]>([]);

async function getTasks(userId: number) {
  try {
    var response = await useTaskStore.getTaskByUserId(userId);

    if (!tasks.value) {
      tasks.value = [];
    }

    if (!tasksFinish.value) {
      tasksFinish.value = [];
    }
    response.map((item) => {
      if (item.status == 3) {
        tasksFinish.value.push(item);
      } else {
        tasks.value.push(item);
      }
    });
  } catch (error) {}
}

function creatTask(userId: number) {
  routerPush.push(`/CreateTask/${userId}`);
  getTasks(id);
}

onBeforeMount(async () => {
  await getTasks(id);
});
</script>

<template>
  <div class="ag-format-container">
    <div class="ag-courses_box">
      <Task :userId="id" :tasks="tasks"> </Task>
      <div class="divisor">Tasks Finalizadas</div>
      <Task :userId="id" :tasks="tasksFinish"> </Task>
    </div>
  </div>
  <div class="footer-buttons">
    <button class="button1" @click="getTasks(id)">Atualizar Tasks</button>
    <button class="button2" @click="creatTask(id)">Criar uma nova Task</button>
  </div>
</template>

<style>
.modal-content {
  background-color: #3ecd5e;
  color: red;
}
.div-delete {
  display: flex;
  align-content: flex-end;
  align-items: center;
}
.btn-delete {
  height: 50px;
  width: 60px;
  border-radius: 50%;
  background-color: #121212;
}

.divisor {
  background-color: aliceblue;
  width: 100%;
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
  height: 30px;
  margin-bottom: 30px;
  font-size: 30px;
}
.button1 {
  border-radius: 10px;
  margin-right: 10px;
  font-size: 20px;
  max-width: 200px;
  background-color: #121212;
}

.button2 {
  border-radius: 10px;
  margin-right: 10px;
  font-size: 20px;
  max-width: 200px;
  background-color: #121212;
}

.button1:hover {
  background-color: black;
}

.button2:hover {
  background-color: black;
}

.footer-buttons {
  display: flex; /* Use flex para alinhar os botões horizontalmente */
  justify-content: flex-end;
  padding-left: 75%;
  padding-top: 8%;
}

.ag-format-container {
  background-color: #000;
}

body {
  background-color: #000;
}
.ag-courses_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 50px 0;
}
.ag-courses_item {
  -ms-flex-preferred-size: calc(33.33333% - 30px);
  flex-basis: calc(33.33333% - 30px);
  margin: 0 15px 30px;
  overflow: hidden;
  border-radius: 28px;
  background-color: #121212;
}
.ag-courses-item_link {
  display: block;
  padding: 30px 20px;
  background-color: #121212;
  overflow: hidden;
  position: relative;
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #fff;
}

.ag-courses-item_title {
  min-height: 60px;
  overflow: hidden;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  z-index: 2;
  position: relative;
}
.ag-courses-item_date-box {
  font-size: 23px;
  color: #fff;
  z-index: 2;
  position: relative;
  font-weight: bold;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color 0.5s ease;
  -o-transition: color 0.5s ease;
  transition: color 0.5s ease;
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: #3ecd5e;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: #e44002;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #cd3e94;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #4c49ea;
}

@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }
}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}
</style>
