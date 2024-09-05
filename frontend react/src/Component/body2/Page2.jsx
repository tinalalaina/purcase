import React from 'react'
import './Page2.css'
function page2() {
  return (
    <div className='tt'>
      <div className="row">
        <div className="col">
          <div className="card gx  container">
            <div class="rounded-circle bg-light"><i class="fab fa-500px"></i></div>
            <a class="navbar-brand" href="#">
              <p> 100% Halala Meat Delivery</p>
            
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card gx container">
          <div class="rounded-circle bg-light"><i class="fas fa-check-double"></i></div>
            <a class="navbar-brand" href="#">
              <p>Safe & Temperature Controlled</p>
              </a>
          </div>
        </div>

        <div className="col">
          <div className="card gx container">
          <div class="rounded-circle bg-light"><i class="fas fa-certificate"></i></div>
            <a class="navbar-brand" href="#">
              <p>Trusted By Over 20k + Customers</p>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page2