const { gql } = require("apollo-server");

module.exports = gql`
  input PaginationInput {
    offset: Int
    limit: Int
  }

  interface PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
  }
`;
