<script setup lang="ts">
import VButtonPrimary from '~/components/Buttons/VButtonPrimary.vue'
import VButtonSecondary from '~/components/Buttons/VButtonSecondary.vue'
import { defineEmits, defineProps } from 'vue'

type Props = {
  title: string
  message: string
  confirmLabel: string
  cancelLabel: string
}

const props = defineProps<Props>()

defineEmits(['confirm', 'cancel', 'blur'])
</script>

<template>
  <teleport to="body">
    <div
      class="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-gray-900 tw-bg-opacity-50"
    >
      <div
        class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-max-w-md tw-w-full tw-p-6"
      >
        <div class="tw-mb-4">
          <h2 class="tw-text-lg tw-font-medium tw-text-gray-900 tw-leading-6">
            {{ props.title }}
          </h2>
          <p class="tw-mt-1 tw-text-sm tw-text-gray-500">{{ props.message }}</p>
        </div>
        <div class="tw-flex tw-justify-end">
          <VButtonSecondary @click="$emit('cancel')">{{
            props.cancelLabel
          }}</VButtonSecondary>
          <VButtonPrimary @click="$emit('confirm')">{{
            props.confirmLabel
          }}</VButtonPrimary>
        </div>
      </div>
    </div>
  </teleport>
</template>
