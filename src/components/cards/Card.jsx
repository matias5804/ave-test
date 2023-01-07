import React, { useEffect } from "react";
import "./card.css";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { TbHeartBroken } from "react-icons/tb";
import { save, exist } from "../../helpers/storage";


const Card = ({ product, addItem, removeItem, addedItems }) => {
  const [isLoading, setLoading] = useState(false);

  const loading = () => {
    setLoading(true)
    setInterval( () => setLoading(false), 300);
  }
  return (
    <div key={product.id} className="card">
      <div className="div-image">
        <img src={product.image} alt="" />
      </div>

      <div className="card-description">
        <h4 className="category-card">{product.category}</h4>
        <h4>{product.title.substring(0, 25)}...</h4>
        <h4>$ {product.price}</h4>
      </div>
      {!isLoading ? (
        <div className="div-btn-card">
          {exist("favoritos", product) < 0 ? (
            <button
              className="btnCard"
              onClick={() => {
                addItem(product);
                loading();
              }}
            >
              Favorito
              <FcLike />
            </button>
          ) : (
            <button
              className="btnCard"
              onClick={() => {
                addItem(product);
                loading();
              }}
            >
              Cancelar
              <TbHeartBroken />
            </button>
          )}
        </div>
      ) : (<p className="loading-btn">loading...</p>)}
    </div>
  );
};

export default Card;
