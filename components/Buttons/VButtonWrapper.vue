<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'

type Props = {
  isDisabled?: boolean
  type: string
}

defineEmits(['click'])

const props = defineProps<Props>()

const getBackground = computed(() => {
  switch (props.type) {
    case 'primary':
      return 'tw-bg-indigo-600 tw-hover:bg-indigo-700'
    case 'secondary':
      return 'tw-bg-grey-500 tw-hover:bg-grey-700'
    case 'danger':
      return 'tw-bg-red-500 tw-hover:bg-red-700'
    default:
      return 'tw-bg-indigo-600 tw-hover:bg-indigo-700'
  }
})
</script>

<template>
  <button
    :class="`${getBackground} tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded`"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
