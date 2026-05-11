<script setup>
import { ref } from 'vue';
defineProps({
    question: String,
    answer: String
})

const isOpen = ref(false);

</script>

<template>
    <div class="border-b border-slate-500">
        <div @click="isOpen = !isOpen" class="flex justify-between items-center cursor-pointer py-2">
            <span class="text-md">{{ question }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-chevron-down transition-transform duration-300" :class="isOpen ? 'rotate-180' : 'rotate-0'" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
        </div>
        <p v-show="isOpen" class="text-start text-sm text-slate-500 px-4 pb-2">{{ answer }}</p>
    </div>
</template>

<style scoped></style>