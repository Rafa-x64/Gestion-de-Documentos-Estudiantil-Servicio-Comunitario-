<script setup lang='ts'>
import { ref } from 'vue';
import Header from '../../dashboard/components/Header.vue'
import Footer from '../../dashboard/components/Footer.vue';
</script>
<template>
    <div class="container-fluid p-1 m-0">
        <!--Header-->
        <section class="row d-flex justify-content-center align-items-center p-1 m-0">
            <Header/>
        </section>
        <!--main-->
        <section class="row d-flex justify-content-center align-items-center p-1 m-0">
            <div class="col-4 p-1">

            </div>
            <div class="col-8 p-1">

            </div>
        </section>
        <!--footer-->
        <section class="row d-flex justify-content-center align-items-center p-1 m-0">
            <Footer />
        </section>
    </div>
</template>
<style scoped></style>