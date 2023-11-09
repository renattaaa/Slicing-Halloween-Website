<script setup>
import category1 from "../assets/images/category/category1-img.png";
import category2 from "../assets/images/category/category2-img.png";
import category3 from "../assets/images/category/category3-img.png";

const categories = [
  {
    title: "Ghost",
    image: category1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
  {
    title: "Witch",
    image: category2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
  {
    title: "Pumpkin",
    image: category3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
];
</script>

<template>
  <section id="category" class="flex flex-col items-center py-28">
    <h2 class="my-10 text-6xl font-bold text-white">Category</h2>
    <div class="grid grid-cols-3 place-items-center">
      <div
        v-for="category of categories"
        :key="category.title"
        class="text-white grid place-items-center gap-5 text-center"
      >
        <div class="p-10">
          <img :src="category.image" class="w-full" alt="category1" />
        </div>
        <h3 class="text-3xl font-bold">{{ category.title }}</h3>
        <p class="w-3/4">{{ category.desc }}</p>
      </div>
    </div>
  </section>
</template>
