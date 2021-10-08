import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      businessId {
        _id
        name
        phoneNumber
        address
      }
      username
    }
  }
`;

export const GET_ONE_EVENT = gql`
  query getOneEvent($eventId: ID) {
    getOneEvent(eventId: $eventId) {
      _id
      title
      start
      end
      avgSpend
      numberVisited
    }
  }
`;

export const GET_ALL_EVENT = gql`
  query getAllEvent {
    getAllEvent {
      _id
      title
      start
      end
      avgSpend
      numberVisited
    }
  }
`;
