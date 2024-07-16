import React from 'react';
import '../StyleMain/about.css'
import Product from './Product';

import Ab1 from '../image/17.jpg'
import Ab2 from '../image/05.png'
import Ab3 from '../image/13.jpg'

const About = () => {
  return (
    <section>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={Ab1} alt="Jane" style={{ width: '300px', alignItems:'center',marginLeft:'70px' }} />
            <div className="container">
              <h2>AVLGURI</h2>
              <p className="title">CEO & Founder</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              </p>
              <p>avlguri@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Ab2} alt="Mike" style={{ width: '300px',marginLeft:'70px' }} />
            <div className="container">
              <h2>HUELOT</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>huelot@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Ab3} alt="John" style={{ width: '100%' }} />
            <div className="container">
              <h2>FOSSI</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>fossi@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <Product/>
    </section>
  );
}

export default About;
