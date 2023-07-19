import Particle from './js/Particle';
import './App.css';
import React from 'react';

function App() {
  return (
    <div  >
      <section className='mainTop'>

      <Particle />
      <div className='headingEx'>

        <nav className='navbar'>
          <div className='navdiv'>
              <ul className='navbar'>
                <li><a href='#'>BRANDS</a></li>
                <li><a href='#'>INFLUENCERS</a></li>
                <li><a href='#'>PRICING</a></li>
                <li><a href='#'>BLOGS</a></li>
                <li><a href='#'>CONTACT</a></li>
              </ul>
            </div>
        </nav>

        <div className='heading'>
          <h1>Discover. Connect.<br/> Collaborate</h1>
          <p>An ecosystem for Social media Influencers and Brands</p>
        </div>

        <div className='Image'>
          <a><img class="codepen-promo-image" src="mobile.jpg" alt="Mobile Image"/></a>        
        </div>

        <div class="button-container">
          <button class="button">I'AM INFLUENCERS</button>
          <button class="button">I'AM BRAND</button>
        </div>
      </div>

      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div class="wave waveTop" style={{ backgroundImage:`url('http://front-end-noobs.com/jecko/img/wave-top.png')` }}></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveMiddle" style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-mid.png')` }}></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveBottom" style={{backgroundImage: `url('http://front-end-noobs.com/jecko/img/wave-bot.png')` }}></div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
