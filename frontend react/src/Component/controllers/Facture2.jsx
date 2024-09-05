import React, { useState, useEffect } from 'react';
import Ensemble from './Ensemble';

function Facture() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = () => {
    fetch('http://localhost/grostore/api/purchase.php')
      .then(response => response.json())
      .then(data => setPurchases(data))
      .catch(error => console.error('Error fetching purchases:', error));
  };

  return (
    <div className='container'>
      <Ensemble/>
      <h1>Base factures</h1>
      <table class="table table-bordered">

        <thead>

          <tr>
            <th>Refclient & Nom du client </th>
            <th>Produit & Quantiter</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, index) => (
            <tr key={index}>
              <td scope="col"><p>Refclient:<center> {purchase.refclient} </center></p>
                <p>Rappel nom client: <center>{purchase.buyer_name}</center></p></td>
              <td scope="col">
                {purchase.product_ids.map((productId, index) => (
                  <li key={index}>Référence: {productId} --- Quantity: {purchase.quantities[index]}</li>
                ))}
              </td>


            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Facture;