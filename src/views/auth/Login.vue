<script lang="ts" setup>
import {ref, onMounted} from "vue";
import UInput from "@/components/UInput.vue";
import GoogleIcon from "u-vue/icons/Google.vue";
import {useAuthStore} from '@/stores/auth.store';
import ULoading from 'u-vue/components/ULoading.vue'
import {useRouter} from 'vue-router';

const form = ref({
  email: "",
  password: "",
});

const auth = useAuthStore()
const router = useRouter();

const loginUser = async () => {
  await auth.authenticate(form.value, 'login').then(() => router.replace('/check-performance'));
};

</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 sm:p-6 p-2">
    <form @submit.prevent="loginUser" class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Login</h2>

      <UInput v-model="form.email" label="Email" inputType="email" placeholder="Enter your email"/>
      <UInput v-model="form.password" label="Password" inputType="password" placeholder="Enter your password"/>

      <div class="text-right mb-4">
        <a href="/forgot-password" class="text-sm text-blue-500 font-semibold hover:underline">Forgot Password?</a>
      </div>

      <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
      >
        <ULoading class="py-3" v-if="auth.loader"/>
        <span v-else>Login</span>
      </button>

      <div class="flex items-center my-4">
        <hr class="flex-grow border-gray-300"/>
        <span class="px-2 text-gray-500 text-sm">OR</span>
        <hr class="flex-grow border-gray-300"/>
      </div>

      <button
          type="button"
          @click="auth.googleLogin"
          class="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold transition-all duration-300 shadow-sm"
      >
        <GoogleIcon class="w-5 h-5 mr-2"/>
        Continue with Google
      </button>

      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">
          Don't have an account?
          <a href="/register" class="text-blue-500 font-semibold hover:underline">Register</a>
        </p>
      </div>
    </form>
  </div>
</template>
