import React from 'react'
import Page3 from '../body2/Page3'
import Footer from '../body4/Footer'
import Chart from './Chart'
import Statistiques from './Statistiques'

function Statistique() {
  return (
    <div>
      <div>
        <Page3/>

        <Statistiques />
        <div className="container">
          <Chart />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Statistique