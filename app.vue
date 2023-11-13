<script setup lang="ts">
import VCommentCard from './components/Cards/VCommentCard.vue'
import VReplyCard from './components/Cards/VReplyCard.vue'
import { currentUser, comments } from './data/data'
import { ref, computed } from 'vue'

function handleSend() {
  console.log('Send')
}

const replyBox = ref<boolean>(false)

function showReplyBox() {
  replyBox.value = !replyBox.value
}
</script>

<template>
  <div
    v-for="comment in comments"
    class="tw-m-6 tw-max-w-4xl tw-justify-center tw-items-center tw-flex-row"
  >
    <VCommentCard
      :comment="comment"
      :user="comment.user"
      :isCurrentUser="comment.user.username === currentUser.username"
      @click="showReplyBox"
    />
    <VReplyCard v-if="replyBox" :user="currentUser" value="" />
    <div v-if="comment.replies?.length" class="tw-ml-16">
      <VCommentCard
        v-for="reply in comment.replies"
        :comment="reply"
        :user="reply.user"
        :isCurrentUser="reply.user.username === currentUser.username"
        @click="showReplyBox"
      />
      <VReplyCard v-if="replyBox" :user="currentUser" value="" />
    </div>
  </div>
</template>
