<script setup>
import { useBasketStore } from '@/stores/basket';
import { storeToRefs } from 'pinia';

const store = useBasketStore();
const {countTotal} = storeToRefs(store);
console.log(countTotal);
</script>

<template>
  <div class="w-1/4 absolute right-0 top-22 shadow-2xl h-screen
   bg-slate-100 z-10">
    <div class="flex flex-col items-center mt-24">
      <img src="@/assets/basket-red.png" class="mx-auto my-3" width="120" height="auto" alt="">
      <h1 class="text-2xl text-center font-bold text-slate-700 uppercase text">Ваша корзина пуста</h1>
    </div>

  </div>
</template>

<style scoped>
  
</style>