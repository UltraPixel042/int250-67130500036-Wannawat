<script setup></script>

<template>
    <div class="flex flex-col justify-between px-5 bg-linear-to-b from-white from-50% to-gray-200 to-50% lg:items-center">
        <!-- Input bar -->
        <div class="flex flex-col justify-between px-7 py-7 rounded bg-[#1E1A4D] md:flex-row lg:w-150">
            <input type="text" class="bg-white rounded py-3 mb-4 placeholder:text-orange-300 placeholder:pl-2 md:w-[73%] md:mb-0"
                placeholder="Shorten a link here">
            <button class="bg-[#02B7DC] text-white px-6 py-3 rounded cursor-pointer md:w-[25%]">Shorten It!</button>
        </div>
    </div>
    <!-- Copy buttons -->
    <!-- Button 1 -->
    <div class="bg-gray-200 p-5 lg:flex lg:flex-col lg:justify-between lg:items-center">
        <div
            class="flex flex-col justify-between items-center bg-white text-[14px] font-bold border border-none rounded p-5 md:flex-row lg:w-150">
            <p>https://frontendmentor.io</p>

            <div class="flex flex-col items-center justify-center md:flex-row">
                <p class="text-[#02B7DC] pr-4 mb-2 md:p-0 md:mr-4 md:mb-0">https://rel.ink/k4lKyk</p>
                <button
                    class="bg-[#02B7DC] text-white px-6 py-2 rounded text-[14px] cursor-pointer hover:bg-[#1E1A4D]">Copy</button>
            </div>
        </div>

        <!-- Button 2 -->`
        <div
            class="flex flex-col justify-between items-center bg-white text-[14px] font-bold border border-none rounded p-5 mb-6 md:flex-row lg:w-150">
            <p>https://twitter.com/frontendmentor</p>

            <div class="flex flex-col items-center justify-center md:flex-row">
                <p class="text-[#02B7DC] pr-4 mb-2 md:p-0 md:mr-4 md:m-0">https://rel.ink/gxOXp9</p>
                <button
                    class="bg-[#02B7DC] text-white px-6 py-2 rounded text-[14px] cursor-pointer hover:bg-[#1E1A4D]">Copy</button>
            </div>
        </div>

        <!-- Button 3 -->
        <div
            class="flex flex-col justify-between items-center bg-white text-[14px] font-bold border border-none rounded p-5 md:flex-row lg:w-150">
            <p>https://linkedin.com/frontend-mentor</p>
            <div class="flex flex-col items-center justify-center md:flex-row">

                <p class="text-[#02B7DC] pr-4 mb-2 md:p-0 md:mr-4 md:m-0">https://rel.ink/gob3X9</p>
                <button
                    class="bg-[#02B7DC] text-white px-6 py-2 rounded text-[14px] cursor-pointer hover:bg-[#1E1A4D]">Copy</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>