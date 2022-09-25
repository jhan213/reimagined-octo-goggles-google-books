import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query User($_id: String) {
    User(_id: $_id) {
      _id
      username
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
