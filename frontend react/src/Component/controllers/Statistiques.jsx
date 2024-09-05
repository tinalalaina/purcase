import React, {useState, useEffect} from "react";
import Ensemble from "./Ensemble";

function Statistiques() {
  const [userData, setUserData]= useState([]);
  useEffect( ()=>{   
    getUserData();
    },[]);

 const getUserData= async()=>{
    const reqData= await fetch("http://localhost/grostore/api/product.php");
    const resData= await reqData.json();           
    setUserData(resData);
     } 
  return (
    <div className="container">
      <div class="row">
      <Ensemble/>
      <h1>Etat des stocks</h1>
        <div className="col">
          
          <center>
          <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Numéro</th>
                                <th scope="col">Description</th>
                                <th scope="col">Quantités stock de départ</th>
                                <th scope="col">Somme des ventes</th>
                                <th scope="col">Stock Finale</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                 userData.map((uData, index)=>(
                                  <tr key={index}>
                                <td>{index+1 }</td>
                                <td>{ uData.ptitle}</td>
                                <td>{ uData.pstockinitiale}</td>
                                <td>{ uData.pstockinitiale - uData.pstock}</td>
                                <td>{uData.pstock}</td>
                               
                                </tr>
                                ))
                                }                                
                                </tbody>
                                </table>  
          </center>
        </div>
        
      </div>
    </div>


  )
}

export default Statistiques