const express = require('express')
const routes = require('./routes')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schemas')

const db = require('./config/connection')
// env var for deploy
const PORT = process.env.PORT || 3001
const app = express()

async function startServer () {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })
}
startServer()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  })
})
