<template>
  <div class="app">
    <UserForm @add-user="addUser" />
    <UserList :users="users" @delete-user="deleteUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';

const users = ref([]); // Initialize an empty array to hold users

const addUser = (user) => {
  // Add the new user to the users array
  users.value.push({
    id: Date.now(), // Use a unique id for each user
    name: user.name,
    email: user.email,
    imageUrl: URL.createObjectURL(user.image) // Create a URL for the uploaded image
  });
};

const deleteUser = (id) => {
  // Filter out the user with the given id
  users.value = users.value.filter(user => user.id !== id);
};
</script>
