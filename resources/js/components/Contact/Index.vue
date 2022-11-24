<template>
    <v-container>
        <v-card class="mx-auto" max-width="500">
            <v-card-title class="text-center">
                <v-img aspect-ratio="5" src="https://sumblex.com/medios/2020/08/Contactanos.png">
                </v-img>
            </v-card-title>
            <v-card-subtitle class="text-center">
                Fomulario de Contactos
            </v-card-subtitle>
            <v-card-text>
                <v-text-field label="Nombres" placeholder="John Doe" required>
                </v-text-field>
                <v-text-field type="email" label="Correo" placeholder="johndoe@gmail.com" required>
                </v-text-field>
                <v-text-field label="Asunto" placeholder="Información de Rifas" required>
                </v-text-field>
                <v-textarea counter label="Mensaje" placeholder="Costo, Fechas,¿Cómo Comprar?" required>
                </v-textarea>
            </v-card-text>
            <v-card-actions class="ma-2">
                <v-spacer></v-spacer>
                <v-btn append-icon="mdi-send" variant="outlined">
                    Eniar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>

</template>