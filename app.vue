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

const getPictureUrl = computed(() => {
  return require('./assets/avatars/cat.jpeg')
})

const getCommentFromCurrentUser = computed(() => {
  return comments.filter(
    (comment) => comment.user.username === currentUser.username
  )
})

console.log(getCommentFromCurrentUser.value)
</script>

<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-m-12 tw-space-x-4">
    <!-- <VButtonPrimary @click="handleSend"> Send </VButtonPrimary>
    <VInputText label="TOTO" value="" />
    <VAvatar pictureUrl="getPictureUrl" /> -->
    <VCommentCard :comment="getCommentFromCurrentUser[0]" :user="currentUser" />
  </div>
</template>
