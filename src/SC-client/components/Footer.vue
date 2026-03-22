<script setup lang='ts'>
import { ref } from 'vue';

</script>
<template>
    <div class="row m-0 p-0">
        <footer class="mt-auto py-5 bg-white border-top border-secondary-subtle">
            <div class="container-fluid px-4">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small">

                    <!-- Lado Izquierdo: Copyright -->
                    <div class="text-muted">
                        &copy; 2026 <span class="text-orange fw-bold">SC</span>.
                        <span class="d-none d-sm-inline">Servicio Comunitario Universitario.</span>
                    </div>

                    <!-- Lado Derecho: Links Rápidos o Estado -->
                    <div class="d-flex gap-3 mt-2 mt-md-0">
                        <a href="#" class="text-decoration-none text-muted hover-orange">Soporte</a>
                        <a href="#" class="text-decoration-none text-muted hover-orange">Privacidad</a>
                        <div class="d-flex align-items-center">
                            <span
                                class="badge rounded-pill bg-success-subtle text-success border border-success-subtle">
                                Sistema Activo
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>

</style>