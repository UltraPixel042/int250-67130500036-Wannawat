<script setup></script>

<template>
    <section class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-1">3. Alerts</h2>
        <p class="text-sm text-gray-500 mb-4">Reusable feedback messages for success, warning, and error states.</p>
        <div class="space-y-3">
          <div class="bg-green-50 border border-green-200 rounded-lg px-4 py-3">
            <p class="text-sm font-bold text-green-800">Success Alert</p>
            <p class="text-sm text-green-700">Your profile has been updated successfully.</p>
          </div>
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3">
            <p class="text-sm font-bold text-yellow-800">Warning Alert</p>
            <p class="text-sm text-yellow-700">Please review the form before submitting.</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <p class="text-sm font-bold text-red-800">Error Alert</p>
            <p class="text-sm text-red-700">Something went wrong. Please try again later.</p>
          </div>
        </div>
      </section>
</template>

<style scoped></style>