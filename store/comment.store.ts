import { defineStore } from 'pinia'
import type { Comment, Reply } from '~/models/types'
import { comments } from '~/data/data'

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: [] as Comment[],
  }),
  getters: {
    getComments(): Comment[] {
      return this.comments
    },
  },
  actions: {
    fetchComments() {
      this.comments = comments
    },
    addComment(comment: Comment) {
      this.comments.push(comment)
    },
    deleteComment(id: number) {
      this.comments.splice(
        this.comments.findIndex((c) => c.id === id),
        1
      )
    },
    deleteReply(id: number) {
      console.log(id)
      this.comments.forEach((comment) => {
        if (comment.id === id && comment.replies) {
          const commentIndex = comment.replies.findIndex(
            (reply) => reply.id === id
          )
          console.log(commentIndex)
          if (commentIndex !== -1) {
            comment.replies.splice(commentIndex, 1)
          }
        }
      })
    },
    editComment(comment: Comment) {
      this.comments[this.comments.indexOf(comment)] = comment
    },
    replyToComment(comment: Comment, reply: Reply) {
      reply.replyingTo = comment.user.username
      if (comment.replies) {
        comment.replies = []
        comment.replies.push(reply)
      }
    },
  },
})
