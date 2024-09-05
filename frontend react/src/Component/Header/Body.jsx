import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Style.css'

function Body() {
    return (
<div className="container-fluid">
  <div class="row">
    <div class="col-1">
    </div>
    <div class="col">
    <nav class="navbar ">
    <div class="id">Welcome to our Organic store</div>
    <div class="id"><i class="fas fa-mail-bulk"></i> tinalalaina14@gmail.com <i class="fas fa-search-location"></i> Antananarivo | Soavimasoandro | 101</div>
    
    

</nav>
<nav class="navbar navbar-expand-lg navbar-light ic">
<a class="navbar-brand fw-bold" href="#">Growstore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/Pages">Menu</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link" to="/Card">Pages</Link>
        </li>
      </ul>
    
    </div>
  </nav>
    </div>
   
    <div class="col-2"> 
    <Link class="nav-link" aria-current="page" to="/controllers"><i class="fab fa-whmcs"></i></Link>

     </div>
  </div>
  </div>


       

       
    )
}

export default Body