interface Comment {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies?: Reply[]
}

interface Reply extends Comment {
  replyingTo: string
}

interface User {
  image: {
    png: string
    webp: string
  }
  username: string
}

interface UserWithComments extends User {
  comments: Comment[]
}

export type { User, Comment, UserWithComments, Reply }
