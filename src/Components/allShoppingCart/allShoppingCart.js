import React, { Component } from "react";
import { BrowserRouter, Router, Link } from "react-router-dom";
import ShoppingCar from "../mall/ro_shoppingcar";
import ClaShoppingcar from "../listClass/claShoppingcar"
import FavShoppingCar from "../favstuff/favShoppingcar"

import "./allShoppingCart.scss";
import NormalNav from "../nav/normalNav";

class AllShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  qtyDown =(evt) => {
    evt.preventDefault();
    this.setState({
      qty : this.state.qty - 1
    }) 
  }
  qtyPlus =(evt) => {
    evt.preventDefault();
    this.setState({
      qty : this.state.qty + 1
    }) 
  }

  Size = (evt) => {
    evt.preventDefault();
    this.state.products.proSize = evt.target.value
  }
  
  render() {
    return (
      <React.Fragment>
         < NormalNav/>
        <div className="rb-long-bg-h mt-4 pb-5 rb-long-bg-h-allshoppingcart">
          <div className="rb-long-bg pb-5"></div>
            <div className="container rb-z">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-4">
                  選購和追蹤的課程／商品
                </h3>

                <div className="col-12 mt-3 rb-block-w py-4 px-4">
                  <div className="col-xs-12 rb-tab">
                    <nav>
                      <div
                        className="nav nav-tabs nav-fill"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                         <i class="fas fa-dumbbell"></i> 課程
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                         <i class="fas fa-shopping-cart"></i> 購物車
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          <i class="fas fa-heart"></i>追蹤
                        </a>
                      </div>
                    </nav>
                    <div
                      className="tab-content py-3 px-3 px-sm-0"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <ClaShoppingcar />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <ShoppingCar />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        <FavShoppingCar />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </React.Fragment>
    );
  }
}
export default AllShoppingCart;
