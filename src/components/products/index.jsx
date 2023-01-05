import React, { useEffect, useState } from 'react'
import './products.css'

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [product, setProdut] = useState([])

    useEffect(()=>{
        setLoading(true)

        const fetchProduct = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProdut(data)
            console.log(data)
        };

        fetchProduct((res)=>{
            setProdut(res);
        }).finally(()=>setLoading(false));

    },[])
    //{item.short_description.substring(0, 185)}

  return (
    <div className='products-container'>
        {loading && (
            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
        )}
        {product.map((product)=>(
            <div key={product.id} className="card">
                <div className='div-image'>
                    <img src={product.image} alt="" />
                </div>
                <div className='card-description'>
                    <h4 className='category-card'>{product.category}</h4>
                    <h4>{product.title.substring(0,25)}...</h4>
                    <h4>$ {product.price}</h4>
                </div>
                <div className='div-btn-card'>
                    <button className='btnCard'>Comprar</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products