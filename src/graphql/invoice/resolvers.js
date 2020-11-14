module.exports = {
    Query: {
      invoices: (info, args, { Invoice }) => Invoice.get(),
      invoice: async (info, {id}, { Invoice }) => Invoice.getById(id)
    },
    Mutation: {
      addInvoice: async (info, args, { Invoice, InvoiceDetail}) => {
        
        console.log(args.invoice);

        const products = [...args.invoice.detail];
        
        delete args.invoice.detail;

        const invoice = await Invoice.save(args.invoice);

        products.map(product=> product.invoiceID = invoice._id)

        await InvoiceDetail.insertMany(products)

        return invoice

      },
      updateInvoice: (info, args, { Invoice }) => {
        return Invoice.update(args.invoice);
      }
    },

    Invoice:{
      detail:(info,args,{InvoiceDetail})=>{
      return InvoiceDetail.get({invoiceID:info._id});  
      }
    }

  };