<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import VButtonWrapper from './VButtonWrapper.vue'

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'primary',
  },
})

defineEmits(['click'])
</script>

<template>
  <VButtonWrapper
    :type="props.type"
    @click="($event) => $emit('click', $event)"
  >
    <slot></slot>
  </VButtonWrapper>
</template>
