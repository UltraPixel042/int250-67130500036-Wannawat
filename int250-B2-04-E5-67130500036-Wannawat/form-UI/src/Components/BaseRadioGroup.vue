<script setup>
const props = defineProps({
    modelValue: { type: String, default: '' },
    error: { type: String, default: '' },
    submitted: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const options = [
    { label: 'Year 1', value: '1' },
    { label: 'Year 2', value: '2' },
    { label: 'Year 3', value: '3' },
    { label: 'Year 4', value: '4' },
]
</script>

<template>
    <div class="md:px-8 text-slate-600 mb-4">
        <div class="flex pb-2">
            <label class="text-sm font-bold">Year Level</label>&nbsp;
            <span class="text-red-500 align-super text-xs">*</span>
        </div>
        <div class="flex gap-3 flex-wrap">
            <label
                v-for="opt in options"
                :key="opt.value"
                class="flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition-all select-none"
                :class="modelValue === opt.value
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold ring-2 ring-blue-300'
                    : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'"
            >
                <input
                    type="radio"
                    name="year"
                    :value="opt.value"
                    :checked="modelValue === opt.value"
                    @change="emit('update:modelValue', opt.value)"
                    class="hidden"
                />
                {{ opt.label }}
            </label>
        </div>
        <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
    </div>
</template>

<style scoped></style>