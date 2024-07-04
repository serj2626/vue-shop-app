import { ref, computed, compile } from "vue";
import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", () => {
  const products = ref([]);

  const addProduct = (product) => {
    products.value.push(product);
  };

  const delProduct = (product) => {
    products.value = products.value.filter((item) => item.id !== product.id);
  };

  const incProduct = (product) => {
    products.value = products.value.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
  };

  const decProduct = (product) => {
    products.value = products.value.map((item) => {
      if (item.id === product.id) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });

    const countTotal = computed(() => {
      const count = 0;
      products.value.forEach((item) => {
        count += item.count;
      });
      return count;
    });

    const totalSum = computed(() => {
      return products.value.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      )
    });


    function showProduct(prod) {
      console.log(prod);
    };


    return {
      products,
      showProduct,
      addProduct,
      totalSum,
      delProduct,
      incProduct,
      decProduct,
      countTotal,
    };
  };
});
