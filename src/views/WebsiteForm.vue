<script setup>
import { useMainStore } from "@/stores/main.store.js";
import TrackPerformance from "@/components/TrackPerformance.vue";
import PerformanceResultCard from "@/components/PerformanceResultCard.vue";

const mainStore = useMainStore();
</script>

<template>
  <div>
    <transition name="fade" mode="out-in">
      <TrackPerformance v-if="mainStore.flag" key="track" />
      <PerformanceResultCard v-else key="result" />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
