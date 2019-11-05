import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./cla_checkout.scss";
import $ from "jquery";
import Moment from "react-moment";
import "moment-timezone";

class ClaCheckout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    var a = JSON.parse(localStorage.getItem("cla"));

    this.state = {
      products: a
    };
  }

  componentDidUpdate() {
    var s_price = 0,
      total = 0;
    var subtotal = $("#subtotal");
    var count = $("#count");
    var freight = $("#freight");
    var a = JSON.parse(localStorage.getItem("buyCart"));
    // 去掉千分位並轉換成數值
    for (var i = 0; i < a.length; i++) {
      s_price = parseInt(a[i]["proPrice"].replace(/,/gi, "")) * a[i]["qty"];
      total += s_price;
      subtotal.text(total);
      count.text(total);
    }
    freight.text(0);
  }

  gotoCla = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/ListClass");
  };

  gotoCheck = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store/cla_checkout2");
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="container rb-checkout">
          <div className="row ro-progress">
            <ol class=" col-8 progress mx-auto my-3">
              <li class="is-active" data-step="1">
                購物明細
              </li>
              <li data-step="2">結帳方式</li>
              <li data-step="3" class="progress-last">
                訂單成立
              </li>
            </ol>
          </div>
          <div className="row">
            <h3 className="text-center rb-session-title my-3">課程明細</h3>

            {this.state.products.map(products => (
              <div className="row rb-checkout-list  ">
                <div className="col-2">
                  <img
                    className="rb-shopping-pic"
                    src={`http://localhost:3000/images/${products.claImg}`}
                    alt="pic"
                  />
                </div>
                <div className="col-2">
                  <small className="text-black-50">課程名稱：</small>
                  <div>{products.claName}</div>
                  <small className="text-black-50">課程項目：</small>
                  <div>{products.claSport}</div>
                </div>
                <div className="col-3">
                  <small className="text-black-50">地址：</small>
                  <div>
                    {products.claCity}
                    {products.claArea}
                  </div>
                  <div> {products.claAddress}</div>
                </div>
                <div className="col-3">
                  <div>
                    <small className="text-black-50">教練：</small>
                    {products.memSid}
                  </div>

                  <div>
                  <small className="text-black-50"> 開課時間：</small>
                    <Moment format="YYYY/MM/DD HH:mm">
                      {products.claTimeUp}
                    </Moment>
                  </div>
                  <div>
                  <small className="text-black-50">結束時間：</small>
                    <Moment format="YYYY/MM/DD HH:mm">
                      {products.claTimeEnd}
                    </Moment>
                  </div>
                </div>
                <div className="col-2">
                  <div> <small className="text-black-50">課程費用：</small>${products.claCost}</div>
                </div>
              </div>
            ))}
          </div>
    

      
          <div className="d-flex justify-content-center my-5">
            <button className="rb-themeBtn-w" onClick={this.gotoCla}>
              選擇其他課程
            </button>

            <button
              className="rb-themeBtn-main-w ml-3"
              onClick={this.gotoCheck}
            >
              下一頁
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ClaCheckout;
