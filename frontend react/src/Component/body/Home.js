import React from 'react';
import Page2 from '../body2/Page2';
import Page3 from '../body3/page3';
import Footer from '../body4/Footer';
import './body.css'
function Home() {
  return (
    
    <div className=''>
      <div className='ts'>

      </div>
      <div className='tt'>

      </div>
      <header class="bgimg-1 w3-center w3-padding-48">
        <div className='cardx'>Best Quality Itsaka Products</div>
        <h1><b className='msg'>Itsaka &</b></h1>
        <h1><b className='msg1'>Grocery Delivery</b></h1>
        <h1><b className='msg3'>Service in _</b></h1>
        <h6 className='msg2'>Welcome to the blog of <span class="w3-tag">Jane's world</span></h6>
        <div className='cardy'><h1>Show Now</h1></div>
      </header>
      <Page2 />
      <Page3 />
      <Footer/>

    </div>
    
  )
}

export default Home