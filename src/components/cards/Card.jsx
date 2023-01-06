import React, { useEffect } from "react";
import "./card.css";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { TbHeartBroken } from "react-icons/tb";


const Card = ({ product, addItem, removeItem, addedItems }) => {
  
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);

  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  // console.log(item);
  return (
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
          {isAdded ? 
          <button 
          className='btnCard'
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}>
            Favorito<FcLike/>
          </button> 
          :
          <button
            className='btnCard'
            onClick={() => {
              isAdded ? addItem(product) : removeItem(product);
              setIsAdded(!isAdded);
            }}>Cancelar<TbHeartBroken/>
          </button>}
        </div>
      </div>
  );
};

export default Card;
