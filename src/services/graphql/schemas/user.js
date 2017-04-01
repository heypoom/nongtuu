const graphql = type => (type[0])

export default graphql`

# Stores data about the User's Account.
type User {
  _id: String! # the ! means that every author object _must_ have an id

  # First Name of the User
  firstName: String

  # Last name of the User
  lastName: String

  # Username is Required!
  username: String!

  # Posts by this user
  posts: [Post] # the list of Posts by this author
}

type AuthPayload {
  token: String # JSON Web Token
  data: User
}

`
