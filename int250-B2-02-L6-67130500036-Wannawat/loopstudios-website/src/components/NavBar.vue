<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const props = defineProps({
    menuItems: {
        type: Array,            // เช็คว่าค่าที่รีบเข้ามาต้องเป็น Array
        required: true,         // ต้องส่งข้อมูลนี้มา ห้ามลืมส่ง
        default: () => []       // ถ้าไม่มีข้อมูลส่งมาก็ให้เป็น [] ว่างๆ
    }
});


</script>

<template>
    <section
        class="h-120 bg-no-repeat bg-center bg-cover bg-[url('@/assets/mobile/image-hero.jpg')] md:bg-[url('@/assets/desktop/image-hero.jpg')] md:font-sans">

        <div class="h-full container mx-auto max-w-6xl px-6 py-8">

            <nav class="flex justify-between items-center h-10 mb-20 font-bold text-white">

                <img src="@/assets/logo.svg" alt="loopstudios logo">

                <div class="hidden md:flex gap-8">
                    <div class="group" v-for="item in menuItems" :key="item.name">
                        <a :href="item.link">{{ item.name }}</a>
                        <div class="transition-all bg-white w-0 h-[2px] duration-300 group-hover:w-full"></div>
                    </div>

                </div>

                <button @click="toggleMenu" class="md:hidden">
                    <div class="w-8 h-1 mb-1 bg-white transition-all duration-300"
                        :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>

                    <div class="w-8 h-1 mb-1 bg-white transition-all duration-300" :class="{ 'opacity-0': isMenuOpen }">
                    </div>

                    <div class="w-8 h-1 bg-white transition-all duration-300"
                        :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></div>
                </button>

                <!-- After Clicked Hamburger button -->
                <div :class="isMenuOpen ? 'flex' : 'hidden'"
                    class="fixed inset-0 z-40 flex-col items-start w-full h-full px-6 py-8 pt-10 space-y-6 text-white uppercase bg-black tracking-[0.2em] text-2xl md:hidden">

                    <div class="flex justify-end w-full">
                        
                            <button @click="toggleMenu" class="md:hidden">
                                <div class="w-8 h-1 mb-1 bg-white transition-all duration-300"
                                    :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
                                <div class="w-8 h-1 mb-1 bg-white transition-all duration-300"
                                    :class="{ 'opacity-0': isMenuOpen }">
                                </div>
                                <div class="w-8 h-1 bg-white transition-all duration-300"
                                    :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></div>
                            </button>
                    </div>

                    <a v-for="item in menuItems" :key="item.name" href="#"
                        class="hover:text-gray-400 transition-colors">
                        {{ item.name }}
                    </a>

                </div>
            </nav>


            <div class="group border border-white  p-4 text-white font-extralight w-[288px] text-4xl">

                IMPRESSIVE <br>

                EXPERIENCE <br>

                THAT DELIVER

                <div
                    class="mx-2 mt-2 border-b-0 transition-all duration-300 group-hover:border-b-4 group-hover:border-blue-50">
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped></style>