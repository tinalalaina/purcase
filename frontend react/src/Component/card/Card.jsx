import React from 'react'
import Footer from '../body4/Footer'
import './Card.css'
import Cardshop from './Cardshop'
function Card() {
    return (
        <div>
            <div className='ts'>

            </div>
                <div className='Pages2'>
                    <div className="shop1 fw-bold">
                        Shopping ... <i class="fas fa-shopping-basket"></i>
                    </div>
                    <div className="shop2 fw-bold">
                        Home <i class="fas fa-greater-than"></i> Shopping
                    </div>
                </div>

<div className="card">
    <Cardshop/>
</div>
<Footer/>
        </div>
    )
}

export default Card