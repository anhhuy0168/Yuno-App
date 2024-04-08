import React from "react";
// import Wrapper from "../../Style/ProductDetailStyle"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect ,useState} from "react";
import { ProductContext } from "../context/productContext";
import { CartContext } from "../context/cartContext";
import { getUserFromLocalStorage } from "../localStorage";
const Wrapper = styled.section`
  .products-details {
    margin-top: 80px;
  }
  .products-details .col-2 img {
    padding: 0;
  }
  .products-details .col-2 {
    padding: 20px;
  }
  .products-details h4 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
  }
  .products-details select {
    display: block;
    padding: 10px;
    margin-top: 20px;
  }
  .products-details input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
  }
  input:focus {
    outline: none;
  }
  .products-details .fa {
    color: deeppink;
    margin-left: 5px;
  }

  .small-img-row {
    display: flex;
    justify-content: space-between;
  }
  .small-img-col {
    flex-basis: 24%;
    cursor: pointer;
  }
`;
const ProductDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  //PRODUCT CONTEXT
  const {
    productState: { products },
    getProduct,
  } = useContext(ProductContext);
  // CART CONTEXT
  let { addProductToCart } = useContext(CartContext);

  //ADD PRODUCT TO CART
  const selectedProduct = products.find((product) => product.id === id);
  const handleAddToCart = async  () => {
    const productId = selectedProduct?.id;
    const userId = user.uid
    await addProductToCart(userId, productId);
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
    <Wrapper>
      <div className="small-container products-details">
        <div className="row">
          <div className="col-2">
            <img
              src={selectedProduct?.productImage}
              width="100%"
              id="ProductImg"
            />
            {/* <div className="small-img-row">
        <div className="small-img-col">
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="100%" className="small-img" />
        </div>
        <div className="small-img-col">
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="100%" className="small-img" />
        </div>
        <div className="small-img-col">
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="100%" className="small-img" />
        </div>
        <div className="small-img-col">
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" width="100%" className="small-img" />
        </div>
      </div> */}
          </div>
          <div className="col-2">
            <p>{selectedProduct?.category}</p>
            <h1>{selectedProduct?.productName}</h1>
            <h4>{selectedProduct?.salePrice}.00$</h4>
            <select>
              <option>Select Size</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
            </select>
            <input type="number" defaultValue={1} />
            <a href="#" className="btn" onClick={handleAddToCart}>
              Add To Cart
            </a>
            <h3>
              Product Details <i className="fa fa-indent" />
            </h3>
            <p>
              Cake can also be a bridge to help you solve misunderstandings, you
              can "take advantage of" inherent sweetness to soothe your temper,
              shorten the distance for you to be close to each other, understand
              each other and cherish. respect each other more. Sometimes unique
              funny cream cakes bring great joy for you!
            </p>
          </div>
        </div>
        {/*---- tittle ----*/}
        {/* <div className="small-container">
    <div className="row row-2">
      <h2>Related Products</h2>
      <p>View More</p>
    </div>
  </div> */}
        {/*---- products ----*/}
        {/* <div className="small-container">
    <div className="row">
      <div className="col-4">
        <img src="img/products-1.jpg" />
        <h4>Violet Cake</h4>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <img src="img/products-12-1.jpg" />
        <h4>Galaxy Lemon</h4>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-o" />
          <i className="fa fa-star-o" />
        </div>
        <p>$30.00</p>
      </div>
      <div className="col-4">
        <img src="img/products-1-5.jpg" />
        <h4>Matcha Cake</h4>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
        </div>
        <p>$35.00</p>
      </div>
      <div className="col-4">
        <img src="img/products-4.jpg" />
        <h4>Mermaid Cake</h4>
        <div className="rating">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <p>$65.00</p>
      </div>
    </div>
  </div> */}
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
