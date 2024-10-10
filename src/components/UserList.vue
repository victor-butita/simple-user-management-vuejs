<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Users</h2>
      <ul class="space-y-2">
        <li v-for="user in props.users" :key="user.id" class="p-4 border rounded flex justify-between items-center">
          <div class="flex items-center">
            <img :src="user.imageUrl" alt="Profile Picture" class="w-16 h-16 rounded-full mr-4" />
            <div>
              <p class="font-medium">{{ user.name }}</p>
              <p class="text-sm text-gray-500">{{ user.email }}</p>
            </div>
          </div>
          <button @click="$emit('delete-user', user.id)" class="text-red-500">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define props
  const props = defineProps({
    users: {
      type: Array,
      required: true,
    },
  });
  </script>
  