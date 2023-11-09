<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

type Props = {
  isDisabled?: boolean
}

defineEmits(['click'])

defineProps<Props>()
</script>

<template>
  <button class="tw" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>
