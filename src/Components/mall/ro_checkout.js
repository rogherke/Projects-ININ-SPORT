import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_checkout.scss";
import $ from "jquery";
import SelectSize from "./selectSize";

class Checkout extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    var a = JSON.parse(localStorage.getItem("buyCart"));

    this.state = {
      products: a
    };
  }

  componentDidMount() {
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
    console.log(total)
    freight.text(0);
    localStorage.setItem("total",JSON.parse(total))
  }

  gotoStore = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store");
  };

  gotoCheck = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store/checkout2");
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
              <li data-step="2">運送方式</li>
              <li data-step="3">結帳方式</li>
              <li data-step="4" class="progress-last">
                訂單成立
              </li>
            </ol>
          </div>
          <div className="row">
            <h3 className="text-center rb-session-title my-3">購物明細</h3>

            {this.state.products.map(products => (
              <div className="row rb-checkout-list  ">
                <div className="col-2">
                  <img
                    className="rb-shopping-pic"
                    src={`../../images/${products.proName}.jpg`}
                    alt="pic"
                  />
                </div>
                <div className="col-5 rb-checkout-col">
                  <div>{products.proName}</div>
                  <div>尺寸：{products.proSize}</div>
                </div>
                <div className="col-2 rb-checkout-col2">
                  <div>{products.qty}件</div>
                </div>
                <div className="col-3">
                  <div>會員價：${products.proPrice}</div>
                  <div className="rb-lightWord">
                    原價：${products.proOPrice}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items-end flex-column my-3">
            <div>
              小計：
              <span id="subtotal" />
            </div>
            <div>
              運費：
              <span id="freight" />
            </div>
            <div>
              總計：
              <span id="count" />
            </div>
          </div>

          <div className="row d-flex">
            <div className="rb-check-message">重要提醒 </div>
            <small>
              購物車中的商品只能暫放90天，可暫存的商品品項至多為20項。
              商品體積較大或多於15項，可能不適用『7-11取貨』。
              無庫存商品調貨時間請參考「商品平均調貨時間」。
              商品海外限寄送港澳、美國、星馬、紐澳、日韓地區
              結帳選項若無出現「海外店取」，可能是購買商品不適用此服務。(說明)。
            </small>
          </div>
          <div className="d-flex justify-content-center my-5">
            <button className="rb-themeBtn-w" onClick={this.gotoStore}>
              繼續購物
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
export default Checkout;
