const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    id: ID
    description: String!
    quantity: Float
    price: Float
    totalStock: Float
  }

  input ProductInput {
    id: ID
    description: String!
    quantity: Float
    price: Float
    totalStock: Float
  }

  type ProductConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    page: Int
    pages: Int
    results: [Product]
  }

  type Query {
    products(pagination: PaginationInput): ProductConnection
    product(id: ID!): Product!
  }

  type Mutation {
    addProduct(product: ProductInput!): Product
    updateProduct(product: ProductInput!): Product
  }

  type Subscription {
    productAdded: Product
  }
`;
