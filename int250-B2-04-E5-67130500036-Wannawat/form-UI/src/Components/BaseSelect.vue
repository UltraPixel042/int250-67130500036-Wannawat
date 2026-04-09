<script setup>
const props = defineProps({
    title: String,
    options: { type: Array, default: () => [] },
    showValue: { type: Boolean, default: false },
    modelValue: { type: String, default: '' },
    error: { type: String, default: '' },
    submitted: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col text-slate-600">
        <label class="flex pb-2">
            <span class="text-sm font-bold">{{ title }}</span>&nbsp;
            <span class="text-red-500 align-super text-xs">*</span>
        </label>
        <!-- <div class="flex px-4"> -->
            <select :value="modelValue" @change="emit('update:modelValue', $event.target.value)"
                class="px-3 py-2 border rounded-lg w-[95%] text-black transition cursor-pointer" :class="submitted && error
                    ? 'border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300'
                    : 'border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300'">
                <option value="" disabled selected>Select...</option>
                <option v-for="item in options" :key="item.value" :value="item.value">
                    {{ item.label }}{{ showValue ? ` (${item.value})` : '' }}
                </option>
            </select>
        <!-- </div> -->
        <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
    </div>
</template>

<style scoped></style>