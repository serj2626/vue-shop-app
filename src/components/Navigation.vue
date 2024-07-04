<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['openMenu']);
</script>

<template>
  <div class="bg-pink-300 shadow-md py-5 m-0">
    <div class="flex justify-around items-center">
      <h1 class="text-3xl font-bold text-slate-700
      uppercase text">Vue Shop</h1>
      <button 
      @click="emit('openMenu')"
      class="bg-white px-4 py-2 text-xl rounded ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.text{
  color: white;
  text-shadow: 2px 2px 6px #000000;
}

button{
  transition-duration: 0.4s;
  transition-timing-function: ease;
}

button:hover{
  transform: scale(1.1);
  color: rgb(237, 145, 160);
}
</style>
