import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import "./ro_domo2.scss";

class RoDomo2 extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  //加入購物車
  getInCart = (evt) => {
    evt.preventDefault()
    //設個購物車推進去
    var cart = []
    var a = JSON.parse(localStorage.getItem("buyCart"))
    var b = parseInt(evt.target.dataset.all)

    // ------確認是否為相同物品-----------
    var result = a.filter(v => {
      return (v.proNum === b && v.proSize === "S")
    })
    console.log(b)
    console.log(result)
    var proItem = $.map(this.props.products, function (item, index) {
      return item.proNum
    }).indexOf(b);
    // ------判斷是否第一次加入或重覆加入------------    
    if (a == null) {
      var detail = {
        proActive: this.props.products[proItem].proActive,
        proColor: this.props.products[proItem].proColor,
        proCreate: this.props.products[proItem].proCreate,
        proFormat: this.props.products[proItem].proFormat,
        proImg: this.props.products[proItem].proImg,
        proInfo: this.props.products[proItem].proInfo,
        proName: this.props.products[proItem].proName,
        proNum: this.props.products[proItem].proNum,
        proOPrice: this.props.products[proItem].proOPrice,
        proPrice: this.props.products[proItem].proPrice,
        proSid: this.props.products[proItem].proSid,
        proSize: "S",
        proSpec: this.props.products[proItem].proSpec,
        proStorage: this.props.products[proItem].proStorage,
        proTag: this.props.products[proItem].proTag,
        proType: this.props.products[proItem].proType,
        qty: 1,
      }
      cart.push(detail);
      localStorage.setItem("buyCart", JSON.stringify(cart));

    } else if (result.length > 0) {
      result[0].qty += 1
      console.log(a)
      localStorage.setItem("buyCart", JSON.stringify(a));
    } else {
      var de = {
        proActive: this.props.products[proItem].proActive,
        proColor: this.props.products[proItem].proColor,
        proCreate: this.props.products[proItem].proCreate,
        proFormat: this.props.products[proItem].proFormat,
        proImg: this.props.products[proItem].proImg,
        proInfo: this.props.products[proItem].proInfo,
        proName: this.props.products[proItem].proName,
        proNum: this.props.products[proItem].proNum,
        proOPrice: this.props.products[proItem].proOPrice,
        proPrice: this.props.products[proItem].proPrice,
        proSid: this.props.products[proItem].proSid,
        proSize: "S",
        proSpec: this.props.products[proItem].proSpec,
        proStorage: this.props.products[proItem].proStorage,
        proTag: this.props.products[proItem].proTag,
        proType: this.props.products[proItem].proType,
        qty: 1,
      }
      a.push(de);
      localStorage.setItem("buyCart", JSON.stringify(a));
    }
    // -------加入完成------------
    alert("加入完成")
  }

  //追蹤
  collect = evt => {
    evt.preventDefault();
    var b = parseInt(evt.target.dataset.all);
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"]
      var num = b
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
      alert("請先登入")
    }
  };

  render() {
    return (
      <div className="container ro_product3 my-5">
        <div className="row">
          <h3 className="text-center rb-session-title mt-2">推薦男裝商品</h3>

          <div className="col-lg-4 d-none d-lg-inline-block">
            <div className="background-product2"></div>
          </div>
          <div className="col-lg-8 row mt-5">
            {this.props.products.map(products => (
              <div className="col-4" key={products.proSid} title={products.proName}>
                <div className="product-grid3">
                  <div className="product-image3 m-2">
                    <Link to={`store/productdetail/${products.proSid}`} href="">
                      <img
                        src={(`../../images/${products.proName}.jpg`)}
                        alt="Logo"
                        className="pic-1"
                      />
                      <img
                        src={(`../../images/${products.proName}2.jpg`)}
                        alt="Logo"
                        className="pic-2"
                      />
                    </Link>
                    <ul className="social">
                      <li>
                        <Link to="#" title="追蹤" className="jj-link-icon">
                          <i class="fas fa-heart" data-all={products.proNum} onClick={this.collect}></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="購買" className="jj-link-icon">
                          <i className="fa fa-shopping-cart" data-all={products.proNum} onClick={this.getInCart} />
                        </Link>
                      </li>
                    </ul>
                    <span className="product-new-label">New</span>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link to="" href="">
                        {products.proName}
                      </Link>
                    </h3>
                    <div class="price">
                      ${products.proPrice}
                      <span>${products.proOPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    );
  }
}

export default RoDomo2;
