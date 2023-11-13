<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type Props = {
  label?: string
  value: string
}

const props = defineProps<Props>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label
      for="input-text"
      class="tw-block tw-text-gray-700 tw-font-bold tw-mb-2"
      >{{ props.label }}</label
    >
    <input
      id="input-text"
      name="input-text"
      class="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight tw-focus:tw-outline-none tw-focus:tw-shadow-outline tw-h-10"
      modelValue="props.value"
      @input="
        $emit(
          'update:modelValue',
          ($event.target as HTMLTextAreaElement)?.value || ''
        )
      "
    />
  </div>
</template>
