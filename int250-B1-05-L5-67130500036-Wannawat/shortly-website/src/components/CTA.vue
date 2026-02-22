<script setup>

</script>

<template>
    <div class="cta-bg bg-[#1E1A4D] flex flex-col justify-center items-center py-20">
        <h3 class="font-bold text-5xl text-center mb-8 lg:text-start text-white">Boost your links today</h3>
        <a href="#" class="bg-[#02B7DC] text-white px-6 py-3 rounded-full font-bold">Get Started</a>
    </div>
    
</template>

<style scoped>
.cta-bg {
    background-image: url('../assets/bg-boost-mobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
}

@media (min-width: 768px) {
    .cta-bg {
        background-image: url('../assets/bg-boost-desktop.svg');
        background-size: cover;
    }
}@media (min-width: 1024px) {
    .cta-bg {
        background-image: url('../assets/bg-boost-desktop.svg');
        background-size: 100% 100%;
    }
}


</style>