/* Carousel.jsx
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            className="d-block w-100"
            alt="slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            className="d-block w-100"
            alt="slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            className="d-block w-100"
            alt="slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
*/

import React from 'react';
import './Carousel.css'; // We'll write styling here

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important "}}>
      
      {/* Search Bar Overlay */}
      <div className="carousel-search-overlay">
        <input type="text" className="form-control search-input" placeholder="Search..." />
        <button className="btn btn-primary search-button">Search</button>
      </div>

      <div className="carousel-inner" id='Carousel'>
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            className="d-block w-100"
            alt="slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            className="d-block w-100"
            alt="slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?s=612x612&w=is&k=20&c=1sD5QszGcwtOECq-AU4pDL938hAN41E63SbfsimUzIk="
            className="d-block w-100"
            alt="slide"
          />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

