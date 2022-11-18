<template>
    <v-card class="pa-md-4 mx-lg-auto">
        <v-carousel cycle="true" show-arrows="hover">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
            </v-carousel-item>
        </v-carousel>
    </v-card>
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil minus nulla eaque et ipsa quaerat sit, ratione
            sunt, beatae eveniet, mollitia aperiam dolor aut. Vitae optio atque accusantium quis ea!</p>
    </div>
    <br>
    <v-card class="mx-auto">
        <v-container fluid>
            <v-row dense>
                <v-col cols="12" md="4">
                    <v-card prepend-icon="mdi-home">
                        <template v-slot:title>
                            This is a title
                        </template>

                        <v-card-text>
                            This is content
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card prepend-icon="mdi-home">
                        <template v-slot:title>
                            This is a title
                        </template>

                        <v-card-text>
                            This is content
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card prepend-icon="mdi-home">
                        <template v-slot:title>
                            This is a title
                        </template>

                        <v-card-text>
                            This is content
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
    </v-card>

</template>
<script setup>
import { ref } from "@vue/reactivity";
const items = ref([
    {
        src: 'https://www.fundacionanimalove.org/images/2020/05/06/banner.jpg',
    },
    {
        src: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BWS6PWXNI5FCHKSYIM5TWZCTRU.jpg',
    },
    {
        src: 'https://pbs.twimg.com/media/EwAl4QWXAAATt9x.jpg',
    },
    {
        src: 'https://catedraldelcarmencartago.org/images/2021/09/08/sorteo.jpg',
    },
]);
</script>