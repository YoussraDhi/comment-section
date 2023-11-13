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
      return 'tw-bg-indigo-600 hover:tw-bg-indigo-700  tw-text-white'
    case 'secondary':
      return 'tw-bg-grey-500 hover:tw-bg-grey-700  tw-text-white'
    case 'danger':
      return 'tw-bg-red-500 hover:tw-bg-red-700  tw-text-white'
    case 'ghost':
      return 'tw-bg-transparent hover:tw-text-white'
    default:
      return 'tw-bg-indigo-600 hover:tw-bg-indigo-700'
  }
})
</script>

<template>
  <button
    :class="`${getBackground}  tw-font-bold tw-py-2 tw-px-4 tw-rounded`"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
