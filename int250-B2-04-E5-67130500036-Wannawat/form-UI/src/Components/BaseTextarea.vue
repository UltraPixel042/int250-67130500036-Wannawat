<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: { type: String, default: '' },
    error: { type: String, default: '' },
    submitted: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const maxLength = 200
const remaining = computed(() => maxLength - props.modelValue.length)
</script>

<template>
    <div class="md:px-8 text-slate-600">
        <div class="flex pb-2">
            <label for="bio" class="text-sm font-bold">Short Bio</label>
        </div>
        <div>
            <textarea
                :value="modelValue"
                @input="emit('update:modelValue', $event.target.value)"
                :maxlength="maxLength"
                name="bio"
                id="bio"
                placeholder="Tell us about your interests..."
                class="w-full border border-slate-300 rounded-md px-3 py-2 placeholder:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                rows="3"
            ></textarea>
            <div class="flex justify-between items-center mt-1">
                <label for="bio" class="text-sm text-slate-500">Optional: briefly describe your interests or previous experience.</label>
                <span class="text-xs" :class="remaining <= 20 ? 'text-red-500 font-semibold' : 'text-slate-400'">
                    {{ remaining }} / {{ maxLength }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>