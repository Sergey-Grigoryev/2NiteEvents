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
