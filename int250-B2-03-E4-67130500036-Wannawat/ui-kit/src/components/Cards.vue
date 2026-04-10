<script setup></script>
<template>
    <section class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-1">5. Cards</h2>
        <p class="text-sm text-gray-500 mb-4">Responsive card layout for reusable content blocks such as event, profile, or product cards.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Card 1 -->
          <div class="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">New</span>
                <span class="text-xs text-gray-400">Reusable</span>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-1">Basic Card</h3>
              <p class="text-sm text-gray-500">A simple reusable card for general content blocks in a dashboard or landing page.</p>
            </div>
            <button class="mt-4 border border-gray-300 text-gray-700 text-xs font-medium px-4 py-1.5 rounded-md hover:bg-gray-50 w-fit">
              View Details
            </button>
          </div>

          <!-- Card 2 -->
          <div class="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">Profile</span>
                <span class="text-xs text-gray-400">Reusable</span>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-1">Student Profile Card</h3>
              <p class="text-sm text-gray-500">A profile summary card showing student status, program, and quick information.</p>
            </div>
            <button class="mt-4 border border-gray-300 text-gray-700 text-xs font-medium px-4 py-1.5 rounded-md hover:bg-gray-50 w-fit">
              View Details
            </button>
          </div>

          <!-- Card 3 -->
          <div class="border border-gray-200 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">Event</span>
                <span class="text-xs text-gray-400">Reusable</span>
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-1">Event Card</h3>
              <p class="text-sm text-gray-500">A reusable event component for workshops, seminars, or hackathon activities.</p>
            </div>
            <button class="mt-4 border border-gray-300 text-gray-700 text-xs font-medium px-4 py-1.5 rounded-md hover:bg-gray-50 w-fit">
              View Details
            </button>
          </div>
        </div>
      </section>
</template>

<style scoped></style>