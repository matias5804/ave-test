import React, { useEffect, useState } from "react";
import AddProducts from "./components/addproducts/AddProducts";
import './app.css'

import CardBody from "./components/cards/CardBody";
import Search from "./components/search/Search";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Dropdonw from "./components/dropdowd/Dropdonw";
import Footer from "./components/footer/Footer";
import BounceLoader from "react-spinners/BounceLoader";

function App() {

  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((data) => setItem(data));

    setTimeout(() => {
      setLoading(false);
    },4000);
  }, []);

  /*------------- LOCALSTORAGE --------------- */
  const localStorageKey = "favorite_products"
  useEffect(() => {
    console.log("obteniendo favoritos");
    loadFavoriteProducts();
  }, []);

  const loadFavoriteProducts = () => {
    const favoriteProducts = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setAddedItem(favoriteProducts);
  }
  /*-------------------------------------------*/

  /*--------------SEARCH-----------------------*/
  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  /**------------------------------------------- */

  /*-------------ADD FAVORITIES------------------*/
  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }
  /*----------------------------------------------*/

  return (
    <div className="App">
      <div className="header">
        <div className="nav">
          <div className="nav-div-brand">
            <Header/>
          </div>
          <div className="nav-div-input-btn">
            <Dropdonw/>
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSearchData}
              />
            <Button 
              num={addedItems.length} 
              click={setShowAddProducts} 
              /> 
          </div>
        </div>
      </div>
      {loading ? (
        <div className="spinner">
          <BounceLoader  color="#36d7b7" />
        </div>
      ) : 
      
      <div className="divCardBody">
        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
          />
      </div>
      }
      {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}

      <Footer/>
    </div>
  );
}

export default App;
