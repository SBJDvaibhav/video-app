//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Listing from "./components/listing";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Listing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
