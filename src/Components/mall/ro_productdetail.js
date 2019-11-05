import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_productdetail.scss";
import SimpleSliderLiked from '../mall/ro_SimpleSliderLiked';
import $ from "jquery";
import Select from "react-select";

const options = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" }
];

class Productsdetail extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.initState = {
      qty: 1,
      proActive: "",
      proColor: "",
      proCreate: "",
      proFormat: "",
      proImg: "",
      proInfo: "",
      proName: "",
      proNum: "",
      proOPrice: "",
      proPrice: "",
      proSid: "",
      proSize: "S",
      proSpec: "",
      proStorage: "",
      proTag: "",
      proType: "",
      selectedOption: null
    }
    this.state = this.initState;
  }

  componentDidMount() {
    this.getProducts();
  }
  componentDidUpdate(prevProps, prevState){
   // if(prevProps.pro)
  //  console.log("pre:" + prevProps.match.params.proSid); //JSON.stringify(prevProps));
  //  console.log("prestate:" + JSON.stringify(prevState));
  //  console.log("state:" + this.state.proSid);
  // console.log("now:" + this.props.match.params.proSid)
   if(prevProps.match.params.proSid != this.props.match.params.proSid){
        this.getProducts();
   }
    
  }

  getProducts() {
    fetch("http://localhost:3000/pro/products/" + this.props.match.params.proSid)
      .then(res => res.json())
      .then(pro => {
        console.log(pro)
        this.setState({
          proActive: pro[0].proActive,
          proCreate: pro[0].proCreate,
          proFormat: pro[0].proFormat,
          proImg: pro[0].proImg,
          proInfo: pro[0].proInfo,
          proName: pro[0].proName,
          proColor: pro[0].proColor,
          proNum: pro[0].proNum,
          proOPrice: pro[0].proOPrice,
          proPrice: pro[0].proPrice,
          proSid: pro[0].proSid,
          proSpec: pro[0].proSpec,
          proStorage: pro[0].proStorage,
          proTag: pro[0].proTag,
          proType: pro[0].proType,
        })
      })
  }

  // 加入購物車
  getInCart = (evt) => {
    evt.preventDefault()
    delete this.state.selectedOption
    //設個購物車推進去
    var cart = []
    var a = JSON.parse(localStorage.getItem("buyCart"))
    var b = this.state.proNum

    // ------確認相同物品並抓取出來-----------
    var result = a.filter(v=>{
      return (v.proNum === b && v.proSize === this.state.proSize)
    })
    console.log(b)
    console.log(result)
    // ------第一次加入或重覆加入------------    
    if (a == null) {
      cart.push(this.state);
      localStorage.setItem("buyCart", JSON.stringify(cart));
    } else if (result.length > 0) {
      result[0].qty += this.state.qty
      console.log(a)
      localStorage.setItem("buyCart", JSON.stringify(a));
    } else {
      a.push(this.state);
      localStorage.setItem("buyCart", JSON.stringify(a));
    }
    // -------加入完成------------
    alert("加入完成")
  }

  qtyDown = (evt) => {
    evt.preventDefault();
    this.setState({
      qty: this.state.qty - 1
    })
  }
  qtyPlus = (evt) => {
    evt.preventDefault();
    this.setState({
      qty: this.state.qty + 1
    })
  }

  handleChangeSelect = selectedOption => {
    console.log(selectedOption.value)
    this.setState({
      selectedOption,
      proSize: selectedOption.value
    })
  }

  //追蹤
  collect = evt => {
    evt.preventDefault();
    var b = this.state.proNum
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      // ------確認物品在那-----------
      var sid = c["members"]["memSid"]
      console.log(sid, b)
      fetch("http://localhost:3000/track/check", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          proNum: b,
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
    const { selectedOption } = this.state;
    var products = this.state;
    console.log(this.state)
    return (
      <React.Fragment>
        <div className="container rb-detiail">
          <div className="row">
            <div classNam="col-8">
              <div className="" >
                <div className="preview-pic tab-content">
                  <div>
                    <img
                      src={`../../images/${products.proName}.jpg`}
                      alt="pro-img"
                      className="detail-pic text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-name col-4 col-md-6 pl-5">
              <div className="d-flex justify-content-between">
                <small className="rb-gray my-3">
                  商品列表／{products.proType}
                </small>
                <small className="rb-gray my-3">
                  商品編號：{products.proNum}
                </small>
              </div>
              <h4 className="product-title mb-3">{products.proName}</h4>
              <div className="my-2">
                <span className="product-description">
                  {products.proInfo}
                </span>
              </div>
              <small className="product-price">
                原價：
                  <span>${products.proOPrice}</span>
              </small>

              <div className="rb-price-special d-flex align-items-center">
                會員價：<span>${products.proPrice}</span>
              </div>

              <div className="d-flex justify-content-between rb-product-size-color">
                <div className="col-6">
                  <p>尺寸：</p>
                  <Select
                    value={selectedOption}
                    onChange={this.handleChangeSelect}
                    options={options}
                    placeholder="尺寸大小"
                    className="rb-shoppingcart-select"
                  />
                </div>
                <div className="col-6 ml-2">
                  <p>顏色：</p>
                  <div
                    className="btn-group btn-group-toggle"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-secondary active">
                      <input
                        type="radio"
                        name="options"
                        id="option4"
                        autocomplete="off"
                        checked
                        value={products.proColor}
                      />
                      {products.proColor}
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <p>數量：</p>
                <div className="number-spinner">
                  <span className="ns-btn">
                    <a data-dir="dwn" onClick={this.qtyDown}>
                      <span className="icon-minus" />
                    </a>
                  </span>
                  <input
                    id="qty"
                    type="text"
                    className="pl-ns-value"
                    value={this.state.qty}
                    maxlength="2"
                    onchange={this.value}
                  />
                  <span className="ns-btn">
                    <a data-dir="up" onClick={this.qtyPlus}>
                      <span className="icon-plus" />
                    </a>
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button className="rb-themeBtn-w"
                  onClick={this.collect}>
                  <i class="fas fa-heart pr-2"></i>
                  加入追蹤
                  </button>

                <button
                  className="rb-themeBtn-main-w ml-3"
                  onClick={this.getInCart}
                >
                  <i className="fas fa-cart-plus pr-2" />
                  加入購物車
                  </button>
              </div>
            </div>
          </div>

          <div className="col-xs-12 my-5 rb-tab">
            <nav>
              <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  商品規格
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
                  相關類別
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
                  退換貨須知
                  </a>
              </div>
            </nav>
            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <p>{products.proSpec}</p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <p>{products.proType}</p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <p>
                  為簡化及加速取得適合商品的流程，取貨後如有不適合的商品，請於7日鑑賞期內於線上辦理退貨申請，
                    <br />
                  您可利用超商退貨通服務寄回退貨（如您購買5件，1件不合適／不喜歡，僅需要把不適合的1件退回即可）。
                    <br />
                    <br />
                  申請方式：
                    <br />
                  請您登入ININSPORT的會員中心訂單查詢中點選「退貨」，並將商品完成「密封包裝」後，至鄰近的指定超商門市(請參閱退貨服務說明)櫃台辦理退貨並領取收據即可完成。
                    <br />
                    <br />
                  若您仍需要的該款商品其他尺寸，請重新下單訂購即可，原不適合的退貨退款金額退回方式，為整筆信用卡金額刷退，退款日期需作業時間，請耐心等待。
                    <br />
                  提醒您，退換貨商品的運費為免費，若原先符合滿額贈活動，後因退貨而未達活動標準時，也需煩請您將滿額贈品一併退回喔。
                    <br />
                  退換貨服務的操作方式請參考【退換貨服務】操作說明。
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        
          <SimpleSliderLiked />
        </div>

      </React.Fragment>
    );
  }

  // componentDidUpdate() {
  //   $("#prospec").addClass("show");
  // }
}

export default Productsdetail;
