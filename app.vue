<script setup lang="ts">
import VButtonWrapper from '~/components/Buttons/VButtonWrapper.vue'
import VButtonPrimary from '~/components/Buttons/VButtonPrimary.vue'
import VInputText from '~/components/Inputs/VInputText.vue'
import VAvatar from './components/Avatar/VAvatar.vue'
import VCommentCard from './components/Cards/VCommentCard.vue'
import { currentUser, comments } from './data/data'
import { computed } from 'vue'

function handleSend() {
  console.log('Send')
}
</script>

<template>
  <div
    v-for="comment in comments"
    class="tw-flex tw-justify-center tw-items-center tw-m-6"
  >
    <div>
      <VCommentCard :comment="comment" :user="comment.user" />
      <div v-if="comment.replies?.length">
        <VCommentCard
          v-for="reply in comment.replies"
          :comment="reply"
          :user="reply.user"
        />
      </div>
    </div>
  </div>
</template>
