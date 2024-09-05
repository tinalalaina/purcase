import React from 'react'
import { Link } from 'react-router-dom'

function Ensemble() {
  return (
    <div className='mdd'>
         <div className="row">
                        <div className="col">
                        <h5 className="mb-4">
                        <Link class="nav-link" to="/controllers">Modification du produits</Link>
                        </h5>
                        </div>
                        <div className="col">
                        <h5 className="mb-4">
                        <Link class="nav-link" to="/addproduct"> ajouter un produit</Link>
                           </h5>
                        </div>
                        <div className="col">
                        <h5 className="mb-4">
                        <Link class="nav-link" to="/statistiquefinale"> Etat des stocks</Link>
                           </h5>
                        </div>
                        <div className="col">
                        <h5 className="mb-4">
                        <Link class="nav-link" to="/facture2"> Base factures</Link>
                           </h5>
                        </div>
                       </div>
    </div>
  )
}

export default Ensemble