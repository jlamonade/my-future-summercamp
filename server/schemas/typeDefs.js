const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    getUserByEmail(email: String!): User
  }
  
  type Mutation {
    createUser(email: String!, password: String! firstName: String, lastName: String): User
  }
`
module.exports = typeDefs
