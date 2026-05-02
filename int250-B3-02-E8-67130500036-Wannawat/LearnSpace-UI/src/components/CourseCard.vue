<script setup>
import { ref } from 'vue'
import { mockCourses } from '@/data/courses';
import CourseModal from './CourseModal.vue';
import ToastNotification from './ToastNotification.vue';

// Course Dialog
const courses = ref(mockCourses)

const selectedCourse = ref(null)

function openDialog(course) {
    selectedCourse.value = course;
}

function closeDialog() {
    selectedCourse.value = null;
}

// Toast
const toast = ref({ show: false, message: "", type: "success" })

function showToast(message, type = "success") {
    toast.value = { show: true, message, type }
    setTimeout(() => { toast.value.show = false }, 3000)
}


</script>

<template>
    <section id="myCourses" class="px-5 pb-10 bg-[#f1f3f5]">
        <div class="flex flex-col py-5">
            <h1 class="text-2xl font-bold">My Courses</h1>
            <p class="text-slate-500 text-sm">Review your course progress and assignment status.</p>
        </div>

        <div class="grid grid-cols-2 gap-6">
            <div class="p-5 border-slate-200 shadow-sm rounded-2xl" v-for="course in courses" :key="course.id">
                <div class="flex justify-between items-center text-xs">
                    <p class="text-indigo-600 font-bold bg-indigo-200 py-1 px-2 rounded-2xl">{{ course.code }}</p>
                    <p class="py-1 px-2 rounded-2xl font-bold" :class="course.color">{{ course.status }}</p>
                </div>

                <h2 class="pt-3 font-bold">{{ course.title }}</h2>
                <p class="text-slate-500 text-sm py-3">{{ course.desc }}</p>

                <div class="flex flex-col pt-3">
                    <div class="flex justify-between items-center">
                        <span class="text-slate-500 text-sm">Progress</span>
                        <span>{{ course.progress }}%</span>
                    </div>

                    <div class="w-full h-2.5 bg-slate-100 rounded-2xl">
                        <div class="h-full bg-indigo-600 rounded-2xl" :style="{ width: course.progress + '%' }"></div>
                    </div>

                </div>

                <div class="flex justify-between items-center gap-3 w-fit h-fit mt-6">
                    <button
                        class="px-4 py-3 rounded-2xl bg-indigo-600 text-white text-[15px] cursor-pointer whitespace-nowrap"
                        @click="openDialog(course)">View Course Details</button>
                    <button
                        class="px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-[15px] cursor-pointer whitespace-nowrap"
                        @click="showToast('Success', 'success')">Submit Assignment</button>
                </div>

            </div>
        </div>
    </section>

    <CourseModal v-if="selectedCourse" :course="selectedCourse" @close="closeDialog" />
    <ToastNotification v-if="toast.show" :message="toast.message" :type="toast.type"/>

</template>

<style scoped></style>