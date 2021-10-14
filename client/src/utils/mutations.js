import { gql } from '@apollo/client';

export const ADD_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      tech1
      tech2
      }
    }`
;

export const ADD_VOTE = gql`
  mutation CreateVoteMutation(
    $createVoteMatchupId: ID!
    $createVoteTechNum: String!) {
    addVote(matchupId: $createVoteMatchupId, techNum: $createVoteTechNum) {
        tech1_votes
        tech2_votes
    }
  }
`;
