import { defineStore } from 'pinia'
import type { Comment } from '~/models/types'

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
    addComment(comment: Comment) {
      this.comments.push(comment)
    },
    deleteComment(comment: Comment) {
      this.comments.splice(this.comments.indexOf(comment), 1)
    },
    editComment(comment: Comment) {
      this.comments[this.comments.indexOf(comment)] = comment
    },
    replyToComment(comment: Comment, reply: Comment) {
      this.comments[this.comments.indexOf(comment)].replies.push(reply)
    },
  },
})
