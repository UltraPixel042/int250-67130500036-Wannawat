<script setup></script>

<template>
    <section class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-1">6. Responsive Layout Example</h2>
        <p class="text-sm text-gray-500 mb-4">A reusable section layout with content on the left and summary panel on the right.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Main Content -->
          <div class="md:col-span-2 border border-gray-200 rounded-xl p-5">
            <h3 class="text-base font-bold text-gray-900 mb-2">Main Content Area</h3>
            <p class="text-sm text-gray-500">
              This area can be used for dashboard content, a feature section, course details, or product descriptions.
              It demonstrates a simple reusable container pattern with consistent padding, rounded corners, and spacing.
            </p>
          </div>
          <!-- Summary Panel -->
          <div class="bg-blue-600 rounded-xl p-5 text-white flex flex-col justify-between">
            <div>
              <h3 class="text-base font-bold mb-2">Summary Panel</h3>
              <p class="text-sm text-blue-100">
                This panel can be reused for quick stats, announcements, or call-to-action content.
              </p>
            </div>
            <button class="mt-4 border border-white text-white text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-blue-700 w-fit">
              Learn More
            </button>
          </div>
        </div>
      </section>
</template>

<style scoped></style>