<script setup>

const testimonial = [
    { id: 1, name: "Satish Patel", position: "Founder & CEO. Huddle", comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", profile: "/images-fylo/profile-1.jpg" },
    { id: 2, name: "Bruce McKenzie", position: "Founder & CEO. Huddle", comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", profile: "/images-fylo/profile-2.jpg" },
    { id: 3, name: "Eva Boyd", position: "Founder & CEO. Huddle", comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", profile: "/images-fylo/profile-3.jpg" },
]

</script>

<template>
    <section class="bg-[#f9fafb] text-[#1c2431] dark:bg-[#1c2431] dark:text-white p-6 md:p-12">
        <img src="/images-fylo/bg-quotes.png" alt="Quotes Pic">
        <div class="flex flex-col justify-center items-start md:flex-row gap-6 md:gap-10">
            <div v-for="item in testimonial" class="bg-[#f3f4f6] dark:bg-[#202a3c] p-5 md:h-full">
                <p>{{ item.comment }}</p>
                <div class="flex items-center pt-4">
                    <img :src="item.profile" alt="Profile Pic" class="size-8 rounded-full">
                    <div class="flex flex-col pl-3">
                        <span class="text-sm font-bold">{{ item.name }}</span>
                        <span class="text-sm">{{ item.position }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>