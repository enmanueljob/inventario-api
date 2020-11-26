const { gql } = require("apollo-server");

module.exports = gql`
  type InvoiceDetail {
    id: ID!
    invoiceID: ID!
    productID: ID!
    price: Float
    quantity: Float
    subtotal: Float
    discount: Float
    tax: Float
    total: Float
    product: Product!
  }

  input InvoiceDetailInput {
    id: ID
    invoiceID: ID
    productID: ID!
    price: Float!
    quantity: Float!
    subtotal: Float
    discount: Float
    tax: Float
    total: Float
  }

  type Query {
    invoiceDetails: [InvoiceDetail]
    invoiceDetail(id: ID!): InvoiceDetail!
  }

  type Mutation {
    addInvoiceDetail(invoiceDetail: InvoiceDetailInput!): InvoiceDetail
    updateInvoiceDetail(invoiceDetail: InvoiceDetailInput!): InvoiceDetail
  }
`;
