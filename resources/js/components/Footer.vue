<template>
    <v-footer :theme="theme" > 
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" variant="text" class="mx-2" rounded="xl">
                {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>ALPA PERÚ</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
const links = [
'INICIO',
'RIFAS',
'GANADORES',
'NOSOTROS',
'CONTÁCTANOS',
]
const props = defineProps({
    theme: String
})
</script>