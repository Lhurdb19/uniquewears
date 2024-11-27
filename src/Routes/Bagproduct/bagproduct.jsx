import React, { useState } from 'react';
import './Bagproduct.css';
import Responsive from '../Slider/bagslider';
import { useNavigate } from 'react-router-dom';

export default function Bagproduct() {
  const [viewProduct, setViewProduct] = useState(false);

  const navigate = useNavigate();
  return (
    <>
    <div className='bag-product'>
      <h3>Welcome to Our Bag Products</h3>

      <Responsive/>

      { viewProduct && (
          <div className="overlay-container">
            
            <div className="overlay-card">
              <span>
                <img style={{height: '350px'}} src="https://www.ksf-global.com/wp-content/uploads/2021/06/Mulberry_3.jpg" alt="" />
                <h3>VIEW ALL OUR BAG PRODUCTS</h3>
                <p>Are you sure you want to view all the products?</p>
              </span>
              <div className="bag-btn">
                <button onClick={()=> setViewProduct(!viewProduct)}>No</button>
                <button onClick={()=> navigate('/allproduct')}>Yes</button>
              </div>
            </div>
          </div>
        )}

        <div className="view-button">
          <h4>View All Our Bag Products</h4>
          <button onClick={()=> setViewProduct(true)}>View More Products</button>
        </div>
    </div>
      </>
  )
}
