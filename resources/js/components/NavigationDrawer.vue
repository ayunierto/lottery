<template>
    <v-list-item
    lines="two"
    prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
    title="Jane Smith"
    subtitle="Logged in"
    ></v-list-item>
    
    <v-divider></v-divider>
    
    <v-list density="compact" nav>
        <v-list-item v-for="link in links" :prepend-icon="link.icon" :title="link.name" :value="link.name" :to="link.link" :key="link.link"></v-list-item>
    </v-list>
    
</template>

<script setup>
const props = defineProps({
    links: Array,
})


</script>