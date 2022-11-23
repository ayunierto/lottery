<template>
    <h1>Dashboard</h1>
    <v-btn @click="logout">
  Cerrar cueenta
</v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const logout = () => {
    localStorage.removeItem('token')
    router.push({ name: 'home' })
}
</script>