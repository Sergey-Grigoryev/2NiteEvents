const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
    }

    type Business {
        _id: ID
        contactName: String
        bussinessName: String
        phoneNumber: Int
        address: String
        hours: Int
    }

    type Events {
        _id: ID ????
        clientID: ????
        eventName: String
        date: Date
        startEndTime: Date ????
        avgSpend: Int
        avgPeople: Int
    }

    type UserVisit {
        Users.id ??????
        Event.id ?????
        Rating: Int
    }

    type ClientAccount {
        _id: ID
        businessAddress: String
        unique: true
        password: ????????
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {

    }

    type Mutation{

    }
`;

module.exports = typeDefs;