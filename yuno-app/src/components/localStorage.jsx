export const getUserFromLocalStorage = () => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : null;
  };
  export const getCartTotalQuantity = () => {
    const cartTotalQuantity = localStorage.getItem("cartTotalQuantity");
    return cartTotalQuantity ? parseInt(cartTotalQuantity) : 0;
  };
  
  export const getOrder = () => {
    const orderString = localStorage.getItem("order");
    // Kiểm tra xem orderString có tồn tại không
    if (orderString) {
      // Nếu tồn tại, phân tích chuỗi JSON thành đối tượng JavaScript
      const orderObject = JSON.parse(orderString);
      return orderObject; // Trả về đối tượng order
    } else {
      return null; // Trả về null nếu không tìm thấy dữ liệu trong local storage
    }
  };
  export const getInformationUser = () => {
    const orderString = localStorage.getItem("informationUser");
    // Kiểm tra xem orderString có tồn tại không
    if (orderString) {
      // Nếu tồn tại, phân tích chuỗi JSON thành đối tượng JavaScript
      const orderObject = JSON.parse(orderString);
      return orderObject; // Trả về đối tượng order
    } else {
      return null; // Trả về null nếu không tìm thấy dữ liệu trong local storage
    }
  };
  export const getNameProduct = () => {
    const orderString = localStorage.getItem("nameProduct");
    // Kiểm tra xem orderString có tồn tại không
    if (orderString) {
      return JSON.parse(orderString); // Parse JSON nếu cần
    } else {
      return null; // hoặc giá trị mặc định khác tùy vào trường hợp của bạn
    }
  };