<script setup>
import FAQItem from './FAQItem.vue';

const faqData = [
    {id: 1, question: "What is Bookmark?", answer: "A Bookmark is a shortcut that saves a specific website's address so you can quickly return to it later without having to remember the URL."},
    {id: 2, question: "How can I request a new browser?", answer: "To request support for a new browser, you should send an email to the support team as mentioned in the intro text. Usually, providing the name of the browser and your operating system helps the developers."},
    {id: 3, question: "Is that a mobile app?", answer: "Based on the context, this sounds like a browser extension or a web-based service rather than a standalone mobile app. Check the official download page to see if an iOS or Android version is available."},
    {id: 4, question: "What about other Chromium browsers?", answer: "Most services that work on Chrome will also work on other Chromium-based browsers like Brave, Microsoft Edge, Opera, and Vivaldi. You can usually install the extension directly from the Chrome Web Store."},
]

</script>

<template>
    <section class="dark:bg-[#1c2431] text-[#1c2431] dark:text-white">
        <div class="flex flex-col justify-center items-center text-center p-6">
            <div class="flex flex-col justify-center items-center text-sm">
                <h2 class="text-xl font-bold">Frequently Asked Questions</h2>
                <p class="py-4 md:w-[60%]">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
                <FAQItem 
                    v-for="item in faqData"
                    :key="item.id"
                    :question="item.question"
                    :answer="item.answer"
                    class="w-full md:w-[50%]"
                />
        </div>
    </section>
</template>

<style scoped></style>