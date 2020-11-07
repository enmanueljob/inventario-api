module.exports = {
    Query: {
      invoices: (info, args, { Invoice }) => Invoice.get(),
      invoice: async (info, {id}, { Invoice }) => Invoice.getById(id)
    },
    Mutation: {
      addInvoice: (info, args, { Invoice }) => {
        console.log(Invoice);
        return Invoice.save(args.invoice);
      },
      updateInvoice: (info, args, { Invoice }) => {
        return Invoice.update(args.invoice);
      }
    },
  };