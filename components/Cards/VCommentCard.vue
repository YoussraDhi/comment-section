<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import type { Comment, User } from '~/models/types'
import VAvatar from '../Avatar/VAvatar.vue'
import VButtonIcon from '../Buttons/VButtonIcon.vue'
import VIconReply from '../Icons/VIconReply.vue'
import VIconDelete from '../Icons/VIconDelete.vue'
import VIconEdit from '../Icons/VIconEdit.vue'
import VReplyCard from './VReplyCard.vue'

const props = defineProps({
  comment: {
    type: Object as () => Comment,
    required: true,
  },
  user: {
    type: Object as () => User,
    required: true,
  },
  currentUser: {
    type: Object as () => User,
    required: true,
  },
  reply: {
    type: String,
    required: false,
    default: '',
  }, // replyContent
})

const showReplyBox = ref<boolean>(false)

const emits = defineEmits(['delete', 'edit', 'reply', 'update:modelValue'])

function toggleReplyBox() {
  showReplyBox.value = !showReplyBox.value
}

function reply(comment: Comment) {
  emits('reply', comment.id)
  toggleReplyBox()
}

const isCurrentUser = computed(
  () => props.currentUser.username === props.user.username
)
</script>

<template>
  <!-- TODO: VOTING TOOL-->
  <div>
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
          <VButtonIcon
            class="hover:tw-bg-indigo-500 tw-text-indigo-500"
            @click="toggleReplyBox"
          >
            <template #icon>
              <VIconReply />
            </template>
            <template #label> Reply </template>
          </VButtonIcon>
        </div>

        <div v-else>
          <VButtonIcon
            class="hover:tw-bg-red-500 tw-text-red-500"
            @click="$emit('delete', $event as MouseEvent)"
          >
            <template #icon>
              <VIconDelete />
            </template>
            <template #label> Delete </template>
          </VButtonIcon>
          <VButtonIcon
            class="hover:tw-bg-indigo-500 tw-text-indigo-500"
            @click="$emit('edit', $event as MouseEvent)"
          >
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
    <VReplyCard
      v-if="showReplyBox"
      :user="currentUser"
      :model-value="reply"
      @click="$event => $emit('reply', $event as MouseEvent)"
      @update:model-value="emits('update:modelValue', $event)"
    />
  </div>
</template>
