<template>
    <v-footer :theme="theme" border>
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link.link" :to="link.link" variant="text" class="mx-2" rounded="xl">
                {{ link.name }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>ALPA PERÚ</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
const links = [
    { name: 'INICIO', link: '/', icon: 'mdi-home-city' },
    { name: 'RIFAS', link: '/rifas', icon: 'mdi-account' },
    { name: 'GANADORES', link: '/winners', icon: 'mdi-cake-variant' },
    { name: 'NOSOTROS', link: '/about', icon: 'mdi-account' },
    { name: 'CONTÁCTANOS', link: '/contact', icon: 'mdi-account' },
]
const props = defineProps({
    theme: String,
})
</script>