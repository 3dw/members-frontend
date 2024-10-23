<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

const emit = defineEmits(['toggleLogin']);

const toggleLogin = () => {
  emit('toggleLogin');
};

</script>

<template>
  <main>
    <button class="ui button" @click="toggleLogin">Login</button>
    <TheWelcome />
  </main>
</template>
