<script setup lang='ts'>
import { ref } from 'vue';
import { UserSearch } from "lucide-vue-next"

</script>
<template>
    <nav class="navbar navbar-expand-lg bg-secondary-subtle border rounded-1">
        <div class="container-fluid">
            <router-link to="" class="navbar-brand">Gestion de Documentos</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link text-danger bg-danger-subtle">Cerrar
                            Session</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link">Estudiantes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/documents" class="nav-link">Documentos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/carrers" class="nav-link">Carreras</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success" type="submit">
                        <UserSearch :size="24" color="white" stroke-width="2" />
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>
<style scoped></style>