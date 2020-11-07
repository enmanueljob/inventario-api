module.exports = {
    Query: {
      invoiceDetails: (info, args, { InvoiceDetail }) => InvoiceDetail.get(),
      invoiceDetail: async (info, {id}, { InvoiceDetail }) => InvoiceDetail.getById(id)
    },
    Mutation: {
      addInvoiceDetail: (info, args, { InvoiceDetail }) => {
        console.log(InvoiceDetail);
        return InvoiceDetail.save(args.invoiceDetail);
      },
      updateInvoiceDetail: (info, args, { InvoiceDetail }) => {
        return InvoiceDetail.update(args.invoiceDetail);
      }
    },
  };