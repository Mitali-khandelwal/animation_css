import React from 'react'
import './shadowAni.css'
const ShadowAni = () => {
  return (
    <div><header>
    <h1>CSS-only direction-aware hover effect</h1>
    <p>Comes with a Sass @mixin so that you can quickly modify the number of columns and items.</p>
    <p>Also, you can <strong>resize</strong> the window. It keeps working when grid changes.</p>
  </header>
    <ul class="grid">
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/wvfrkayr0mg-christelle-bourgeois-776x1063.jpg" alt=""/>
          <span class="description">Dearest Diary</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg" alt=""/>
        </a>
        <span class="description">Window Sill?</span>
      </li>
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg" alt=""/>
          <span class="description">Listen To Me</span>
        </a>      
      </li>
      <li>
       <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/71nlan-2ya-andrew-neel-2-776x620.jpg" alt=""/>
          <span class="description">Travel Often</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/hdyo6rr3kqk-scott-webb-1172x780.jpg" alt=""/>
          <span class="description">Another Plant?</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fvazbu6zae-andrew-neel-776x517.jpg" alt=""/>
          <span class="description">On the Wave</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/typewriter-1-776x968.jpg" alt=""/>
          <span class="description">Great Gatsby</span>
        </a>
      </li>    
      <li>
        <a href="#">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/xohlruw4k8-christelle-bourgeois-776x758.jpg" alt=""/>
          <span class="description">In the Sun</span>
        </a>
      </li>
  </ul>
  </div>
  )
}

export default ShadowAni;