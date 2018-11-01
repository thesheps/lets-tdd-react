const range = n => [...Array(n).keys()];

const fetchSearchResults = () => {
  return Promise.resolve({
    response: {
      results: range(10).map(i => {
        return {
          productId: i,
          productCode: `SKU${i}`
        };
      })
    }
  });
};

export default fetchSearchResults;
