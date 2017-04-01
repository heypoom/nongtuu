import {graphqlExpress, graphiqlExpress} from "graphql-server-express"
import {makeExecutableSchema, addMockFunctionsToSchema} from "graphql-tools"

import Resolvers from "./resolvers"
import Schema from "./schemas"

export default function() {
  const app = this

  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(app)
  })

  app.use("/graph", graphqlExpress(req => {
    const {token, provider} = req.feathers
    return {
      schema: executableSchema,
      context: {token, provider}
    }
  }))

  app.use("/graphiql", graphiqlExpress({
    endpointURL: "/graph"
  }))
}
