<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

type Props = {
  pictureUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="tw-inline-flex tw-items-center tw-justify-center tw-h-10 tw-w-10 tw-rounded-full tw-border tw-border-indigo-700"
  >
    <img :src="props.pictureUrl" :class="'tw-rounded-full'" />
  </div>
  <slot></slot>
</template>
