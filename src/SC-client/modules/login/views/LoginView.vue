<script setup lang='ts'>
import { ref } from 'vue';
import Form from '../components/Form.vue'
import Image from '../components/Image.vue'
import Footer from '../../../components/Footer.vue'
</script>
<template>
    <div class="container-fluid d-flex flex-row justify-content-center align-items-center p-0 m-0">
        <Form/>
        <Image/>
    </div>
    <div class="container-fluid p-0 m-0">
        <Footer />
    </div>
</template>
<style scooped>

</style>