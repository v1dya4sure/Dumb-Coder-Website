import {useState} from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <Outlet className="grow flex" />
        <Footer />
      </div>
    </>
  );
}

export default App;
