import React from 'react'
import { IoMdStar } from "react-icons/io";
const BestSeller = (randomProducts) => {
  return (
    <div className="product-showcase">
    <h3 className="showcase-heading">best sellers</h3>
    <div className="showcase-wrapper">
      <div className="showcase-container">
      {randomProducts?.product?.map((product, index) => (
        <div className="showcase" key={index}>
          <a href="#" className="showcase-img-box">
            <img
              src={product.productImage}
              alt={product.productName}
              width={75}
              height={75}
              className="showcase-img"
            />
          </a>
          <div className="showcase-content">
            <a href="#">
              <h4 className="showcase-title">{product.productName}</h4>
            </a>
            <div className="showcase-rating">
            <IoMdStar style={{ color: 'yellow' }} />
            <IoMdStar style={{ color: 'yellow' }} />
            <IoMdStar style={{ color: 'yellow' }} />
            <IoMdStar style={{ color: 'yellow' }} />
            <IoMdStar style={{ color: 'yellow' }} />
            </div>
            <div className="price-box">
              <del>${product.currentPrice}.00</del>
              <p className="price">${product.salePrice}.00</p>
            </div>
          </div>
        </div>
           ))}
      </div>
    </div>
  </div>
  )
}

export default BestSeller