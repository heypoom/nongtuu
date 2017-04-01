const graphql = type => (type[0])

export default graphql`

type RootMutation {
  signUp (
    username: String!
    password: String!
    firstName: String
    lastName: String
  ): User

  logIn (
    username: String!
    password: String!
  ): AuthPayload

  createPost (
    post: postInput
  ): Post

  removePost (
    _id: String! # _id of post to remove
  ): Post

  createComment (
    postId: String!
    content: String!
  ): Comment

  removeComment (
    _id: String! # _id of comment to remove
  ): Comment
}

`
