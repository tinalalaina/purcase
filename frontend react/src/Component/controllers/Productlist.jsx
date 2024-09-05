import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Ensemble from "./Ensemble";



function Productlist() {
    const [product, setProduct] = useState([]);
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

    const handleDelete= async(id)=>{
        const getProduct = () => {
            fetch("http://localhost/grostore/api/product.php")
                .then(res => { return res.json() })
                .then(data => { setProduct(data) })
                .catch(error => { console.log(error) });
        }
        const res= await axios.delete("http://localhost/grostore/api/product.php/"+id);
        setMessage(res.data.success);
        getProduct();   
      }
    return (
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-md-10 mt-4">
                       <Ensemble/>
                       <h1>Modification</h1>
                        <p className="text-danger">{ message} </p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Prix unitaire</th>
                                    <th scope="col">Produit Stock initial</th>
                                    <th scope="col">Stock Finale</th>
                                    <th scope="col">Image du produit</th>
                                    <th scope="col">produit Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((pdata, index) => (
                                        <tr key={index}>
                                            <td>{index + 1} </td>
                                            <td>{pdata.ptitle} </td>
                                            <td>{pdata.pprice} </td>
                                            <td>{pdata.pstockinitiale} </td>
                                            <td>{pdata.pstock} </td>
                                            <td><img src={`http://localhost/grostore/images/${pdata.pimage}`} height={50} width={90} /></td>
                                            <td>{pdata.status == 1 ? "Active" : "Inactive"} </td>
                                            <td>
                                            <Link to={"/editus/"+pdata.id} className="btn btn-success mx-2">Edit</Link>  
                                              <button className="btn btn-danger" onClick={ ()=>handleDelete(pdata.id)}>Delete</button>
                                  
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Productlist;