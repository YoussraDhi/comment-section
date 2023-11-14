<script setup lang="ts">
import VCommentCard from './components/Cards/VCommentCard.vue'
import VReplyCard from './components/Cards/VReplyCard.vue'
import VModalConfirm from './components/Modal/VModalConfirm.vue'
import VInputText from './components/Inputs/VInputText.vue'
import { currentUser } from './data/data'
import { ref, computed } from 'vue'
import { useCommentStore } from './store/comment.store'
import type { Comment, Reply } from './models/types'

// const replyBox = ref<boolean>(false)
const showDeleteModal = ref<boolean>(false)
const commentsStore = useCommentStore()
const showReplyBox = ref<boolean>(false)
const replyContent = ref<string>('')
const reply = ref<Reply>({
  id: 0,
  content: '',
  createdAt: '',
  score: 0,
  user: currentUser,
  replyingTo: '',
  replies: [],
})

const comments = computed(() => {
  commentsStore.fetchComments()
  return commentsStore.comments
})

console.log(comments.value)

function handleSend() {
  console.log('Send')
}

function toggleDeleteModal() {
  showDeleteModal.value = !showDeleteModal.value
}

function toggleReplyBox() {
  showReplyBox.value = !showReplyBox.value
}

function handleDeleteComment(id: number) {
  commentsStore.deleteComment(id)
  toggleDeleteModal()
}

function handleDeleteReply(id: number) {
  commentsStore.deleteReply(id)
  toggleDeleteModal()
}

function handleEdit(id: number) {
  console.log('Edit', id)
}

function getCommentById(id: number): Comment | undefined {
  return comments.value.find((comment) => comment.id === id)
}

function getLastID() {
  const commentLength = comments.value.length

  return (
    commentLength +
    comments.value.reduce((sum, comment) => {
      if (comment.replies) {
        return sum + comment.replies.length
      }
      return sum
    }, 0)
  )
}

function handleInput(value: string) {
  replyContent.value = value
  console.log(replyContent.value)
}

function handleReply(id: number) {
  console.log('Reply to', id)
  const currentComment = getCommentById(id)
  console.log('Comment', currentComment)

  reply.value = {
    id: getLastID() + 1,
    content: replyContent.value,
    createdAt: '1 min ago',
    score: 0,
    user: currentUser,
    replyingTo: currentComment?.user?.username || '',
  }
  console.log('Reply', replyContent.value)
  if (currentComment) {
    commentsStore.replyToComment(currentComment, reply.value)
  }
}
</script>

<template>
  <div
    class="tw-justify-center tw-items-center tw-flex-col tw-flex tw-m-6 tw-max-w-4xl tw-mx-auto tw-py-4"
  >
    <VInputText :model-value="replyContent" @update:model-value="handleInput" />
    <div v-for="comment in comments">
      <VCommentCard
        :comment="comment"
        :user="comment.user"
        :currentUser="currentUser"
        :reply="replyContent"
        @delete="toggleDeleteModal"
        @edit="handleEdit(comment.id)"
        @reply="($event) => handleReply(comment.id)"
        @update:model-value="handleInput"
      />

      <VModalConfirm
        v-if="showDeleteModal"
        title="Delete Comment"
        message="Are you sure you want to delete this comment?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
        @confirm="handleDeleteComment(comment.id)"
        @cancel="toggleDeleteModal"
      />
      <div v-if="comment.replies?.length" class="tw-ml-16">
        <VCommentCard
          v-for="reply in comment.replies"
          :comment="reply"
          :user="reply.user"
          :currentUser="currentUser"
          :reply="replyContent"
          @delete="toggleDeleteModal"
          @edit="handleEdit(reply.id)"
          @reply="($event) => handleReply(reply.id)"
        />
        <VModalConfirm
          v-if="showDeleteModal"
          title="Delete Comment"
          message="Are you sure you want to delete this comment? This will remove the comment and can't be undone."
          confirmLabel="Yes, Delete"
          cancelLabel="No, Cancel"
          @confirm="handleDeleteReply(comment.id)"
          @cancel="toggleDeleteModal"
        />
      </div>
    </div>
  </div>
</template>
