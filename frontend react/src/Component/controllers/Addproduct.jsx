import React from 'react'
import Page3 from '../body2/Page3'
import Footer from '../body4/Footer'
import Addproducts from './Addproducts'

function Addproduct() {
  return (
    <div>
     <Page3/>
      <div className="card">
        <Addproducts />
      </div>
      <Footer />
    </div>
  )
}

export default Addproduct