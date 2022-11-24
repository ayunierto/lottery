<template>
    <h1 class="text-xs-h4 text-sm-h3 text-md-h2 text-lg-h3 text-center">
        PREMIOS DE LA SEMANA
    </h1>
    <h2 class="text-center text-h5 my-7 ">Todas nuestras rifas tienen un máximo de 100 Tickets</h2>

    <v-row justify="center">
        <v-col v-for="product in products" :key="product.title">
            <v-card>
                <v-img :src="product.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px" cover>
                    <v-card-title class="text-white" v-text="product.title"></v-card-title>
                </v-img>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        products: [
            { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
    }),
}
</script>