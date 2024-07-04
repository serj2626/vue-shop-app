<script setup>
import { defineProps } from "vue";
import { storeToRefs } from 'pinia';
import { useBasketStore } from "@/stores/basket";
const store = useBasketStore();
const { showProduct } = store;

defineProps({
  product: Object,
});
</script>
<template>
  <div class="rounded-lg bg-white shadow-secondary-1 h-[450px] 
    w-96 dark:bg-surface-dark flex flex-col items-center card my-3 relative">
    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-twe-ripple-init data-twe-ripple-color="light">
      <img class="rounded-t-lg h-auto w-64 my-2" :src="product.image" alt="" />
    </div>
    <div class="p-6 text-surface dark:text-white">
      <h5 class="mb-2 text-xl font-medium leading-tight">
        {{ product.title }}
      </h5>
      <p class="mb-4 text-base">
        {{ product.price }} &#8381;
      </p>
      <button 
      @click="store.addProduct(product)"
      class="absolute bottom-4 right-4 py-2 px-3
         bg-pink-500 rounded-md text-white text-xl
         hover:transform hover:scale-105 duration-300">
        В корзину
      </button>
    </div>
  </div>
</template>
