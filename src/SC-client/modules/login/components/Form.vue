<script setup lang='ts'>
import { ref } from 'vue';

</script>
<template>
    <!--inicio de sesion-->
    <div class="row w-50 d-flex flex-column justify-content-center align-items-center py-5 mx-0 gap-2">
        <div class="col-9">
            <h4 class="text-capitalize text-center p-0 m-0 mb-2 fw-medium">
                Inicio de Sesión
            </h4>
        </div>
        <div class="col-9">
            <div class="card shadow-lg py-1 px-3">
                <div class="card-body">
                    <form action="" class="row gap-3">
                        <div class="col-12 p-0 m-0 d-flex flex-row justify-content-between align-items-center">
                            <label for="" class="form-label text-muted p-0 m-0">Usuario: </label>
                            <input type="text" name="" id="" class="form-control w-75">
                        </div>
                        <div class="col-12 p-0 m-0 d-flex flex-row justify-content-between align-items-center">
                            <label for="" class="form-label text-muted p-0 m-0">Contraseña: </label>
                            <input type="password" class="form-control w-75"></input>
                        </div>
                        <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center align-items-center">
                            <input type="submit" value="Iniciar session" class="btn btn-light w-50">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-9 d-flex flex-row justify-content-center align-items-center border-top border-1 border-secondary-subtle mt-2 p-2 gap-3">
            <p class="text-muted p-0 m-0">¿No tienes una cuenta aun?</p>
            <router-link to="/register" class="btn btn-primary rounded-pill py-1">
                Registrate
            </router-link>
        </div>
    </div>
</template>
<style scoped>

</style>