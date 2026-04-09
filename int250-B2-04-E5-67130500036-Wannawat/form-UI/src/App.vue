<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "./Components/BaseInput.vue";
import BaseSelect from "./Components/BaseSelect.vue";
import BaseTextarea from "./Components/BaseTextarea.vue";
import BaseRadioGroup from "./Components/BaseRadioGroup.vue";
import BaseCheckbox from "./Components/BaseCheckbox.vue";

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
});

const submitted = ref(false);
const showModal = ref(false);

function handleReset() {
  form.fullName = "";
  form.studentId = "";
  form.email = "";
  form.password = "";
  form.program = "";
  form.yearLevel = "";
  form.bio = "";
  form.track = "";
  form.agree = false;
  submitted.value = false;
}

const programOptions = [
  { label: "Information Technology", value: "IT" },
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
];

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
];

const errors = computed(() => {
  const e = {};

  if (!form.fullName.trim()) e.fullName = "Full name is required.";

  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required.";
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 11 digits.";
  }

  if (!form.email.trim()) {
    e.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address.";
  }

  if (!form.password.trim()) {
    e.password = "Password is required.";
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters.";
  }

  if (!form.program) e.program = "Please select your program.";
  if (!form.yearLevel) e.yearLevel = "Please select your year level.";
  if (!form.track) e.track = "Please choose a workshop track.";
  if (!form.agree) e.agree = "You must accept the terms before submitting.";

  return e;
});

const isFormValid = computed(() => Object.keys(errors.value).length === 0);

function handleSubmit() {
  submitted.value = true;
  if (!isFormValid.value) return;
  showModal.value = true;
  handleReset();
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4">
    <div class="mx-auto max-w-4xl">
      <div class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">

        <!-- Header -->
        <div class="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <p class="text-sm font-medium text-blue-600">Hands-on Lab</p>
          <h1 class="mt-1 text-2xl font-bold text-slate-900">
            Student Workshop Registration Form
          </h1>
          <p class="mt-2 text-sm text-slate-600">
            Practice styling form controls, focus states, and validation feedback with Vue.js and Tailwind CSS
          </p>
        </div>

        <!-- Form Fields -->
        <form @submit.prevent="handleSubmit" class="pb-8">

          <!-- Text inputs -->
          <BaseInput
            v-model="form"
            :errors="errors"
            :submitted="submitted"
          />

          <!-- Selects -->
          <div class="grid grid-cols-2 gap-0 md:px-8 mt-2">
            <BaseSelect
              title="Program / Major"
              :options="programOptions"
              :showValue="true"
              v-model="form.program"
              :error="errors.program"
              :submitted="submitted"
            />
            <BaseSelect
              title="Workshop Track"
              :options="trackOptions"
              v-model="form.track"
              :error="errors.track"
              :submitted="submitted"
            />
          </div>

          <!-- Year Level -->
          <BaseRadioGroup
            v-model="form.yearLevel"
            :error="errors.yearLevel"
            :submitted="submitted"
          />

          <!-- Bio -->
          <BaseTextarea
            v-model="form.bio"
          />

          <!-- Agree checkbox -->
          <BaseCheckbox
            v-model="form.agree"
            :error="errors.agree"
            :submitted="submitted"
          />

          <!-- Actions -->
          <div class="mx-8 mt-6 flex flex-col items-center justify-start gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <p class="text-sm text-slate-500">
              <span class="text-sm text-slate-500">Tip:</span>
              Try submitting with empty fields to test validation feedback.
            </p>
            <button
              type="button"
              @click="handleReset"
              class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 active:scale-[0.99] cursor-pointer"
            >Reset</button>
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99] cursor-pointer"
            >Submit Registration</button>
          </div>

        </form>
      </div>
    </div>
  </div>

  <!-- Success Modal -->
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 text-center">
      <div class="flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mx-auto mb-4">
        <svg class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 class="text-xl font-bold text-slate-900 mb-2">Registration Submitted!</h2>
      <p class="text-sm text-slate-500 mb-6">Your registration has been received. We'll see you at the workshop!</p>
      <button @click="showModal = false" class="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">Done</button>
    </div>
  </div>
</template>

<style scoped></style>
