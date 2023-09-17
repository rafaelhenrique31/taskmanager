<script setup lang="ts">
 import Tasks from "../../components/Tasks/Tasks.vue";
 import { useRoute } from "vue-router";

 const router = useRoute();

const id = Number(router.params.userId);

</script>

<template>
    <div>
        <Tasks :userId="id"></Tasks>
    </div>
</template>

<style>
</style>