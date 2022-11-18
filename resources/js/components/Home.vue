<template>
    <v-card class="pa-md-4 mx-lg-auto">
        <v-carousel cycle="true" show-arrows="hover">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
            </v-carousel-item>
        </v-carousel>
    </v-card>
    <br>
    <v-card class="mx-auto text-center">
        <v-container fluid>
            <v-row dense>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-img src="https://ricamente.net/wp-content/uploads/2019/11/Dinero-extra.jpg" height="200px"
                            cover></v-img>

                        <v-card-title>
                            DINERO
                        </v-card-title>
                        <v-card-subtitle>
                            Dinero en Efectivo
                        </v-card-subtitle>
                        <br>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-img
                            src="https://img.freepik.com/psd-premium/banner-3d-entrega-premios-plantilla-promocion-brasil_363450-180.jpg?w=2000"
                            height="200px" cover></v-img>

                        <v-card-title>
                            PREMIOS
                        </v-card-title>

                        <v-card-subtitle>
                            Articulos y Viajes
                        </v-card-subtitle>
                        <br>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-img
                            src="https://bogota.gov.co/sites/default/files/2022-11/resultados-loteria-bogota-10-noviembre-2022-1.jpeg"
                            height="200px" cover></v-img>

                        <v-card-title>
                            DIVERSION
                        </v-card-title>

                        <v-card-subtitle>
                            Diversión Asegurada
                        </v-card-subtitle>
                        <br>
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