import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Card.css'

function Cardshop() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [buyerName, setBuyerName] = useState('');
    
    const [message, setMessage]= useState('');
    useEffect(() => {
        const getProduct = () => {
            fetch("http://localhost/grostore/api/product.php")
                .then(res => { return res.json() })
                .then(data => { setProduct(data) })
                .catch(error => { console.log(error) });
        }
        getProduct();
    }, []);
    
   

    /////////////////////////////////////////////////////////

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
    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
      };

      const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      };
      const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.pprice * item.quantity), 0);
      };
    /////////////////////////////////////////////////////////
    const confirmPurchase = async () => {
        if (!buyerName) {
          alert('Please enter your name to confirm the purchase.');
          return;
        }
        const confirmation = window.confirm('Are you sure you want to confirm this purchase?');
        if (confirmation) {
          try {
            const cartWithBuyerName = cart.map(item => ({ ...item, buyerName }));
            const response = await axios.post('http://localhost/grostore/api/purchase.php', { cart: cartWithBuyerName });
            setCart([]);
            alert(response.data);
          } catch (error) {
            console.error('Error confirming purchase:', error);
            alert('Failed to confirmer. Please try again later.');
          }
        }
      };
    return (
        <React.Fragment>
            <div className="container ">
              

           


                <div className="row">
                    <div className="col">
                        <h5 className="mb-4">Product List</h5>
                        <p className="text-danger">
                        <a href="#panier" class="panier"><i class="fas fa-cart-arrow-down"></i></a>  
                        </p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Product Stock</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">panier</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((pdata, index) => (
                                        <tr key={index}>
                                            <td>{index + 1} </td>
                                            <td>{pdata.ptitle} </td>
                                            <td>{pdata.pprice} </td>
                                            <td>{pdata.pstock} </td>
                                            <td><img src={`http://localhost/grostore/images/${pdata.pimage}`} height={50} width={90} /></td>
                                            <td> <button onClick={() => addToCart(pdata)}className="btn btn-secondary mx-2"><i className=" fas fa-cart-plus "></i></button></td>
                                         
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                   
                 </div>
                 <div className="row" id="panier">
                 <div className="">
                    <div class="row">
                      
    <div class="col">
    <br/><br/>
    <input 
        type="text" 
        placeholder="Your Name"
        value={buyerName}
        onChange={(e) => setBuyerName(e.target.value)}
        className="form-control"
      /> 
    </div>
    <div class="col">
      
    <br/><br/>
    <button onClick={confirmPurchase}  className="btn btn-primary">confirmer</button>
         
    </div>
  </div>
                    <h1>Panier</h1>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Nom du produit</th>
                                    <th scope="col">Prix unitaire</th>
                                    <th scope="col">Quantiter</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                   <td>{item.ptitle}</td> <td>{item.pprice}</td> <td> {item.quantity} </td><td><img src={`http://localhost/grostore/images/${item.pimage}`} height={50} width={90} /></td>
                                    - Total: ${item.pprice * item.quantity}
                                <td>
                                     <button onClick={() => decreaseQuantity(item.id)}className="btn btn-warning mx-2"><i class="fas fa-minus"></i></button>
                                    <button onClick={() => removeFromCart(item.id)} className="btn btn-danger mx-2"><i class="fas fa-window-close"></i></button>
                               </td>
                                    </tr>
                            ))}
                         </tbody>
                        </table>
                    
                    <div>
                       
                    </div>
  <div class="row">
    <div class="col-sm-7"></div>
    <div class="col-sm-5">
      <table className="table table-bordered">
        <tr>
          <td><h3><i class="fas fa-hand-holding-usd"></i>Total finale:</h3></td><td> <h3>${calculateTotalPrice()}</h3></td>
        </tr>
      </table>
    </div>
  </div>
                    
           
             

               
                 </div>
                
              
                           </div>
                      </div>
        </React.Fragment>
    );
}

export default Cardshop