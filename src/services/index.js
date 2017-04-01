import debug from "./debug"
import graphql from "./graphql"

export default function services() {
  this.configure(debug)
  this.configure(graphql)
}
