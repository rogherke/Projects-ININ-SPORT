import React, { Component } from "react";
import Slider from "react-slick";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../../../node_modules/react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./products_header.scss"

export default class SimpleSlider extends Component {
  state = {
    display: true,
    width: 100
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : true
      
    };
    return (
      <div className="ro_pro mb-5">
        {/* <h2> 精選商品推薦 </h2> */}
        <div
          style={{
            width: this.state.width + "%",
            display: this.state.display ? "block" : "none"
          }}
        >
        <Slider {...settings}>
          <div >
            <Link to="" href="#">
              <img
                src={("../../images/products_header1.jpg")}
                alt="ad"
                className="pic-1"
              />
            </Link>
          </div>
          <div>
          <Link to="" href="#">
              <img
                src={("../../images/products_header2.jpg")}
                alt="ad"
                className="pic-1"
              />
            </Link>
          </div>
          <div>
          <Link to="" href="#">
              <img
                src={("../../images/products_header3.jpg")}
                alt="ad"
                className="pic-1"
              />
            </Link>
          </div>
          <div>
          <Link to="" href="#">
              <img
                src={("../../images/products_header4.jpg")}
                alt="ad"
                className="pic-1"
              />
            </Link>
          </div>
          <div>
          <Link to="" href="#">
              <img
                src={("../../images/products_header5.jpg")}
                alt="ad"
                className="pic-1"
              />
            </Link>
          </div>
          </Slider>
        </div>
       
      </div>
    );
  }
}

