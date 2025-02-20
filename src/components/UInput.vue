<script setup>
import {defineProps, defineEmits, computed} from "vue";
import AccountIcon from "u-vue/icons/Account.vue";
import EmailIcon from "u-vue/icons/Email.vue";
import LockIcon from "u-vue/icons/Lock.vue";
import Web from "u-vue/icons/Web.vue";


const props = defineProps({
  label: {type: String, required: true},
  inputType: {type: String, default: "text"},
  placeholder: {type: String, default: ""},
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const selectedIcon = computed(() => {
  switch (props.inputType) {
    case "email":
      return EmailIcon;
    case "password":
      return LockIcon;
    case "url":
      return Web;
    default:
      return AccountIcon;
  }
});
</script>

<template>
  <div class="my-5 flex flex-col">
    <label :for="label" class="text-start text-gray-700 font-medium mb-1">{{ label }}</label>
    <div class="flex items-center border-b border-gray-300 focus-within:border-blue-400 transition">
      <component :is="selectedIcon" class="text-gray-500 w-5 h-5 mr-2"/>
      <input
          :id="label"
          :type="inputType"
          :placeholder="placeholder"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          class="w-full px-3 py-2 focus:outline-none caret-blue-500"
      />
    </div>
  </div>
</template>
