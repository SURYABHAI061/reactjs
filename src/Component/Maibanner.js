import React from 'react'
import banner from '../image/08.png'
import '../StyleMain/Stylewa.css'

import About from './About'
function Maibanner() {
  return (
   
    <div>
    <div className="main-menu">
    <div className="menu-row">
        <div className="menu-col">
            <h2>Select Your New Perfect Style</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio facilis natus excepturi, reiciendis officiis.
            </p>

            <button className="shop-btn">SHOP NOW</button>
        </div> 
        <img src={banner} alt='' />             
    </div>
    <About/>
</div>
</div>


  )
}

export default Maibanner
