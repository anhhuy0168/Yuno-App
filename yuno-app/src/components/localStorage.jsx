export const getUserFromLocalStorage = () => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : null;
  };
  export const getCartTotalQuantity = () => {
    const cartTotalQuantity = localStorage.getItem("cartTotalQuantity");
    return cartTotalQuantity ? parseInt(cartTotalQuantity) : 0;
  };
  
