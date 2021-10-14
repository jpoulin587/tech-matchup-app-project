import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
 query allMatchups {
    matchups {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
 }
`;

export const QUERY_SINGLE_MATCHUP = gql`
  query oneMatchup( $matchupId: ID!) {
      matchup(matchupId: $matchupId) {
          tech1
      }
  }
`;

export const QUERY_TECHS = gql`
 query allTechs {
    techs {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
            
    }
 }
`;

export const QUERY_SINGLE_TECHS = gql`
  query oneTech( $techId: ID!) {
      tech(techId: $matchupId) {
        _id
        name
      }
  }
`;
