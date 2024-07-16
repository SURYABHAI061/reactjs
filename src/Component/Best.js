import React from 'react'
import best1 from '../image/06.png'
import best2 from '../image/09.png'
import '../StyleMain/Stylewa.css'
import Contactus from './Contactus'


function Best() {
  return (
    <div>
    <section class="choice">
    <div class="choice-row">
        <div class="choice-col">
            <div class="choice-content">
                <h1>Watch of Choice</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos amet placeat incidunt ipsam architecto quis neque quidem? Rerum, odio.</p>
                <button class="choice-btn">Show Watches</button>
            </div>
            <img src={best1} alt=""/>
        </div>

        <div class="choice-col">
            <img src={best2}alt=""/>
            <div class="choice-content">
                <h1>Watch of Choice</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos amet placeat incidunt ipsam architecto quis neque quidem? Rerum, odio.</p>
                <button class="choice-btn">Show Watches</button>
            </div>
        </div>
    </div>

</section>
<Contactus/>
</div>

  )
}

export default Best
