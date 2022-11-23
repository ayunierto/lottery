<template>
    <v-card class="mx-auto text-center my-4" max-width="400" elevation="10">
        <v-card-text>
            <v-alert closable :text="error" type="error" v-if="error"></v-alert>
        </v-card-text>
        <v-card-text>
            <v-card class="mx-auto" color="primary" elevation="4" dark max-width="70%">
                <v-card-text>
                    <v-icon size="96">mdi-account-lock</v-icon>
                </v-card-text>
            </v-card>
        </v-card-text>
        <form @submit.prevent="login">
            <v-card-text>
                <v-text-field required label="Correo*" type="email" variant="outlined" clearable v-model="form.email">
                </v-text-field>
                
                <v-text-field required label="Contraseña*" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" variant="outlined" clearable v-model="form.password">
                </v-text-field>
                
                <div class="caption text-grey-darken-1 text-left">*Campos requeridos</div>
            </v-card-text>
            <v-card-actions>
                <v-row align="center" no-gutters>
                    <v-col class="text-center">
                        <div class="my-2">
                            <v-btn variant="tonal" type="submit" prepend-icon="mdi-login" color="primary" block>Acceder</v-btn>
                        </div>
                        <div>
                            <v-btn color="primary" x-small text>¿Olvidó su contraseña?</v-btn>
                        </div>
                        <div>
                            <v-btn prepend-icon="mdi-account-plus" color="primary" x-small text>Registrarse</v-btn>
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
    email: '',
    password: '',
})

let error = ref('');

const router = useRouter();

const login = async () => {
    await axios.post('/api/login', form).then(res => {
        if (res.data.success) {
            // si la respuesta es exitosa almacenar token en localStorage
            localStorage.setItem('token', res.data.data.token)
            router.push({ name: 'dashboard' })
        } else {
            // si el login es incorrecto 
            error.value = res.data.message
        }
    })
}

const showPassword = ref(false)

const usernameRules = ref({
    required: (value) => !!value || "Requerido",
    minLength: (value) =>
    (value && value.length >= 8) || "Debe contener al menos 8 caracteres"
})
const passwordRules = ref({
    required: (value) => !!value || "Requerida",
    minLenght: (value) =>
    value.length >= 8 || "Debe contener al menos 8 caracteres"
})

</script>

<style>
.v-card--offset {
    top: -32px;
    position: relative;
}
</style>
