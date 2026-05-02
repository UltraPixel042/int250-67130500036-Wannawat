<script setup>
defineProps({
    message: String,
    type: { type: String, default: "success" }
})

const toastStyle = {
    success: "bg-green-100 text-green-800 border-green-200",
    error: "bg-red-100 text-red-800 border-red-200",
    info: "bg-indigo-100 text-indigo-800 border-indigo-200"
}
</script>

<template>
    <div class="fixed bottom-6 right-6 z-50">
        <div class="px-4 py-3 rounded-2xl border font-bold text-sm shadow-sm w-md" :class="toastStyle[type]">
            {{ message }}
        </div>
    </div>
</template>

<style scoped></style>