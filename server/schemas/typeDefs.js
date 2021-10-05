const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    phoneNumber: int
    address: String
  }

  type ClientAccount {
    _id: ID
    name: String
    businessId: [Business]
    username: String
    password: String
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
  }

  type Mutation {
    # addAppUser(email: String!, rating: Int, friends: Int, password: String!): Auth
    addClientAccount(name: String, businessId: [Business]!, username: String!, password: String!): Auth
    addEvent(title: String!, startDate: Date!, endDate: Date!, avgSpend: Int!, numberVisited: Int!): Event
    updateEvent(title: String!, startDate: Date!, endDate:Date!, avgSpend: Int!, numberVisited: Int!): Event
    updateClientAccount(name: String!, businessId: [Business]!, usernamee: String!, password: String!): ClientAccount
    getoneEvent(title: String!, startDate: Date!, endDate: Date!, avgSpend: Int!, numberVisited: Int!):Event
    getallEvent(title: String!, startDate: Date!, endDate: Date!, avgSpend: Int!, numberVisited: Int!):Event
    login(username: String!, password: String!):Auth
`;

module.exports = typeDefs;
