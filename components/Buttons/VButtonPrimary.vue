<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import VButtonWrapper from './VButtonWrapper.vue'

defineEmits(['click'])
</script>

<template>
  <VButtonWrapper type="primary" @click="($event) => $emit('click', $event)">
    <slot></slot>
  </VButtonWrapper>
</template>
