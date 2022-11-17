<template>
    <v-app id="inspire" :theme="theme">
        <v-navigation-drawer v-model="drawer">
            <!--  -->
        </v-navigation-drawer>
        
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-img aspect-ratio="1" width="90" contain src='https://granrifagran.cl/Imagenes/LogoGrG_Rectacgulo.png'>
                </v-img>
            </v-toolbar-title>
            
            <Menu />
            
            <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Tema</v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>
        
        <v-main>
            <v-container>
                <RouterView></RouterView>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue"

// Open and close navigation-drawer
const drawer = ref(null)

// Change theme
const theme = ref('light')

function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

</script>