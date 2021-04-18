const getProductList = () => {
  return [
    {
      _id: 'jixjid',
      productId: 'snowflawID',
      name: 'jack',
      price: 23,
    },
  ];
};

const resolvers = {
  Query: {
    products: (parent: any) => getProductList(),
  },
};
export { resolvers };
