<script setup lang='ts'>
import { ref } from 'vue';
import { BrushCleaning } from 'lucide-vue-next';
import { Save } from 'lucide-vue-next';
</script>
<template>
    <form action="" class="row d-flex flex-row justify-content-center align-items-center m-0 p-0 p-2 gy-2 border-end">
        <div class="col-6 p-0 px-1">
            <label for="" class="form-label p-0 m-0">Nombre: </label>
            <input type="text" name="" id="" class="form-control m-0">
        </div>
        <div class="col-6 p-0 px-1">
            <label for="" class="form-label p-0 m-0">Apellido: </label>
            <input type="text" name="" id="" class="form-control m-0">
        </div>
        <div class="col-2 p-0 px-1">
            <label for="" class="form-label p-0 m-0">Tipo: </label>
            <select class="form-select">
                <option value="carrera1">V-</option>
                <option value="carrera 2">J-</option>
                <option value="carrera 2">E-</option>
            </select>
        </div>
        <div class="col-10 p-0 px-1">
            <label for="" class="form-label p-0 m-0">Cedula: </label>
            <input type="text" name="" id="" class="form-control m-0">
        </div>
        <div class="col-7 p-0 px-1">
            <label class="form-label m-0">Carrera:</label>
            <select class="form-select">
                <option value="carrera1">Carrera 1</option>
                <option value="carrera 2">Carrera 2</option>
            </select>
        </div>
        <div class="col-5 p-0 px-1">
            <label class="form-label m-0">Semestre y Sección:</label>
            <div class="d-flex gap-1">
                <input type="number" min="1" max="12" step="1" value="1" class="form-control text-center">
                <input type="text" class="form-control text-center" pattern="[A-Za-z ]+" value="a"
                    title="solo letras de A hasta Z">
            </div>
        </div>
        <div class="col-12 p-0 px-1 documentos">
            <label class="form-label mb-1">Documentos:</label>
            <div class="row g-0 m-0">
                <!-- Ítem del documento -->
                <div v-for="n in 3" :key="n" class="col-6">
                    <div class="doc-item d-flex align-items-center justify-content-between p-2">
                        <div class="label-scroll-container">
                            <label class="form-label m-0 pe-2 text-nowrap">
                                Documento con un nombre extremadamente largo que debería hacer scroll {{ n }}
                            </label>
                        </div>
                        <input type="checkbox" class="form-check-input m-0 flex-shrink-0">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 p-0 m-0 d-flex flex-row justify-content-evenly align-items-center pt-3">
            <button type="submit" class="btn btn-success w-25">
                <Save :size="24" color="white" />
            </button>
            <button type="reset" class="btn btn-danger w-25">
                <BrushCleaning :size="24" color="white" />
            </button>
        </div>
    </form>
</template>
<style scoped>
.doc-item {
    background-color: var(--bs-secondary-bg-subtle);
    overflow: hidden;
}

.label-scroll-container {
    flex-grow: 1;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
}

.label-scroll-container::-webkit-scrollbar {
    display: none;
}

.flex-shrink-0 {
    flex-shrink: 0;
}
</style>