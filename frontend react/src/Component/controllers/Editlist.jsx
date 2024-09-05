import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../body4/Footer";
import Ensemble from "./Ensemble";
import Page3 from "../body2/Page3";

function Editlist() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        ptitle: '',
        pprice: '',
        pstock: '',
        pstockinitiale: '',
        pfile: ''
    });
    
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost/grostore/api/product.php/${id}`);
                const productData = response.data;
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData= {id:id,ptitle:product.ptitle, pprice:product.pprice, pstock:product.pstock, pstockinitiale:product.pstockinitiale, pfile:product.pfile}; 
       const res= await axios.put("http://localhost/grostore/api/product.php",formData);
       //let jsonres= res.data.json(); 
       alert(res.data.success)       
         if(res.data.success)
         {
          setMessage(res.data.success);
          setTimeout( ()=>{               
              navigate('/controllers');
          }, 2000);
         
         }
        
    }

    return (
        <div>
        <Page3/>
    
    <div className="card">
    <div className="container">
            <div className="row">
                <div className="col-md-8 mt-4">
                    <Ensemble/>
                    <p className="text-warning">{message}</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label className="col-sm-3">Description</label>
                            <div className="col-sm-9">
                                <input type="text" name="ptitle" className="form-control" value={product.ptitle} onChange={(e) => setProduct({ ...product, ptitle: e.target.value })} />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3">Prix</label>
                            <div className="col-sm-9">
                                <input type="text" name="pprice" className="form-control" value={product.pprice} onChange={(e) => setProduct({ ...product, pprice: e.target.value })} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-3">Stock initiale</label>
                            <div className="col-sm-9">
                                <input type="text" name="pstockinitiale"className="form-control" value={product.pstockinitiale} onChange={(e) => setProduct({ ...product, pstockinitiale: e.target.value })} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-3">Stock finale</label>
                            <div className="col-sm-9">
                                <input type="text" name="pstoc"className="form-control" value={product.pstock} onChange={(e) => setProduct({ ...product, pstock: e.target.value })} />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3">Image</label>
                            <div className="col-sm-9">
                                <input type="text" name="pfile" className="form-control" value={product.pfile} onChange={(e) => setProduct({ ...product, pfile: e.target.value })} />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3"></label>
                            <div className="col-sm-9">
                                <button type="submit" className="btn btn-primary">Modification du produit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
        
    );
}

export default Editlist;