const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type MatchUp {
        _id: ID!
        tech1: String!
        tech2: String!
        tech1Votes: Int 
        tech2Votes: Int
    }

    type Tech {
        _id: ID!
        name: String1
    }

    type Query {
        matchups: [Matchup]
        matchup(matchupID: ID!): Matchup
        techs: [Tech]
        tech(techID: ID!): Tech
    }

    type Mutations {
        createMatchup(tech_one: String!, tech_two: String!): MatchUp
        create
    }





`;

module.exports = typeDefs;