import React from 'react'
const ProductGrid = ({randomProductsList}) => {
  return (
    <main>
      <div class="product-container">
        <div >
        <div class="product-box">
        <div className="product-main">
                <h2 className="title">New Products</h2>
                <div className="product-grid">
                  {randomProductsList.map((product, index) => (
                    <div className="showcase" key={index}>
                      <div className="showcase-banner">
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          width={300}
                          className="product-img default"
                        />
                        <img
                          src={product.productImage}
                          alt={product.productName}
                          width={300}
                          className="product-img hover"
                        />
                        <p className="showcase-badge">15%</p>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          {product.category}
                        </a>
                        <a href="#">
                          <h3 className="showcase-title">
                            {product.productName}
                          </h3>
                        </a>
                        <div className="showcase-rating">
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star" />
                          <ion-icon name="star-outline" />
                          <ion-icon name="star-outline" />
                        </div>
                        <div className="price-box">
                          <p className="price">${product.salePrice}</p>
                          <del>${product.currentPrice}</del>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    </div>
    </div>
        </div>
      </div>
    </main>

 
  )
}
export default ProductGrid