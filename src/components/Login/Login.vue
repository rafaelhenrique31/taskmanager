<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

let users: User[];


function onSubmit(){
  axios
  .get<User[]>("http://localhost:5044/UserTask")
  .then((res) => {
     users = res.data;
     users.map((user) => {
      if(user.email == email.value && user.password == password.value){
        router.push(`/task/${user.id}`);
      }
      })
  })
  .catch((error) => {
          console.log(error);
  });
};

const email = ref("");
const password = ref("");

</script>

<template>
    <div class="login-form">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model=email>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model=password>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  <div >
  </div>
</template>

<style>

.login-form {
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>