const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      console.log(action.payload, 'invoked the reducer');
      return [...state, ...action.payload];
    case 'SORT_ITEMS':
      const sortedArr = [...state].sort((a, b) => {
        if (action.payload === 'Price -- High Low') {
          return b.price.actual - a.price.actual;
        } else if (action.payload === 'Price -- Low High') {
          return a.price.actual - b.price.actual;
        } else if (action.payload === 'Discount') {
          return +b.discount.split('%')[0] - +a.discount.split('%')[0];
        }
      });
      return sortedArr;
    case 'FILTER_ITEMS':
      console.log('payload', action.payload);
      if (action.payload) {
        return [...state].filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default products;
