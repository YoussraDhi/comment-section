<script setup lang="ts">
import { defineProps } from 'vue'
import type { Comment, User } from '~/models/types'
import VAvatar from '../Avatar/VAvatar.vue'
import VButtonIcon from '../Buttons/VButtonIcon.vue'
import VIconReply from '../Icons/VIconReply.vue'

const props = defineProps({
  comment: {
    type: Object as () => Comment,
    required: true,
  },
  user: {
    type: Object as () => User,
    required: true,
  },
})
</script>

<template>
  <!-- TODO: VOTING TOOL-->
  <div class="tw-flex tw-flex-col tw-bg-white tw-rounded-lg tw-p-4 tw-w-full">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
      <VAvatar :pictureUrl="props.user.image.png">
        <span class="tw-text-gray-700 tw-font-medium tw-text-sm">{{
          props.user.username
        }}</span>
        <span class="tw-text-gray-500 tw-text-xs">{{
          props.comment.createdAt
        }}</span>
      </VAvatar>
      <VButtonIcon>
        <template #icon>
          <VIconReply />
        </template>
        <template #label> Reply </template>
      </VButtonIcon>
    </div>
    <div
      class="tw-text-gray-800 tw-text-sm tw-leading-5 tw-whitespace-pre-wrap"
    >
      {{ props.comment.content }}
    </div>
  </div>
</template>
