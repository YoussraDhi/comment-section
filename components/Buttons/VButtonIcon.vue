<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import VButtonWrapper from './VButtonWrapper.vue'

defineEmits(['click'])
</script>

<template>
  <VButtonWrapper type="ghost" @click="($event) => $emit('click', $event)">
    <div class="tw-inline-flex tw-items-center tw-justify-center tw-space-x-2">
      <slot name="icon"></slot>
      <slot name="label"></slot>
    </div>
  </VButtonWrapper>
</template>
