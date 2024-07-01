<script setup>
import { ref, onMounted } from "vue";
import Navigation from "./components/Navigation.vue";
import axios from "axios";
import Card from "./components/Card.vue";
import ProductsNavigation from "./components/ProductsNavigation.vue";
import HiddenMenu from "./components/HiddenMenu.vue";

const showCards = ref(false);

const products = ref([]);

const getProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;
    products.value = data;
  } catch {
    console.log(err);
  }
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <header>
    <Navigation @openMenu="showCards = !showCards" />
    <HiddenMenu v-if="showCards" />
  </header>
  <main>
    <div class="grid grid-cols-4 my-10 gap-4 w-10/12 mx-auto">
      <div v-for="product in products" :key="product.id">
        <Card :product="product" />
      </div>
    </div>
    <ProductsNavigation />
  </main>
</template>

<style scoped></style>
