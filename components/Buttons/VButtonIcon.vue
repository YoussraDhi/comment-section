<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import VButtonWrapper from './VButtonWrapper.vue'

defineEmits(['click'])
</script>

<template>
  <VButtonWrapper type="ghost" @click="($event) => $emit('click', $event)">
    <slot name="icon"></slot>
    <slot name="label"></slot>
  </VButtonWrapper>
</template>
