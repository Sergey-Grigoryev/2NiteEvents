const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type Event {
    _id: ID
    title: String
    startDate: Date
    endDate: Date
    avgSpend: Float
    numberVisited: Int
  }

  type Business {
    _id: ID
    name: String
    phoneNumber: Int
    address: String
  }

  type ClientAccount {
    _id: ID
    name: String!
    businessId: [Business]
    username: String!
    password: String!
  }

  # type AppUser {
  #   _id: ID
  #   email: String
  #   eventId: [Event]
  #   rating: Int
  #   friends: Int
  # }

  type Auth {
    token: ID
    user: ClientAccount
  }

  type Query {
    me: ClientAccount
    getOneEvent(eventId: ID): Event
    getAllEvent: [Event]
  }

  type Mutation {
    # addAppUser(email: String!, rating: Int, friends: Int, password: String!): Auth
    addClientAccount(
      name: String!
      businessId: ID
      username: String!
      password: String!
    ): Auth
    addEvent(
      title: String!
      startDate: Date!
      endDate: Date!
      avgSpend: Int!
      numberVisited: Int!
    ): Event
    updateEvent(
      _id: ID
      title: String
      startDate: Date
      endDate: Date
      avgSpend: Int
      numberVisited: Int
    ): Event
    updateClientAccount(
      _id: ID
      name: String
      businessId: ID
      username: String
      password: String
    ): ClientAccount
    deleteEvent(_id: ID!): Event
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
