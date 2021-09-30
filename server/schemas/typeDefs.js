const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    _dummy : String
  }

`
module.exports = typeDefs
