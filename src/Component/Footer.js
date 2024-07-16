import React from 'react'
import '../StyleMain/Footer.css'

function Footer() {
  return (

       
<section className="footer">

<div className="box-container">

    <div className="box">
        <h3>quick links</h3>
        <a className="links" href="/">home</a>
        <a className="links" href="/shop">Shop</a>
        <a className="links" href="/about">About</a>
        <a className="links" href="/login">Login</a>
        <a className="links" href="/contact">Contactus</a>
       
    </div>

    <div className="box">
        <h3>opening hours</h3>
        <p> monday : <i> 7:00am - 10:30pm </i> </p>
        <p> tuesday : <i> 7:00am - 10:30pm </i> </p>
        <p> wednesday : <i> 7:00am - 10:30pm </i> </p>
        <p> friday : <i> 7:00am - 10:30pm </i> </p>
        <p> saturday : <i> 7:00am - 10:30pm </i> </p>
        <p> sunday : <i className='close'> closed </i> </p>
    </div>

    <div className="box">
        <h3>opening hours</h3>
        <p> <i className="fa fa-phone"></i> +123-456-7890 </p>
        <p> <i className="fa fa-phone"></i> 7030596559 </p>
        <p> <i className="fa fa-envelope"></i> TimeZone@gmail.com </p>
        <p> <i className="fa fa-map"></i> pune, india - 560035 </p>
        <div className="share">
            <a href="#" className="fa fa-facebook-f"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-linkedin"></a>
            <a href="#" className="fa fa-pinterest"></a>
        </div>
    </div>

     <div className="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <form action="">
            <input type="email" name="" className="email" placeholder="enter your email" id=""/>
            <br/>
            <input type="submit" value="subscribe" className="btn"/>
        </form>
        
   </div>

</div>

<div className="credit"> created by <span>SURAJ.A.PATIL</span> | all rights reserved! </div> 
</section>
    );
};

export default Footer;

  