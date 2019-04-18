export const getSelectedProducts = jobDetails => {
  const products = getProducts(jobDetails);
  return parseSelectedProducts(products);
};

const getProducts = jobDetails => {
  if (jobDetails.hasOwnProperty("products")) {
    return jobDetails.products;
  }
  return null;
};

const parseSelectedProducts = products => {
  const selectedProducts = [];
  if (products == null) return selectedProducts;

  Object.keys(products).map(category => {
    Object.keys(products[category]).map(product => {
      let currentProductQuantity = products[category][product][0].quantity;
      let currentProducts = products[category][product][0].products;
      currentProducts.forEach(product => {
        if (product.selected) {
          selectedProducts.push({
            quantity: currentProductQuantity,
            description: product.name,
            unitPrice: product.price,
            lineTotal: parseInt(
              (currentProductQuantity * product.price).toFixed(2)
            )
          });
        }
      });
    });
  });

  return selectedProducts;
};
