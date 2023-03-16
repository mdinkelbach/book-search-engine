const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(username: String!, email: String!, password: String!): Auth
    saveBook(input: author, input: description, input: title, input: bookId, input: image, input: link): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
