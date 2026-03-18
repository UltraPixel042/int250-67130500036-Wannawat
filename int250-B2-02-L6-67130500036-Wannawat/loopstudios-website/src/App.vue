<!-- <script setup>
    import NavBar from './components/NavBar.vue';
    import Feature from './components/Feature.vue';
    import Creation from './components/Creation.vue';
    import Footer from './components/Footer.vue';
</script>

<template>
    <NavBar />
    <Feature />
    <Creation />
    <Footer />
</template>

<style scoped>

</style> -->


<script setup>
import NavBar from './components/NavBar.vue';
import Feature from './components/Feature.vue';
import Creation from './components/Creation.vue';
import Footer from './components/Footer.vue';
import { ref } from 'vue';

// Menu: About, Careers, Events, Products, Supports
const menuItems = ref([
    { name: "About", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Events", link: "#" },
    { name: "Products", link: "#" },
    { name: "Support", link: "#" }
])
</script>

<template>
    <NavBar :menu-items="menuItems" />
    <Feature />
    <Creation />
    <Footer :menu-items="menuItems" />
</template>

<style scoped></style>