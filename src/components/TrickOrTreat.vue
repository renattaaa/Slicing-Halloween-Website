<script setup>
import tots from "../data/TrickOrTreat";
</script>

<template>
  <section id="trick-or-treat" class="flex flex-col items-center py-28">
    <h2 class="mt-10 mb-28 text-6xl font-bold text-white">Trick Or Treat</h2>
    <div class="grid grid-cols-3 gap-10">
        <div 
        v-for="(tot, i) of tots" 
        :key="tot.title" 
        class="grid place-items-center text-center gap-5 p-8 text-white bg-gradient-to-b rounded-lg"
        :class="i == 1 ? 
        'from-primary-200/50 to-primary-200/30 -translate-y-10' : 
        'from-primary-200/20 to-primary-200/10'">
            <div>
                <img :src="tot.image" alt="">
            </div>
            <h3 class="text-4xl font-bold">{{ tot.title }}</h3>
            <p class="w-[90%]">{{ tot.desc }}</p>
        </div>
    </div>
  </section>
</template>
