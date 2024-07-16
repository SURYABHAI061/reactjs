import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maibanner from "./Component/Maibanner";
import About from "./Component/About";
import Product from "./Component/Product";
import Login from './Component/Login';
import SearchComponent from './Component/SearchComponent';
import Contactus from './Component/Contactus';
import Header from './Component/Header';
import Cartitm from './Component/Cartitm';
import Footer from './Component/Footer';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "LOIS CARON ",
      price: "999",
      img: "Cart_img/popular1.png",
      amount:1
    },
    {
      id: 2,
      title: "TIMEWEAR ",
      price: '989',
      img: "Cart_img/popular2.png",
      amount: 1,
    },
    {
      id: 3,
      title: "SONATA ",
      price: "1430",
      img: "Cart_img/popular3.png",
      amount: 1,
    },
    {
      id: 4,
      title: "Allen Solly",
      price: "899",
      img: "Cart_img/popular4.png",
      amount: 1,
    },
    {
      id: 5,
      title: "PETER ENGLAND",
      price: "1499",
      img: "Cart_img/popular5.png",
      amount: 1,
    },
    {
      id: 6,
      title: "Casado",
      price: "1399",
      img: "Cart_img/popular6.png",
      amount: 1,
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    console.log(data);
    setCart([...cart, data]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header count={cart.length}/>
        <Routes>
          <Route path="/" element={<Maibanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product products={products} addToCart={addToCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/cart" element={<Cartitm cart={cart} />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
