<script setup></script>

<template>
    <section class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-1">1. Buttons</h2>
        <p class="text-sm text-gray-500 mb-4">Reusable action styles for primary, secondary, outline, and disabled states.</p>
        <div class="flex flex-wrap gap-3">
          <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-md cursor-pointer">
            Primary Button
          </button>
          <button class="bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2 rounded-md cursor-pointer">
            Secondary Button
          </button>
          <button class="border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold px-5 py-2 rounded-md cursor-pointer bg-white">
            Outline Button
          </button>
          <button class="bg-gray-200 text-gray-400 text-sm font-semibold px-5 py-2 rounded-md cursor-pointer cursor-not-allowed" disabled>
            Disabled Button
          </button>
        </div>
      </section>
</template>

<style scoped></style>