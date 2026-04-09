<script setup>
const props = defineProps({
    modelValue: { type: Object, default: () => ({}) },
    errors: { type: Object, default: () => ({}) },
    submitted: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const inputDetails = [
    { label: 'Full Name',   field: 'fullName',  placeholder: 'Enter your full name',    type: 'text' },
    { label: 'Student ID',  field: 'studentId', placeholder: 'e.g. 6601234567',         type: 'text' },
    { label: 'Email',       field: 'email',     placeholder: 'yourname@example.com',    type: 'email' },
    { label: 'Password',    field: 'password',  placeholder: 'At least 8 characters',   type: 'password' },
]

function onInput(field, value) {
    emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<template>
    <div class="grid grid-cols-2 pt-6 md:pt-8 md:px-8 text-slate-600">
        <div v-for="item in inputDetails" :key="item.field">
            <div class="flex flex-col mb-4">
                <label class="flex pb-2">
                    <span class="text-sm font-bold">{{ item.label }}</span>&nbsp;
                    <span class="text-red-500 align-super text-xs">*</span>
                </label>
                <input
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :value="modelValue[item.field]"
                    @input="onInput(item.field, $event.target.value)"
                    class="px-4 py-2 border rounded-lg w-[95%] transition"
                    :class="submitted && errors[item.field]
                        ? 'border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300'
                        : 'border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300'"
                />
                <p v-if="submitted && errors[item.field]" class="mt-1 text-xs text-red-500">
                    {{ errors[item.field] }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>