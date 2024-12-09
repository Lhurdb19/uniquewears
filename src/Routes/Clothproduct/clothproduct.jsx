import React, { useState } from 'react';
import './Clothproduct.css';
import MultipleItems from '../Slider/clotheslider';
import { useNavigate } from 'react-router-dom';
import PreviousNextMethods from '../Slider/Descriptionslider';


export default function Clothproduct() {
  const [viewProduct, setViewProduct] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <div className='cloth-product'>
      <div className="cloth-description">

      <div className="cloth-display">
      <MultipleItems/>
      </div>

      <div className="description-display">
      <PreviousNextMethods/>
      </div>

      </div>


      {viewProduct && (
        <div className="cloth-overlay">
          <div className="cloth-card">
            <span>
              <img style={{height: '350px'}} src="https://s.alicdn.com/@sc04/kf/H10335998b9f9497ba54a3f2bf4e51f5dC.jpg" alt="" />
              <h3>VIEW OUR CLOTHES PRODUCTS</h3>
              <p>Are you sure you want to view more products?</p>
            </span>
            <div className="bttn" style={{gap: '20px'}}>
              <button onClick={()=> setViewProduct(false)}>No</button>
              <button onClick={()=> navigate('/allproduct')}>Yes</button>
            </div>
          </div>
        </div>
      )}
      <div className="view-more-button">
        <h4>View Our Clothes Store</h4>
        <button onClick={()=> setViewProduct(true)}>View More Product</button>
      </div>
    </div>
    </>
  )
}
