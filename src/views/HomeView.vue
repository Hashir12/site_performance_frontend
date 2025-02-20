<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="max-w-2xl w-full bg-white shadow-lg rounded-xl p-6 border border-gray-200 text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Web Performance Checker</h1>
      <p class="text-gray-600 mb-6">
        Analyze your website's performance and optimize it for better user experience. Enter your website link and
        platform to get started.
      </p>

      <div class="flex justify-center space-x-4 mb-6">
        <RouterLink to="/login"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">Login
        </RouterLink>
        <RouterLink to="/register"
                    class="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
          Register
        </RouterLink>
      </div>

      <RouterLink to="/check-performance"
                  class="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">
        Check Website Performance
      </RouterLink>
    </div>
  </div>
</template>
