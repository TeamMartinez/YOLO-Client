export const ADD_STOCK = 'GET_STOCK';
export const UPDATE_STOCK = 'UPDATE_STOCK';

export function addStock(stock){
  return {
    type: ADD_STOCK,
    stock
  }
}

export function updateStock(stock){
  return {
    type: UPDATE_STOCK,
    stock
  }
}

export function getStock(stock){
  return dispatch => {
    const stock = {
      name: "Test",
      symbol: "test",
      lastPrice: 250.00,
      change: 15.60
    }
    dispatch(addStock(stock));
  }
}
