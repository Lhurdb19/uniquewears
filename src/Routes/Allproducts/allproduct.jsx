import React from 'react';
import './Allproduct.css';
import Menclothesjson from '../../Employee/menclothesjson';
import Womenclothesjson from '../../Employee/womenclothesjson';
import Bag from '../../Employee/bag';
import Babyclothesjson from '../../Employee/babyclothesjson';
import Menshoejson from '../../Employee/Menshoejson';
import Womenshoejson from '../../Employee/Womenshoejson';
import Wristwatchjson from '../../Employee/Wristwatchjson';


export default function Allproduct() {
  return (
    <div className='allproduct'>
        
        <div className="bags-container">
            <h2>BAGS</h2>
            <Bag/>
        </div>

        <div className="clothes-container">
          <h2>MEN'S CLOTHES</h2>
            <Menclothesjson/>

            <h2>WOMEN'S CLOTHES</h2>
            <Womenclothesjson/>
        </div>

        <div className="baby-container">
          <h2>BABY'S CLOTHES</h2>
          <Babyclothesjson/>
        </div>

        <div className="shoes-container">
            <h2>MEN'S SHOES</h2>
            <Menshoejson/>

            <h2>WOMEN'S SHOES</h2>
            <Womenshoejson/>
        </div>
      
        <div className="wrist-container">
            <h2>JEWELRIES</h2>
            <Wristwatchjson/>
        </div>
      
    </div>
  )
}
