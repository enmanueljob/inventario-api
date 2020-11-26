const { gql } = require("apollo-server");

module.exports = gql`
  type Invoice {
    id: ID!
    total: Float
    state: Float
    detail: [InvoiceDetail!]
  }

  input InvoiceInput {
    id: ID
    total: Float!
    state: Float!
    detail: [InvoiceDetailInput!]!
  }

  type Query {
    invoices: [Invoice]
    invoice(id: ID!): Invoice!
  }

  type Mutation {
    addInvoice(invoice: InvoiceInput!): Invoice
    updateInvoice(invoice: InvoiceInput!): Invoice
  }
`;