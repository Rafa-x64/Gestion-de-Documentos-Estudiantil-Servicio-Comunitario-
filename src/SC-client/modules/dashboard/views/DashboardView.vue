<script setup lang='ts'>
import { ref } from 'vue';
import Header from '../../../components/Header.vue'
import Footer from '../../../components/Footer.vue';
import CreateForm from '../../dashboard/components/CreateForm.vue';
import List from '../../dashboard/components/List.vue'
</script>
<template>
    <div class="container-fluid p-0 m-0">
        <!--Header-->
        <section class="row d-flex justify-content-center align-items-center p-1 m-0">
            <Header />
        </section>
        <!--main-->
        <section class="row d-flex justify-content-center align-items-center p-1 m-0">
            <div class="col-4 p-1">
                <CreateForm />
            </div>
            <div class="col-8 p-1">
                <List />
            </div>
        </section>
        <!--footer-->
        <section class="row d-flex justify-content-center align-items-center p-1 m-0">
            <Footer />
        </section>
    </div>
</template>
<style scoped></style>