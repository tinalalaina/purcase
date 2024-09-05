import React, { useState, useEffect } from "react";
import './Page2.css'
import { Link } from 'react-router-dom'
import Footer from '../body4/Footer'
function Page2() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const getProduct = () => {
            fetch("http://localhost/grostore/api/product.php")
                .then(res => { return res.json() })
                .then(data => { setProduct(data) })
                .catch(error => { console.log(error) });
        }
        getProduct();
    }, []);
    const addToCart = (pdata) => {
        const existingItem = cart.find((item) => item.id === pdata.id);
    if (existingItem) {
        if (existingItem.quantity < pdata.pstock) {
        setCart(cart.map(item => item.id === pdata.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
        alert("Not enough stock available");
      }
    } else {
      setCart([...cart, { ...pdata, quantity: 0 }]);
    }
    }
    return (
        <div className="Page2">
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-11">
                    <div className="parag1 fw-bold">
                        Menu
                    </div>
                    <div className="parag2">
                        Let's check your today
                    </div>
                    <div className="row">
                        
                    {
                                    product.map((pdata, index) => (
                        <div className="col"  key={index}>

                            <div className="colone33">
                                <div className="centre1 colone2">
                                    <div class="row">
                                        <div class="w3-half">
                                            <div className="card">
                                                <img class="w3-image" src={`http://localhost/grostore/images/${pdata.pimage}`} alt="Fashion Blog" width="auto" height="400px" />
                                            </div>
                                        </div>
                                        <div class="w3-half">
                                            <div className="start">
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                            </div>
                                            <div className="pst1 fw-bold">
                                            {pdata.ptitle}
                                            </div>
                                            <div className="pst2 d-flex">
                                                <div className="pst21 text-decoration-line-through fw-bold">$11111</div>
                                                <div className="pst22 fw-bold">$ {pdata.pprice}</div>
                                            </div>
                                            <div className="pst3 fw-bold">
                                            <Link class="nav-link" to="/Card">Swop Now <i class="fas fa-long-arrow-alt-right"></i></Link> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  ))
}
                        </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page2