import React from "react";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import Footer from "../Component/Footer";
import Carousel from "../Component/Carousel";


const Home = () => {
  return (
    <>
      <Navbar />
    <Carousel/>
     <div className="m-4">
        <Card/>
          <Card/>
            <Card/>
              <Card/>
                <Card/>
                <Card/>
     </div> 
      <Footer />
    </>
  );
};

export default Home;
