<template>
    <v-app id="inspire" :theme="theme">
        
        <v-navigation-drawer v-model="drawer" temporary>
            <!--  -->
        </v-navigation-drawer>
        
        <v-app-bar elevation="10">
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
        
        <Footer :theme="theme" />
        
</v-app>
</template>

<script setup>
import {ref} from 'vue'
import Menu from "@/components/Menu.vue";
import Footer from '@/components/Footer.vue';

// Open and close navigation-drawer
const drawer = ref(null)

// Change theme
const theme = ref('light')

function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');    

#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>