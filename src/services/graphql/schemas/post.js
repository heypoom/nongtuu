const graphql = type => (type[0])

export default graphql`

enum Category {
  MEMES
  TECHNOLOGY
  OTHER
}

input postInput {
  title: String!
  content: String!
  summary: String
  category: Category
}

type Post {
  _id: String!
  title: String
  category: String
  summary: String
  content: String!
  createdAt: String
  comments(limit: Int): [Comment]
  author: User
}

type Comment {
  _id: String!
  content: String!
  author: User
  createdAt: String
}

`
