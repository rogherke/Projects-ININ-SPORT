import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./ro_product_pagination.scss";
import $ from 'jquery';
import MallFloatBar from "../nav/mallFloatBar";
class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pro: [],
      //---------------------------------------------------------------
      totalPage: 0,
      currentPage: 1,
      perPage: 16,  //一次10筆資料
      upperPageBound: 5,  //設定每組最高的分頁數字
      lowerPageBound: 0,  //設定每組最低的分頁數字
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3 //設定每組會有幾個分頁數字
      //---------------------------------------------------------------
    }
  }

  //加入購物車
  getInCart = (evt) => {
    evt.preventDefault()
    //設個購物車推進去
    var cart = []
    var a = JSON.parse(localStorage.getItem("buyCart"))
    var b = parseInt(evt.target.dataset.all)
    var c = this.state.pro
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


  //---------------------------------------------------------------
  //按下...計算下一組要產生的分頁數字
  btnIncrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound + this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound + this.state.pageBound
    });
    let listid = this.state.upperPageBound + 1;
    console.log("btnIncrementClick:" + listid)
    this.getproduct(listid)
  }
  //按下...計算上一組要產生的分頁數字
  btnDecrementClick = () => {
    this.setState({
      upperPageBound: this.state.upperPageBound - this.state.pageBound,
      lowerPageBound: this.state.lowerPageBound - this.state.pageBound
    });
    let listid = this.state.upperPageBound - this.state.pageBound;
    console.log("btnDecrementClick:" + listid)
    this.getproduct(listid)
  }

  btnPrevClick = () => {
    if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
      this.setState({
        upperPageBound: this.state.upperPageBound - this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound - this.state.pageBound
      });
    }
    let listid = parseInt(this.state.currentPage) - 1;
    console.log("btnPrevClick:" + listid)
    this.getproduct(listid)
  }

  btnNextClick = () => {
    // console.log(this.state.currentPage)  
    // console.log(this.state.upperPageBound)

    if ((this.state.currentPage + 1) > this.state.upperPageBound) {
      this.setState({
        upperPageBound: this.state.upperPageBound + this.state.pageBound,
        lowerPageBound: this.state.lowerPageBound + this.state.pageBound
      });
    }
    let listid = parseInt(this.state.currentPage) + 1;

    console.log("btnNextClick:" + listid)
    this.getproduct(listid)
  }
  paging = e => {
    e.preventDefault();
    console.log("paging:" + $(e.target).text())
    this.getproduct($(e.target).text())
  }

  componentDidMount() {
    // this.handleChange();
    this.getproduct(1);
  }
  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li#' + this.state.currentPage).addClass('active');
  }


  getproduct(page) {
    if(this.props.match.params.proTag > 0){
    fetch("http://localhost:3000/pro/productsPage2/" + page + "/" + this.props.match.params.proTag)
      .then(res => res.json())
      .then(pro => {
        //console.log(pro)
        console.log("perPage:" + this.state.perPage);
        console.log("page:" + page)
        this.setState({
          pro: pro.datas,
          totalPage: Math.ceil(pro.TotalCount / this.state.perPage), //計算出總共幾頁
          currentPage: page
        })

        //計算 prev next 按鈕是否出現
        this.setState({ isNextBtnActive: 'disabled' });
        this.setState({ isPrevBtnActive: 'disabled' });
        if (this.state.totalPage === parseInt(page) && this.state.totalPage > 1) {
          this.setState({ isPrevBtnActive: '' });
        }
        else if (parseInt(page) === 1 && this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
        }
        else if (this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
          this.setState({ isPrevBtnActive: '' });
        }
      })
    } else {
      fetch("http://localhost:3000/pro/productsPage2/" + page)
      .then(res => res.json())
      .then(pro => {
        //console.log(pro)
        console.log("perPage:" + this.state.perPage);
        console.log("page:" + page)
        this.setState({
          pro: pro.datas,
          totalPage: Math.ceil(pro.TotalCount / this.state.perPage), //計算出總共幾頁
          currentPage: page
        })

        //計算 prev next 按鈕是否出現
        this.setState({ isNextBtnActive: 'disabled' });
        this.setState({ isPrevBtnActive: 'disabled' });
        if (this.state.totalPage === parseInt(page) && this.state.totalPage > 1) {
          this.setState({ isPrevBtnActive: '' });
        }
        else if (parseInt(page) === 1 && this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
        }
        else if (this.state.totalPage > 1) {
          this.setState({ isNextBtnActive: '' });
          this.setState({ isPrevBtnActive: '' });
        }
      })
    }
  }

  render() {

    const { totalPage, currentPage, perPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;

    //產生頁碼
    const pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers)
  
    const renderPageNumbers = pageNumbers.map(number => {
      if (number === 1 && currentPage === 1) {
        return (
          <li key={number} className='page-item' id={number}><a href="#" className="page-link" id={number} onClick={this.paging}>{number}</a></li>
        )
      }
      else if ((number < upperPageBound + 1) && number > lowerPageBound) {
        return (
          <li key={number} id={number} className='page-item'><a href="#" className="page-link" id={number} onClick={this.paging}>{number}</a></li>
        )
      }
    });

    //按下...產生下一組分頁數字
    let pageIncrementBtn = null;
    if (pageNumbers.length > upperPageBound) {
      pageIncrementBtn = <li className="page-item"><a href="#" className="page-link" onClick={this.btnIncrementClick}> &hellip; </a></li>
    }

    //按下...產生上一組分頁數字
    let pageDecrementBtn = null;
    if (lowerPageBound >= 1) {
      pageDecrementBtn = <li className="page-item"><a href="#" className="page-link" onClick={this.btnDecrementClick}> &hellip; </a></li>
    }

    //判斷是否產生prev1按鈕
    let renderPrevBtn = null;
    if (isPrevBtnActive !== 'disabled') {
      renderPrevBtn = <li className="page-item"><a className="page-link" href='#' id="btnPrev" onClick={this.btnPrevClick}> ❮ </a></li>
    }

    //判斷是否產生next按鈕
    let renderNextBtn = null;
    if (isNextBtnActive !== 'disabled') {
      renderNextBtn = <li className="page-item"><a className="page-link" href='#' id="btnNext" onClick={this.btnNextClick}> ❯</a></li>
    }
    console.log(this.state.pro)
    return (
      <React.Fragment>
          <MallFloatBar/>
        <div class="container ro_product5 mt-5">
          <div className="row">
            <div className="col-12 row">
              {this.state.pro.map(products =>
                <div className="col-3" key={products.proSid}>
                  <div className="product-grid3">
                    <div className="product-image3">
                      <Link to={`/store/productdetail/${products.proSid}`} >
                        <img
                          src={(`../../images/${products.proName}.jpg`)}
                          alt="pic"
                          className="pic-1"
                        />
                        <img
                          src={(`../../images/${products.proName}2.jpg`)}
                          alt="pic"
                          className="pic-2"
                        />
                      </Link>
                      <ul className="social">
                        <li>
                          <Link to="# " href="" title="追蹤">
                            <i className="fa fa-shopping-bag" data-all={products.proNum}  onClick={this.collect}/>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" title="加入購物車">
                            <i className="fa fa-shopping-cart" data-all={products.proNum} onClick={this.getInCart}/>
                          </Link>
                        </li>
                      </ul>
                      <span className="product-new-label">New</span>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <Link to="">{products.proName}</Link>
                      </h3>
                      <div class="price">
                        ${products.proPrice}
                        <span>${products.proOPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------- */}
        <nav aria-label="Page navigation example text-center" className="mt-5">
          <ul className="pagination  justify-content-center">
            {renderPrevBtn}
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            {renderNextBtn}
          </ul>
        </nav>
        {/* --------------------------------------------------------------- */}


      </React.Fragment>

    )
  }
}
export default Pagination;