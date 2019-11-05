import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ro_shoppingcar.scss";
import $ from "jquery";
import { runInThisContext } from "vm";
import SelectSize from "./selectSize"
import Modal from "react-responsive-modal";
import Login from '../members/login';

if (localStorage.getItem("buyCart") == null) {
  localStorage.setItem("buyCart", JSON.stringify([]));
}

class ShoppingCar extends Component {
  constructor(props) {
    super(props);
    var a = JSON.parse(localStorage.getItem("buyCart"));
    this.state = {
      products: a
    };
  }

  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


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
    freight.text(0);
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

  //追蹤
  collect = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("buyCart"));
    var b = parseInt(evt.target.dataset.all);
    var c = JSON.parse(localStorage.getItem("members"));
    var e = evt.target.dataset.size;
    if (c["isLogin"]) {
      console.log(e)
      var result = a.filter(v => {
        return (v.proNum === b && v.proSize === e)
      })
      var sid = c["members"]["memSid"]
      var num = result[0]["proNum"]
      console.log(sid, num)
      console.log(result)
      fetch("http://localhost:3000/track/check", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          proNum: num,
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}
        .then(track => {
          console.log(track.message.message);
          alert(track.message.message)
        })

    } else {
      this.onOpenModal()
    }
  };

  //清除
  delete = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("buyCart"));
    var b = parseInt(evt.target.dataset.all);
    var c = evt.target.dataset.size;
    // ------確認物品在那-----------
    var result = a.filter(v => {
      return (v.proNum === b && v.proSize === c)
    })
    // console.log(result);
    // console.log(b);
    // console.log(a);
    a.splice(result, 1);
    localStorage.setItem("buyCart", JSON.stringify(a));
    this.setState({
      products: a
    });
  };

  qtyDown = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("buyCart"));
    var b = parseInt(evt.target.dataset.all);
    var c = evt.target.dataset.size;
    // console.log(b);
    // console.log(c);
    var result = a.filter(v => {
      return (v.proNum === b && v.proSize === c)
    })
    if (result[0].qty > 1) {
      result[0].qty -= 1
      // console.log(result)
      localStorage.setItem("buyCart", JSON.stringify(a));
      this.setState({
        products: a
      });
    }
  }

  qtyPlus = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("buyCart"));
    var b = parseInt(evt.target.dataset.all);
    var c = evt.target.dataset.size;
    // console.log(b);
    var result = a.filter(v => {
      return (v.proNum === b && v.proSize === c)
    })
    result[0].qty += 1
    // console.log(result)
    localStorage.setItem("buyCart", JSON.stringify(a));
    this.setState({
      products: a
    });
  };

  gotoStore = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store");
  };

  gotoCheckout = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("members"))
    if (!a.isLogin) {
      this.onOpenModal()
    } else {
      window.location.assign("http://localhost:3001/store/checkout");
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div className="container">
        {JSON.parse(localStorage.getItem("buyCart")) == "" ? (
          <div class="rb-noItemCart">
            <i class="fas fa-shopping-cart rb-bigIcon my-4" />
            <h6 className="mb-3">您的購物車中沒有任何商品</h6>
            <button className="rb-themeBtn-w" onClick={this.gotoStore}>
              <i class="fas fa-shopping-bag" />
              去購物
            </button>
          </div>
        ) : (
            <div>
              {this.state.products.map(products => (
                <div className="row rb-allshoppingcart">
                  <div className="col-1">
                    <img
                      className="shopping-pic"
                      src={`../../images/${products.proName}.jpg`}
                      alt="pic"
                    />
                  </div>
                  <div className="col-5">
                    <div className="d-flex align-items-start flex-column ">
                      <div className="ml-3">{products.proName}</div>{" "}
                      <div className="ml-3 mt-4">
                        <div className="form-group">
                          <SelectSize proSize={products.proSize} proNum={products.proNum} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="number-spinner" title="數量">
                      <span className="ns-btn">
                        <Link to="#" data-dir="dwn">
                          <span
                            className="icon-minus"
                            data-all={products.proNum}
                            data-size={products.proSize}
                            onClick={this.qtyDown}
                          />
                        </Link>
                      </span>
                      <input
                        id="qty"
                        type="text"
                        className="pl-ns-value"
                        value={products.qty}
                        maxlength="2"
                        onchange={this.value}
                      />
                      <span className="ns-btn">
                        <Link to="#" data-dir="up">
                          <span
                            className="icon-plus"
                            data-all={products.proNum}
                            data-size={products.proSize}
                            onClick={this.qtyPlus}
                          />
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="col-2">
                    <div id="proPrice">會員價：${products.proPrice}</div>
                    <div className="rb-lightWord">
                      原價：${products.proOPrice}
                    </div>
                  </div>
                  <div className="col-2 rb-roundButton">
                    <div class="buttons">
                      <Link
                        to="#"
                        class="button collect"
                        data-all={products.proNum}
                        data-size={products.proSize}
                        onClick={this.collect}
                      >
                        <span>追蹤</span>
                      </Link>
                    </div>
                    <div class="buttons">
                      <Link
                        to="#"
                        class="button delete"
                        data-all={products.proNum}
                        data-size={products.proSize}
                        onClick={this.delete}
                      >
                        <span>刪除</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex align-items-end flex-column my-3">
                <div>
                  小計：<span id="subtotal" />
                </div>
                <div>
                  運費：<span id="freight" />
                </div>
                <div>
                  總計：<span id="count" />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className="rb-themeBtn-w" onClick={this.gotoStore}>
                  <i class="fas fa-shopping-bag" />
                  繼續購物
              </button>

                <button className="rb-themeBtn-main-w ml-3"
                  onClick={this.gotoCheckout}>
                  <i className="fas fa-cart-plus pr-2" />
                  結帳
              </button>
              </div>
              <Modal open={open} onClose={this.onCloseModal} center>
                <Login />
              </Modal>
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCar;
