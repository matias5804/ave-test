import React from "react";
import CardList from "./CardList";
import "./addProducts.css";
import { useRef } from "react";
import { CgCloseO } from 'react-icons/cg'

const AddProducts = ({ items, click, removeItem, setAddedItem }) => {
  const showDivRef = useRef(null);

  return (
    <div ref={showDivRef} className="container-favorities">
      <div className="header-favorities">
        <h2>Favoritos 
          <span className="total-items">{items.length}</span>
          {items.length <= 1 ? " producto" : " productos"}
        </h2>

        <CgCloseO  size="1.3rem" cursor="pointer"
        onClick={() => {
          setTimeout(() => click(false), 200);
        }} />
      </div>

      <div className="body-favorities">
        {items.map((item, i, itemsArr) => (
          <CardList
            key={item.id}
            item={item}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
            itemsArr={itemsArr}
          />
        ))}
      </div>
    </div>
  );
};

export default AddProducts;
