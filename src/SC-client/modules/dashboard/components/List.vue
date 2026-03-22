<script setup lang='ts'>
import { ref } from 'vue';

</script>
<template>
    <div class="table-container p-2 h-100 d-flex flex-column">

        <!-- Barra de Filtros y Ordenamiento -->
        <div class="row g-2 mb-3 align-items-end">
            <div class="col-md-5">
                <label class="form-label small m-0">Ordenar por:</label>
                <select class="form-select form-select-sm">
                    <option value="asc">Nombre (A-Z)</option>
                    <option value="desc">Nombre (Z-A)</option>
                    <option value="old">Más antiguo</option>
                    <option value="new">Más reciente</option>
                    <option value="docs-">Menos documentos</option>
                    <option value="docs+">Más documentos</option>
                </select>
            </div>
            <div class="col-md-2">
                <button class="btn btn-outline-secondary btn-sm w-100">Filtrar</button>
            </div>
        </div>

        <!-- Tabla con Scroll -->
        <div class="flex-grow-1 overflow-auto shadow-sm border rounded bg-white" style="max-height: 400px;">
            <table class="table table-striped table-hover m-0 table-sm align-middle">
                <thead class="table-dark sticky-top">
                    <tr>
                        <th class="px-3">Nombre y Apellido</th>
                        <th>Cédula</th>
                        <th>Carrera</th>
                        <th class="text-center">S/S</th>
                        <th class="text-center">Estado</th>
                        <th class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Registro 1 -->
                    <tr>
                        <td class="px-3">Rafael Alvarez</td>
                        <td>V-28.456.789</td>
                        <td>Ing. Informática</td>
                        <td class="text-center">9 - A</td>
                        <td class="text-center">
                            <span class="badge rounded-pill text-bg-success">Activo</span>
                        </td>
                        <td class="text-center">
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-outline-primary border-0"><i class="bi bi-pencil"></i>
                                    Edit</button>
                                <button class="btn btn-outline-danger border-0"><i class="bi bi-trash"></i> Del</button>
                            </div>
                        </td>
                    </tr>
                    <!-- Registro 2 -->
                    <tr>
                        <td class="px-3">Ana García</td>
                        <td>V-26.111.222</td>
                        <td>Ing. Civil</td>
                        <td class="text-center">4 - B</td>
                        <td class="text-center">
                            <span class="badge rounded-pill text-bg-secondary">Inactivo</span>
                        </td>
                        <td class="text-center">
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-outline-primary border-0">Edit</button>
                                <button class="btn btn-outline-danger border-0">Del</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
/* Sticky header para no perder los títulos al hacer scroll */
.sticky-top {
    z-index: 10;
}

/* Scrollbar minimalista al estilo EndeavourOS/Rust tools */
.overflow-auto::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-auto::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
    background: #FD7E14;
    /* Tu color KOrange */
}

/* Clean UI: Evitar que la tabla se vea apretada */
.table td {
    white-space: nowrap;
    padding: 10px 5px;
}
</style>