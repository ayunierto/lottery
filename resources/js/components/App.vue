<template>
    <v-app id="inspire" :theme="theme">
        
        <v-navigation-drawer v-model="drawer" temporary>
            <NavigationDrawer :links="links" />
        </v-navigation-drawer>
        
        <v-app-bar elevation="10">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-md-none"></v-app-bar-nav-icon>
            
            <v-toolbar-title>
                <v-img aspect-ratio="1" width="90" contain src='https://granrifagran.cl/Imagenes/LogoGrG_Rectacgulo.png'>
                </v-img>
            </v-toolbar-title>
            
            <template class="d-none d-md-flex">
                <v-btn v-for="link in links" :key="link.link" :to="link.link">
                    {{ link.name }}
                </v-btn>
            </template>
            
            <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Tema</v-btn>
            
            <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
        </v-app-bar>
        
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
        
        <Footer :theme="theme" />
        
    </v-app>
</template>

<script setup>
import {ref} from 'vue'
import Footer from '@/components/Footer.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

// Open and close navigation-drawer
const drawer = ref(null)

// Change theme
const theme = ref('dark')

function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Links for natigation
const links = [
{ name : 'INICIO', link: '/', icon: 'mdi-home-city'},
{ name : 'RIFAS', link: '/rifas', icon: 'mdi-account'},
{ name : 'GANADORES', link: '/winners', icon: 'mdi-cake-variant'},
{ name : 'NOSOTROS', link: '/about', icon: 'mdi-account'},
{ name : 'CONTÁCTANOS', link: '/contact', icon: 'mdi-account'},
{ name : 'INGRESAR', link: '/login', icon: 'mdi-account'},
]

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');

#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>