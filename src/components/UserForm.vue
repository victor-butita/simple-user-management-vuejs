<template>
    <form @submit.prevent="addUser" class="bg-white p-4 rounded shadow-md">
      <div class="mb-4">
        <label class="block text-sm font-medium">Name</label>
        <input v-model="user.name" type="text" class="mt-1 p-2 border rounded w-full" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium">Email</label>
        <input v-model="user.email" type="email" class="mt-1 p-2 border rounded w-full" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium">Profile Picture</label>
        <input type="file" @change="handleImageUpload" class="mt-1 p-2 border rounded w-full" />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
    </form>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['add-user']);
  
  const user = ref({
    name: '',
    email: '',
    image: null,
  });
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    user.value.image = file;
  };
  
  const addUser = () => {
    emit('add-user', { ...user.value }); // Emit the user data
    user.value = { name: '', email: '', image: null }; // Reset the form
  };
  </script>
  