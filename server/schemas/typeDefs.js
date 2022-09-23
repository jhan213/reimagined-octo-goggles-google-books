const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    authors: [String]!
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    user(_id: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    saveBook(_id: String!, bookId: String!): User
    deleteBook(_id: String!, bookId: String!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
