<script setup>
defineProps({
    course: Object
})

defineEmits(['close'])
</script>

<template>
    <div class="fixed inset-0 z-50 flex justify-center items-center bg-black/50" @click.self="$emit('close')">
        <div class="w-[50%] h-fit bg-white rounded-2xl p-6">
            <button @click="$emit('close')" class="float-right text-slate-500 cursor-pointer">✕</button>
            <div class="flex flex-col justify-start gap-2">
                <div class="flex justify-start items-center gap-3 text-xs">
                    <p class="text-indigo-600 font-bold bg-indigo-200 py-1 px-2 rounded-2xl">{{ course.code }}</p>
                    <p class="py-1 px-2 rounded-2xl font-bold" :class="course.color">{{ course.status }}</p>
                </div>

                <h2 class="font-bold">{{ course.title }}</h2>
                <p class="text-slate-500 text-sm">{{ course.desc }}</p>
                <div class="border border-slate-400 w-full"></div>

                <div class="flex flex-col ">
                    <div class="flex justify-between items-center">
                        <span class="text-slate-500 text-sm">Progress</span>
                        <span>{{ course.progress }}%</span>
                    </div>
                    <div class="w-full h-2.5 bg-slate-100 rounded-2xl">
                        <div class="h-full bg-indigo-600 rounded-2xl" :style="{ width: course.progress + '%' }"></div>
                    </div>
                </div>

                <div class="py-2">
                    <span>Upcoming lessions</span>
                    <div class="flex justify-start items-center" v-for="lession in course.upComing">
                        <div class="p-2 text-center bg-slate-100 w-10 h-10 rounded-full mr-2 mt-2">{{ lession.no }}</div>
                        <div class="text-sm">
                            <h3 class="font-medium text-slate-600">{{ lession.title }}</h3>
                            <span class="text-xs text-slate-500">{{ lession.duration }}</span>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center gap-3 w-full h-fit">
                    <button
                        class="w-3/4 px-4 py-3 rounded-2xl bg-indigo-600 text-white text-[15px] cursor-pointer whitespace-nowrap">Continue learning</button>
                    <button
                        class="w-1/4 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-[15px] cursor-pointer whitespace-nowrap">Save</button>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped></style>