import React from "react";
import "../index.css";

function Slider() {
  return (
    <section className="container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="slider_container carousel-inner">
          <div className="carousel-item active">
            <img
              src={process.env.PUBLIC_URL + `images/img4.jpg`}
              className="slider d-block h-50 w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + `images/img2.jpg`}
              className="slider d-block h-50 w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + `images/img1.jpg`}
              className="slider d-block h-50 w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={process.env.PUBLIC_URL + `images/img5.jpg`}
              className="slider d-block h-50 w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Slider;
