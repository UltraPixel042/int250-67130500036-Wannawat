<script setup>
import Header from './components/Header.vue';
import Buttons from './components/Buttons.vue';
import Badges from './components/Badges.vue';
import Alerts from './components/Alerts.vue';
import FormControl from './components/FormControl.vue';
import Cards from './components/Cards.vue';
import Responsive from './components/Responsive.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100 font-sans">

    <Header />

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-6">

      <Buttons />
      <Badges />
      <Alerts />
      <FormControl />
      <Cards/>
      <Responsive />

    </main>
  </div>
</template>

<style scoped></style>
