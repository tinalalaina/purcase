import React from 'react';
import Footer from './body4/Footer';
import Register from './Register';

const Registers = () => {
  return (
    <div>
      <div className='ts'>

      </div>
      <div className='Pages2'>
        <div className="shop1 fw-bold">
          Authentification
        </div>
        <div className="shop2 fw-bold">
          Home <i class="fas fa-greater-than"></i>  Authentification
        </div>
      </div>

      <div className="card">
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default Registers;