<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Comment, User } from '~/models/types'
import VAvatar from '../Avatar/VAvatar.vue'
import VButtonPrimary from '../Buttons/VButtonPrimary.vue'
import VIconReply from '../Icons/VIconReply.vue'
import VInputText from '../Inputs/VInputText.vue'

const props = defineProps({
  user: {
    type: Object as () => User,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

const emits = defineEmits(['click', 'update:modelValue'])
</script>

<template>
  <!-- TODO: VOTING TOOL-->
  <div
    class="tw-flex tw-flex-col tw-bg-white tw-rounded-lg tw-p-4 tw-w-full tw-mb-4"
  >
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
      <VAvatar :pictureUrl="props.user.image.png">
        <span class="tw-text-gray-700 tw-font-medium tw-text-sm">{{
          props.user.username
        }}</span>
      </VAvatar>
      <VButtonPrimary @click="($event) => $emit('click', $event)">
        Reply
      </VButtonPrimary>
    </div>
    <VInputText
      :model-value="props.modelValue"
      @update:model-value="emits('update:modelValue', $event)"
    />
  </div>
</template>
