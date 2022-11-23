<template>
    <v-card class="mx-auto text-center my-4" max-width="400" elevation="10">
        
        <v-card-text>
            <v-alert closable :text="error" type="error" v-if="error"></v-alert>
        </v-card-text>
        
        <v-card-text>
            <v-card class="mx-auto" color="primary" elevation="4" dark max-width="70%">
                <v-card-text>
                    <v-icon size="96">mdi-account-plus</v-icon>
                </v-card-text>
            </v-card>
        </v-card-text>
        
        <form @submit.prevent="login">
            <v-card-text>
                <v-text-field 
                label="Nombre*" 
                type="text" 
                variant="outlined" 
                clearable 
                v-model="form.name"
                required
                minlength="5"
                >
                </v-text-field>
            
            <v-text-field 
                label="Correo*" 
                type="email" 
                variant="outlined" 
                clearable 
                v-model="form.email"
                required
                >
            </v-text-field>
        
        
            <v-text-field 
                label="Contraseña*" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" 
                variant="outlined" 
                clearable 
                v-model="form.password"
                required
                >
            </v-text-field>
    
            <v-text-field 
                label="Verificar Contraseña*" 
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" 
                variant="outlined" 
                clearable 
                v-model="form.c_password"
                required
                >
            </v-text-field>

<div class="caption text-grey-darken-1 text-left">*Campos requeridos</div>
</v-card-text>
<v-card-actions>
    <v-row align="center" no-gutters>
        <v-col class="text-center">
            <div class="my-2">
                <v-btn variant="tonal" type="submit" prepend-icon="mdi-login" color="primary" block>Registrase</v-btn>
            </div>
            <div>
                <v-btn prepend-icon="mdi-account-lock" color="primary" x-small text>Ingresar</v-btn>
            </div>
        </v-col>
    </v-row>
</v-card-actions>
</form>
</v-card>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

let form = reactive({
    name: '',
    email: '',
    password: '',
    c_password: '',
})

let error = ref('');

const router = useRouter();

const login = async () => {
    await axios.post('/api/register', form).then(res => {
        if (res.data.success) {
            // si la respuesta es exitosa almacenar token en localStorage
            localStorage.setItem('token', res.data.data.token)
            router.push({ name: 'dashboard' })
        } else {
            // si el registro es incorrecto 
            error.value = res.data.message
        }
    })
}

const showPassword = ref(false)

</script>

<style>
.v-card--offset {
    top: -32px;
    position: relative;
}
</style>
