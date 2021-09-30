const { UserInputError } = require('apollo-server-express')
const { User } = require('../models')

const resolvers = {
  Query: {
    async getUserByEmail (parent, args) {
      const user = await User.findOne({
        email: args.email
      })

      if (!user) {
        throw new UserInputError('User not found!')
      }

      return user
    }
  },

  Mutation: {
    createUser: async (parent, { email, password }) => {
      const user = await User.create({
        email,
        password
      })

      if (!user) {
        throw UserInputError('Incorrect parameters!')
      }

      return user
    }
  }
}

module.exports = resolvers
