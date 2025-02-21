<script setup>
import {useMainStore} from "@/stores/main.store.js";

const mainStore = useMainStore()
</script>

<template>
  <div class="h-screen w-screen all-center">
    <div class="border-2 rounded border-gray-100 p-10 shadow-md text-center justify-center">
      <h1 class="text-2xl my-3 font-bold">Website Performance</h1>
      <p>Your website score is : <span class="font-bold text-xl">{{ mainStore.performance }}</span></p>
      <button
          type="submit"
          @click="mainStore.flag = true"
          class="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
      >
        Re-check
      </button>
    </div>
  </div>
</template>
