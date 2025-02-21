<script setup>
import {ref} from "vue";
import UInput from "@/components/UInput.vue";
import CellPhone from "u-vue/icons/CellPhone.vue";
import {useMainStore} from "@/stores/main.store.js";
import ULoading from 'u-vue/components/ULoading.vue';

const form = ref({
  websiteLink: "",
  platform: "website",
});

const mainStore = useMainStore()

</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 sm:p-6 p-2">
    <div class="w-full max-w-md bg-white/30 backdrop-blur-lg p-6 shadow-2xl rounded-2xl border border-white/40">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Add Website</h2>

      <form @submit.prevent="mainStore.checkPerformance(form)">
        <UInput v-model="form.websiteLink" label="Website Link" inputType="url" placeholder="Enter website link"/>

        <div class="mb-6">
          <label for="platform" class="block text-start text-gray-700 font-medium mb-1">Platform</label>
          <div class="relative flex items-center bg-white/40 border-b border-gray-300 p-2">
            <CellPhone class="text-gray-500 w-5 h-5 mr-2"/>
            <select
                v-model="form.platform"
                id="platform"
                class="w-full bg-transparent text-gray-800 focus:outline-none transition-all"
            >
              <option value="desktop" class="text-gray-900">Website</option>
              <option value="mobile" class="text-gray-900">Mobile App</option>
            </select>
          </div>
        </div>

        <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
        >
          <ULoading v-if="mainStore.loader" class="py-3"></ULoading>
          <span v-else> Submit</span>
        </button>
      </form>
    </div>
  </div>
</template>
