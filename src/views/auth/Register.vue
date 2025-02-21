<script lang="ts" setup>
import { ref } from "vue";
import UInput from "@/components/UInput.vue";
import GoogleIcon from "u-vue/icons/Google.vue";
import { useAuthStore } from '@/stores/auth.store';
import ULoading from 'u-vue/components/ULoading.vue';
import {useRouter} from 'vue-router';

const form = ref({
  name: "",
  email: "",
  password: "",
});

const auth = useAuthStore();
const router = useRouter();

const registerUser = async () => {
  await auth.authenticate(form.value, 'register').then(() => router.replace('/check-performance'));
};

</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 sm:p-6 p-2">
    <form
        @submit.prevent="registerUser"
        class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-300"
    >
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Register</h2>

      <UInput v-model="form.name" label="Full Name" placeholder="Enter your name"/>
      <UInput v-model="form.email" label="Email" inputType="email" placeholder="Enter your email"/>
      <UInput v-model="form.password" label="Password" inputType="password" placeholder="Enter your password"/>

      <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 mt-4"
      >
        <ULoading class="py-3" v-if="auth.loader"/>
        <span v-else>Register</span>
      </button>

      <div class="flex items-center my-4">
        <hr class="flex-grow border-gray-300"/>
        <span class="px-2 text-gray-500 text-sm">OR</span>
        <hr class="flex-grow border-gray-300"/>
      </div>

      <button
          type="button"
          @click="continueWithGoogle"
          class="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold transition-all duration-300 shadow-sm"
      >
        <GoogleIcon class="w-5 h-5 mr-2"/>
        Continue with Google
      </button>

      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">
          Already have an account?
          <a href="/login" class="text-blue-500 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </form>
  </div>
</template>
