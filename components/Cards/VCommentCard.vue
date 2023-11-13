<script setup lang="ts">
import { defineProps } from 'vue'
import type { Comment, User } from '~/models/types'
import VAvatar from '../Avatar/VAvatar.vue'
import VButtonIcon from '../Buttons/VButtonIcon.vue'
import VIconReply from '../Icons/VIconReply.vue'
import VIconDelete from '../Icons/VIconDelete.vue'
import VIconEdit from '../Icons/VIconEdit.vue'

const props = defineProps({
  comment: {
    type: Object as () => Comment,
    required: true,
  },
  user: {
    type: Object as () => User,
    required: true,
  },
  isCurrentUser: {
    type: Boolean,
    required: true,
  },
})
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
        <span class="tw-text-gray-500 tw-text-xs">{{
          props.comment.createdAt
        }}</span>
      </VAvatar>
      <div v-if="!isCurrentUser">
        <VButtonIcon class="hover:tw-bg-indigo-500 tw-text-indigo-500">
          <template #icon>
            <VIconReply />
          </template>
          <template #label> Reply </template>
        </VButtonIcon>
      </div>

      <div v-else>
        <VButtonIcon class="hover:tw-bg-red-500 tw-text-red-500">
          <template #icon>
            <VIconDelete />
          </template>
          <template #label> Delete </template>
        </VButtonIcon>
        <VButtonIcon class="hover:tw-bg-indigo-500 tw-text-indigo-500">
          <template #icon>
            <VIconEdit />
          </template>
          <template #label> Edit </template>
        </VButtonIcon>
      </div>
    </div>
    <div
      class="tw-text-gray-800 tw-text-sm tw-leading-5 tw-whitespace-pre-wrap"
    >
      {{ props.comment.content }}
    </div>
  </div>
</template>
