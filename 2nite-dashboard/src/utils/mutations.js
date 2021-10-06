import { gql } from "@apollo/client";

export const ADD_CLIENT_ACCOUNT = gql`
  mutation addClientAccount(
    $name: String!
    $username: String!
    $password: String!
  ) {
    addClientAccount(name: $name, username: $username, password: $password) {
      token
      user {
        _id
        name
        username
        password
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $title: String!
    $startDate: Date!
    $endDate: Date!
    $avgSpend: Int!
    $numberVisited: Int!
  ) {
    addEvent(
      title: $title
      startDate: $startDate
      endDate: $endDate
      avgSpend: $avgSpend
      numberVisited: $numberVisited
    ) {
      _id
      title
      startDate
      endDate
      avgSpend
      numberVisited
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent(
    $title: String!
    $startDate: Date!
    $endDate: Date!
    $avgSpend: Int!
    $numberVisited: Int!
  ) {
    updateEvent(
      title: $title
      startDate: $startDate
      endDate: $endDate
      avgSpend: $avgSpend
      numberVisited: $numberVisited
    ) {
      _id
      title
      startDate
      endDate
      avgSpend
      numberVisited
    }
  }
`;

export const UPDATE_CLIENT_ACCOUNT = gql`
  mutation updateClientAccount(
    $name: String
    $businessId: ID
    $username: String
    $password: String
  ) {
    updateClientAccount(
      name: $name
      businessId: $businessId
      username: $username
      password: $password
    ) {
      token
      user {
        _id
        name
        businessId
        username
        password
      }
    }
  }
`;

export const GET_ONE_EVENT = gql`
  mutation getOneEvent($eventId: ID) {
    getOneEvent(eventId: $eventId) {
      _id
      title
      startDate
      endDate
      avgSpend
      numberVisited
    }
  }
`;

export const GET_ALL_EVENT = gql`
  mutation getAllEvent() {
    getAllEvent() {
      _id
      title
      startDate
      endDate
      avgSpend
      numberVisited
    }
  }
`;

export const LOGIN = gql`
    mutation login($username: String!, password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                name
                businessId
                username
                password
            }
        }
    }
`;
