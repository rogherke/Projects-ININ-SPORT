import React, { Component } from "react";
import Slider from "react-slick";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./products_header2.scss";

export default class SimpleSliderLiked extends Component {

  constructor(props) {
    super(props)
    // this.category = props.match.params.category;
    this.state = {
      products: [],
      display: true,
      width: 100
    }

  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch("http://localhost:3000/pro/productsPage/1")
      .then(res => res.json())
      .then(pro => {
        console.log(pro)
        this.setState({ products: pro.datas })
      })
  }

  //加入購物車
  getInCart = (evt) => {
    evt.preventDefault()
    //設個購物車推進去
    var cart = []
    var a = JSON.parse(localStorage.getItem("buyCart"))
    var b = parseInt(evt.target.dataset.all)
    var c = this.state.products
    console.log(b)
    // ------確認是否為相同物品-----------
    var proItem = a.filter(v => {
      return (v.proNum === b && v.proSize === "S")
    })
    console.log(proItem)
    var result = c.filter(v => {
      return (v.proNum === b)
    })
    console.log(result)
    // ------判斷是否第一次加入或重覆加入------------    
    if (a.length === null) {
      var detail = {
        proActive: result[0].proActive,
        proColor: result[0].proColor,
        proCreate: result[0].proCreate,
        proFormat: result[0].proFormat,
        proImg: result[0].proImg,
        proInfo: result[0].proInfo,
        proName: result[0].proName,
        proNum: result[0].proNum,
        proOPrice: result[0].proOPrice,
        proPrice: result[0].proPrice,
        proSid: result[0].proSid,
        proSize: "S",
        proSpec: result[0].proSpec,
        proStorage: result[0].proStorage,
        proTag: result[0].proTag,
        proType: result[0].proType,
        qty: 1,
      }
      console.log(detail)
      cart.push(detail);
      localStorage.setItem("buyCart", JSON.stringify(cart));

    } else if (proItem.length > 0) {
      proItem[0].qty += 1
      console.log(proItem[0].qty)
      localStorage.setItem("buyCart", JSON.stringify(a));
    } else {
      var de = {
        proActive: result[0].proActive,
        proColor: result[0].proColor,
        proCreate: result[0].proCreate,
        proFormat: result[0].proFormat,
        proImg: result[0].proImg,
        proInfo: result[0].proInfo,
        proName: result[0].proName,
        proNum: result[0].proNum,
        proOPrice: result[0].proOPrice,
        proPrice: result[0].proPrice,
        proSid: result[0].proSid,
        proSize: "S",
        proSpec: result[0].proSpec,
        proStorage: result[0].proStorage,
        proTag: result[0].proTag,
        proType: result[0].proType,
        qty: 1,
      }
      a.push(de);
      console.log(de)
      localStorage.setItem("buyCart", JSON.stringify(a));
    }
    // -------加入完成------------
    alert("加入完成")
  }

  collect = evt => {
    evt.preventDefault();
    var b = parseInt(evt.target.dataset.all);
    var c = JSON.parse(localStorage.getItem("members"));
    console.log(b)
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"]
      var num = b
      console.log(sid, num)
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

  scroll = evt => {
    window.scroll({top:0})
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true
    };
    return (
      <React.Fragment>
        <div className="background-label">
          <div className="rb-long-bg-h">
            <div className="rb-long-bg">  </div>
            <div className="container ro_pro2 rb-z">
              <div className="row">
                <h3 className="text-center rb-session-title-w mt-5 mb-5">
                  推薦商品
                  </h3>
                <div
                  style={{
                    width: this.state.width + "%",
                    display: this.state.display ? "block" : "none"
                  }}
                  className="mb-5"
                >

                  <Slider {...settings}>

                    {this.state.products.map(products => (
                      <div className="col-12" key={products.proSid} title={products.proName}>
                        <div className="product-grid3">
                          <div className="product-image3 m-2" >
                            <Link to={`/store/productdetail/${products.proSid}`} href="" >
                              <img onClick={this.scroll}
                                src={(`../../images/${
                                  products.proName
                                  }.jpg`)}
                                alt="Logo"
                                className="pic-1"
                              />
                              <img onClick={this.scroll}
                                src={(`../../images/${
                                  products.proName
                                  }2.jpg`)}
                                alt="Logo"
                                className="pic-2"
                              />
                            </Link>
                            <ul className="social">
                              <li>
                                <Link to="#" href="" title="追蹤" className="jj-link-icon">
                                  <i className="fa fa-shopping-bag" data-all={products.proNum}  onClick={this.collect}/>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" href="" title="購買" className="jj-link-icon">
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

                  </Slider>

                </div>
              </div>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}
