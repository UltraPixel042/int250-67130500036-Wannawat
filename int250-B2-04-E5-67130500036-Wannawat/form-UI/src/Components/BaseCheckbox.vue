<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false },
    error: { type: String, default: '' },
    submitted: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const checked = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})
</script>

<template>
    <div class="md:px-8 text-slate-600">
        <div class="flex pt-6 items-start gap-2">
            <input
                type="checkbox"
                name="confirm"
                id="confirm"
                v-model="checked"
                class="mt-0.5 cursor-pointer"
            />
            <label for="confirm" class="text-sm cursor-pointer">
                I confirm that the information provided is correct and I agree to participate in the workshop activities.
            </label>
        </div>
        <p v-if="submitted && error" class="mt-1 text-xs text-red-500">{{ error }}</p>
    </div>
</template>

<style scoped></style>