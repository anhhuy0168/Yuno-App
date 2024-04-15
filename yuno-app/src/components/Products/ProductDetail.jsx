import React from "react";
import Wrapper from "../../Style/ProductDetailStyle";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { CartContext } from "../context/cartContext";
import { getUserFromLocalStorage } from "../localStorage";
import NavBarMobile from "../layout/NavBarMobile";
import Header from "../layout/Header";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(1);
  //PRODUCT CONTEXT
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  // CART CONTEXT
  const { addProductToCart } = useContext(CartContext);

  //ADD PRODUCT TO CART
  const selectedProduct = products.find((product) => product.id === id);
  const handleChange = (event) => {
    const newValue = (parseInt(event.target.value))
    if (!isNaN(newValue) && newValue >= 0) {
      setAmount(newValue);  
    }
  };
  const handleAddToCart = async () => {
    const productId = selectedProduct?.id;
    const userId = user.uid;
    await addProductToCart(userId, productId, amount);
  };
  //GET PRODUCT
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    setUser(userFromLocalStorage);
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <div className="small-container products-details">
          <div className="row">
            <div className="col-2">
              <img
                src={selectedProduct?.productImage}
                width="100%"
                id="ProductImg"
              />
            </div>
            <div className="col-2">
              <p>{selectedProduct?.category}</p>
              <h1>{selectedProduct?.productName}</h1>
              <h4>Price: {selectedProduct?.salePrice}.00$</h4>
              <input type="number" defaultValue={1} value={amount}  onChange={handleChange}/>
              <a href="#" className="btn" onClick={handleAddToCart}>
                Add To Cart
              </a>
           
              <a href="/order" className="btn" >
                Buy
              </a>

              
              <h3>
                Product Details <i className="fa fa-indent" />
              </h3>
              <p>
                Cake can also be a bridge to help you solve misunderstandings,
                you can "take advantage of" inherent sweetness to soothe your
                temper, shorten the distance for you to be close to each other,
                understand each other and cherish. respect each other more.
                Sometimes unique funny cream cakes bring great joy for you!
              </p>
            </div>
          </div>
        </div>
        <NavBarMobile />
      </Wrapper>
    </>
  );
};

export default ProductDetail;
