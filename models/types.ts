interface Comment {
  id: number
  content: string
  createdAt: string
  score: number
  userId: User['id']
}

interface User {
  image: {
    png: string
    webp: string
  }
  username: string
  id: number
  comments: Comment[]
}

export type { User, Comment }
