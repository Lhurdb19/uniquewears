import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shoeproduct.css';
import AppendDots from '../Slider/shoeslider';
import Menshoejson from '../../Employee/Menshoejson';

export default function Shoeproduct() {
  const [viewProduct, setViewProduct] = useState(false);

  const navigate = useNavigate();

  return (
    <>
        <div className='shoeproduct'>
      <h3>Welcome to Our Shoe Products</h3>
      <AppendDots/>
      <br />
      <br />
      <br />
      <Menshoejson/>
      
    {viewProduct && (
      <div className="overlay">
        <div className="card">
          <span>
            <img src="https://visitwalkerton.com/images/DB/2019/03/06/6280249715X400DowntownWalkertonBusiness13.webp" alt="" />
            <h3>VIEW ALL PRODUCTS</h3>
           <p> Are you sure you want to view all products?</p>
            {/* <button onClick={()  => setViewProduct(false)}>ok</button> */}
          </span>
          <div className="btn">
          <button onClick={() => setViewProduct(false)}>No</button>
          <button onClick={() => navigate('/allproduct')}>Yes</button>

          </div>
        </div>
      </div>
    )}

      <div className="view-btn">
      <h4>View All Our Products</h4>
      <button onClick={() =>setViewProduct(true)}>View More Products</button>
      </div>
    </div>
    </>
  )
}
