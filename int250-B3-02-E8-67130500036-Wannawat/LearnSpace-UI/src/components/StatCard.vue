<script setup></script>

<template>
    <section class="px-5 py-10 bg-[#f1f3f5]">
        <div class="bg-indigo-600 text-white p-8 rounded-2xl">
            <p class="text-[15px]">Welcome back, Student</p>
            <h1 class="text-4xl font-bold py-4">Continue your learning journey today.</h1>
            <p class="text-[15px]">Track your courses, review assignments, and monitor your learning progress in one
                place.</p>
            <button class="px-4 py-3 rounded-2xl mt-6 bg-white text-indigo-600 text-[15px] cursor-pointer">View My Courses</button>
        </div>

        <div class="grid grid-cols-4 gap-5 py-12">
            <div class="p-6 border border-slate-200 rounded-2xl shadow-sm">
                <p class="text-slate-500 text-sm">Active Courses</p>
                <h3 class="font-bold text-3xl leading-relaxed">3</h3>
            </div>
            <div class="p-6 border border-slate-200 rounded-2xl shadow-sm">
                <p class="text-slate-500 text-sm">Pending Assignments</p>
                <h3 class="font-bold text-3xl leading-relaxed">2</h3>
            </div>
            <div class="p-6 border border-slate-200 rounded-2xl shadow-sm">
                <p class="text-slate-500 text-sm">Completed Tasks</p>
                <h3 class="font-bold text-3xl leading-relaxed">8</h3>
            </div>
            <div class="p-6 border border-slate-200 rounded-2xl shadow-sm">
                <p class="text-slate-500 text-sm">Overall Progress</p>
                <h3 class="font-bold text-3xl leading-relaxed">72%</h3>
            </div>
        </div>
    </section>
</template>

<style scoped></style>