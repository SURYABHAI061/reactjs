import React from 'react';
import PropTypes from 'prop-types';
import '../StyleMain/Product.css';
import Best from './Best';

const Product = ({ products, addToCart }) => {
  return (
    <section>
      <div className='product-container'>
        <div className='main-product'>
          {
            products.map((productItem) => {
              return (
                <div className='box' key={productItem.id}>
                  <div className='img-box'>
                    <img src={productItem.img} alt={productItem.title} />
                  </div>
                  <div className='detail'>
                    <h4>{productItem.title}</h4>
                    <div className='info'>
                      <h2>{productItem.title}</h2>
                      <p>₹{productItem.price}</p>
                    </div>
                    <button className='addtocart' onClick={() => addToCart(productItem)}>Add To Cart</button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <Best />
    </section>
    
  );
};

Product.defaultProps = {
  products: [],
};

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
