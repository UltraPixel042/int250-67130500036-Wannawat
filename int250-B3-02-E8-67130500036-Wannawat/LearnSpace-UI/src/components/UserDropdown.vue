<script setup>
import { ref } from 'vue'

const isOpen = ref(false);

</script>

<template>
    <div class="relative inline-block">
        <button @click="isOpen = !isOpen"
            class="flex justify-center items-center font-bold border border-slate-200 shadow-md gap-3 px-3 py-2 rounded-2xl cursor-pointer"
            :class="isOpen ? 'round-t-2xl rounded-b-none border-b-transparent shadow-none' : 'rounded2xl shadow-md'"
            id="dropdownButton">
            <div
                class="flex justify-center items-center w-10 h-10 p-2 text-[#432dd7] bg-[#e0e7ff] text-center rounded-full">
                ST</div>
            <span>Student</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-caret-down-fill" viewBox="0 0 16 16" :class="isOpen ? 'rotate-180' : 'rotate-0'">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
        </button>

        <div class="flex flex-col absolute z-10 w-full border-x rounded-b-2xl bg-white border-slate-200 shadow-md"
            :class="{ 'hidden': !isOpen }" id="dropdownMenu">
            <a href="" class="border-t border-slate-200 px-3 py-2">โปรไฟล์</a>
            <a href="" class="border-t border-slate-200 px-3 py-2">ตั้งค่า</a>
            <a href="" class="border-t border-slate-200 px-3 py-2 text-red-500">ออกจากระบบ</a>
        </div>

    </div>
</template>

<style scoped></style>