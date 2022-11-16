<template>
    <v-app :theme="theme">
        <v-app-bar :elevation="10">
            <v-spacer></v-spacer>
            
            <v-btn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="onClick"
            ></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>
        
        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>


<!-- <template>
    <div>
        <v-card>
            <v-layout>
                <v-app-bar color="info">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                    </v-app-bar-nav-icon>
                </v-app-bar>
                <v-navigation-drawer v-model="drawer" >
                    <v-list >
                        <v-list-item v-for="item in items" :to="item.ruta">
                            {{item.nombre}}
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-layout>
        </v-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
            { nombre: 'Inicio' , icon: 'Foo', ruta:'/' },
            { nombre: 'Login' , icon: 'Bar', ruta:'/login' }
            ],
            drawer: null,
        }
    },
}
</script> -->