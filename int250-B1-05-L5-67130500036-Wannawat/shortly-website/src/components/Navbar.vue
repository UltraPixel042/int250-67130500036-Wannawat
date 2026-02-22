<script setup>
import { ref } from 'vue'

const isOpen = ref(false) 
</script>

<template>
    <nav class="flex items-center justify-between p-6 lg:justify-around">
        <!-- Desktop size-->
        <div class="flex items-center space-x-8">
            <!-- Logo -->
            <img src="../assets/logo.svg" alt="Logo Picture" />

            <!-- Left side -->
            <div class="hidden lg:flex space-x-6 font-bold">
                <a href="#" class="hover:text-black">Features</a>
                <a href="#" class="hover:text-black">Pricing</a>
                <a href="#" class="hover:text-black">Resources</a>
            </div>
        </div>

        <!-- Right side -->
        <div class="hidden lg:flex items-center space-x-6 font-bold">
            <a href="#" class="hover:text-black">Login</a>
            <a href="#" class="bg-cyan-500 text-white px-6 py-2 rounded-full hover:opacity-70">
                Sign Up
            </a>
        </div>

        <!-- Hamburger button -->
        <button @click="isOpen = !isOpen" class="lg:hidden block focus:outline-none sm:flex">
            <div class="space-y-1.5">
                <span :class="isOpen ? 'rotate-45 translate-y-2' : ''"
                    class="block w-6 h-0.5 bg-gray-500 transition-all duration-300"></span>
                <span :class="isOpen ? 'opacity-0' : ''"
                    class="block w-6 h-0.5 bg-gray-500 transition-all duration-300"></span>
                <span :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
                    class="block w-6 h-0.5 bg-gray-500 transition-all duration-300"></span>
            </div>
        </button>

        <!-- Mobile size -->
        <div v-show="isOpen"
            class="absolute top-20 left-6 right-6 bg-slate-600 p-8 rounded-xl lg:hidden z-50 text-white text-center font-bold">
            <div class="flex flex-col space-y-6">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
                <hr class="border-gray-800">
                <a href="#">Login</a>
                <a href="#" class="bg-[#02B7DC] text-white py-3 rounded-full">Sign Up</a>
            </div>
        </div>

    </nav>
</template>


<style scoped></style>