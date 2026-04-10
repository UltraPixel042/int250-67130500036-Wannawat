<script setup></script>
<template>
     <section class="bg-white rounded-2xl p-6 shadow-sm">
        <h2 class="text-lg font-bold text-gray-900 mb-1">4. Form Controls</h2>
        <p class="text-sm text-gray-500 mb-4">Consistent form patterns with labels, helper text, and validation style.</p>
        <form class="space-y-4">
          <!-- Full Name + Email -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p class="text-xs text-gray-400 mt-1">Use a clear and complete student name.</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p class="text-xs text-gray-400 mt-1">Example: student@mail.kmutt.ac.th</p>
            </div>
          </div>

          <!-- Role -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Role</label>
            <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select your role</option>
              <option>Student</option>
              <option>Teacher</option>
              <option>Admin</option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Write your message here"
              rows="4"
              class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <p class="text-sm text-red-500">This is an example of validation/helper text styling.</p>

          <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2 rounded-md">
            Submit Form
          </button>
        </form>
      </section>
</template>

<style scoped></style>