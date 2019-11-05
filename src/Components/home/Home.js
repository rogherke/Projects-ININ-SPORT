import React, { Component } from "react";
import "./Home.scss";

import Map from "../map/Mapgoogle";
import Account from "../account/account";
import Account_login from "../account/account_login";
import RecommendAct from "../recommendAct/RecommendAct";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Article from "../article/Article";
import Testimony from "../testimony/Testimony";
import Trainer from "../trainer/Trainer";
import MemTestimony from "../testimony/memTestimony";
import SimpleSlider2 from "../mall/ro_SimpleSlider2";
import HomeFloatBar from "../nav/homeFloatBar";
import MobileNav from "../nav/mobileNav";

class Home extends Component {
  constructor(props) {
    super(props);
    this.category = props.match.params.category;
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch("http://localhost:3000/pro/productsPage/1")
      .then(res => res.json())
      .then(pro => {
        console.log(pro);
        this.setState({ products: pro.datas });
      });
  }

 

  render() {
    var a = JSON.parse(localStorage.getItem("members"));
    console.log(a);
    return (
      <React.Fragment>
       <HomeFloatBar/>
       <div className="container-fluid fixed-top rb-mobile-outline">
       <MobileNav/> 
       </div>
        <div className="container rb-fixed-top rb-mobile-index-1">
          <div className="row">
            <div className="col-4 rb-mobile-account">
              {a.isLogin ? <Account_login /> : <Account />}
              {/* */}
            </div>
            <div className="col-xl-8 col-lg-12 rb-mobile-map">
            <h3 className="text-center rb-session-title mt-2 rb-mobile-map-title">找地點</h3>
              <Map />
            </div>
          </div>
        </div>
        <RecommendAct />
        <Testimony />
        <Trainer />
        <MemTestimony />
        {/* <ShoppingCart /> */}
        <SimpleSlider2 products={this.state.products} />
        <Article />
      </React.Fragment>
    );
  }
}

export default Home;
