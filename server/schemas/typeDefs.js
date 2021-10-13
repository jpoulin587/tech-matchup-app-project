const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Matchup {
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
        tech(techId: ID!): Tech
    }

    type Mutations {
        createMatchup(tech1: String!, tech2: String!): Matchup
        createVoter(matchupId: ID!, techNum: Int!): Matchup!)





`;

module.exports = typeDefs;