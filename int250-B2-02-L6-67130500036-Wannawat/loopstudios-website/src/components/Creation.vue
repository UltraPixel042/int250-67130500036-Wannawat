<script setup>
const cardList = [
    { id: 1, title: "Deep Earth", mobile: "/src/assets/mobile/image-deep-earth.jpg", desktop: "/src/assets/desktop/image-deep-earth.jpg" },
    { id: 2, title: "Night Arcade", mobile: "/src/assets/mobile/image-night-arcade.jpg", desktop: "/src/assets/desktop/image-night-arcade.jpg" },
    { id: 3, title: "Soccer Team VR", mobile: "/src/assets/mobile/image-soccer-team.jpg", desktop: "/src/assets/desktop/image-soccer-team.jpg" },
    { id: 4, title: "The Grid", mobile: "/src/assets/mobile/image-grid.jpg", desktop: "/src/assets/desktop/image-grid.jpg" },
    { id: 5, title: "From Up Above VR", mobile: "/src/assets/mobile/image-from-above.jpg", desktop: "/src/assets/desktop/image-from-above.jpg" },
    { id: 6, title: "Pocket Borealis", mobile: "/src/assets/mobile/image-pocket-borealis.jpg", desktop: "/src/assets/desktop/image-pocket-borealis.jpg" },
    { id: 7, title: "The Curiosity", mobile: "/src/assets/mobile/image-curiosity.jpg", desktop: "/src/assets/desktop/image-curiosity.jpg" },
    { id: 8, title: "Make it fisheye", mobile: "/src/assets/mobile/image-fisheye.jpg", desktop: "/src/assets/desktop/image-fisheye.jpg" },
]
</script>

<template>
    <section class="flex flex-col px-6 py-8 h-auto">
        <div class="container h-full mx-auto max-w-6xl flex justify-center my-32 px-6 text-gray-900 md:px-0">
            <div class="flex justify-center w-full h-fit mb-12 md:justify-between">
                <h2 class="text-4xl text-center text-nowrap uppercase md:text-left md:text-5xl">OUR CREATIONS</h2>

                <button class="hidden px-10 py-2 my-0 font-bold tracking-[0.3rem] border-2 uppercase cursor-pointer hover:bg-black hover:text-white md:flex md:justify-between md:items-center">See All</button>
            </div>
        </div>

        <div class="flex flex-col text-2xl gap-6 h-auto md:grid md:grid-cols-4 cursor-pointer">
            <div class="group relative w-full uppercase" v-for="card in cardList" :key="card.id">
                <img :src="card.mobile" :alt="card.title"
                    class="w-full h-auto block transition duration-200 group-hover:scale-110 md:hidden">
                <img :src="card.desktop" :alt="card.title"
                    class="w-full h-auto hidden transition duration-200 group-hover:scale-110 md:block">

                <div class="absolute inset-0 bg-linear-to-b from-transparent to-gray-900 group-hover:from-white/50 group-hover:to-white/70 group-hover:scale-110 transition-all duration-200"></div>

                <h3 class="absolute bottom-4 text-white text-2xl px-8 leading-tight group-hover:scale-110 transition-colors duration-300">{{ card.title }}</h3>
            </div>
        </div>

        <button class="w-full border-2 border-black mt-8 mb-32 px-10 py-2 font-bold tracking-[0.3em] uppercase transition-all duration-200 hover:bg-black hover:text-white md:hidden">
            See All
        </button>
    </section>
</template>

<style scoped></style>
