import User from "./user"
import Post from "./post"
import RootMutation from "./RootMutation"

const graphql = type => (type[0])

const Schema = graphql`

type RootQuery {
  viewer: User
  author(username: String!): User
  authors: [User]
  posts(category: Category): [Post]
  post(_id: String!) : Post
}

schema {
  query: RootQuery
  mutation: RootMutation
}

`

export default [User, Post, RootMutation, Schema]
