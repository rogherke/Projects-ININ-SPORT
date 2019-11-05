import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from "./Components/home/Home";
import Nav from "./Components/nav/Nav";
import NavLogout from "./Components/nav/Nav_login";
import Header from "./Components/mall/header";
import NormalNav from "./Components/nav/normalNav";
import Footer from "./Components/footer/Footer";
import MobileFooter from "./Components/footer/mobileFooter";

import CreateClass from "./Components/createClass/createClass";
import DoneClass from "./Components/createClass/DoneClass";
import ListClass from "./Components/listClass/ListClass";
import Search from "./Components/listClass/Search";
import DetailedClass from "./Components/createClass/DetailedClass";
import Disclaimer from "./Components/createClass/Disclaimer";

import CreateActive from "./Components/createActive/CreateActive";
import DoneActive from "./Components/createActive/DoneActive";
import ListActive from "./Components/listActive/ListActive";
import SearchAct from "./Components/listActive/SearchAct";
import DetailedActive from "./Components/createActive/DetailedActive";
import Disclaimer2 from "./Components/createActive/Disclaimer2";

import Teammates from "./Components/footer/teammates";
/*教練申請流程*/
import Application from "./Components/coach/ro_coach_application";
import Application2 from "./Components/coach/ro_coach_application2";
import Application3 from "./Components/coach/ro_coach_application3";
import Application4 from "./Components/coach/ro_coach_application4";

import Forget from "./Components/members/forget";
import ForgetSuccess from "./Components/members/forgetSuccess";
import PasswordReset from "./Components/members/passwordReset";
import SignUp from "./Components/members/signUp";
import SignUpSuccess from "./Components/members/signUpSuccess";
import Store from "./Components/Store";
import MemCenter from "./Components/memCenter/memCenter";
import MemberForm from "./Components/members/memberForm";
import MemberChange from "./Components/members/memberChange";
import OrderCheck from "./Components/memCenter/orderCheck";
import PlaceLooking from "./Components/placelooking/PlaceLooking";

import AllShoppingCar from "./Components/allShoppingCart/allShoppingCart";
import ProductDetail from "./Components/mall/ro_productdetail";

/* 購物流程 */
import Checkout from "./Components/mall/ro_checkout";
import Checkout2 from "./Components/mall/ro_checkout2";
import Checkout3 from "./Components/mall/ro_checkout3";
import Checkout4 from "./Components/mall/ro_checkout4";
import Pagination from "./Components/mall/ro_product_pagination";

/*文章*/
import RoArticle from "./Components/article/ro_article";

/* 課程結帳流程 */
import ClaCheckout from "./Components/listClass/cla_checkout";
import ClaCheckout2 from "./Components/listClass/cla_checkout2";
import ClaCheckout3 from "./Components/listClass/cla_checkout3";

import "./Components/rbFormalStyle/rbFormalStyle.scss";
import "./Components/rbFormalStyle/rbBreakpoint.scss";
import "./App.scss";

if (localStorage.getItem("members") != null) {
  var a = JSON.parse(localStorage.getItem("members"));
} else {
  localStorage.setItem("members", JSON.stringify({ isLogin: false }));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    var a = JSON.parse(localStorage.getItem("members"));
    if (a.isLogin) {
      var a = JSON.parse(localStorage.getItem("members"));
      fetch("http://localhost:3000/mem/members/" + a.members.memEmail)
        .then(res => res.json())
        .then(members => {
          localStorage.setItem(
            "members",
            JSON.stringify({ members: members[0], isLogin: true })
          );
        });
    }
  }

  render() {
    var a = JSON.parse(localStorage.getItem("members"));
    return (
      <BrowserRouter>
        <React.Fragment>
          {a.isLogin ? <NavLogout /> : <Nav />}
          <Route exact path="/" component={NormalNav} />
          <Route path="/home" component={NormalNav} />
          <Route path="/store" component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {/* 找場地 */}
          <Route path="/placeLooking" component={PlaceLooking} />
          {/* 開課程 */}
          <Route path="/Disclaimer" component={Disclaimer} />
          <Route path="/createClass" component={CreateClass} />
          <Route path="/doneClass" component={DoneClass} />
          <Route path="/listClass" component={ListClass} />
          <Route path="/search" component={Search} />
          <Route path="/detailedClass/:claSid" component={DetailedClass} />
          {/* 開活動 */}
          <Route path="/Disclaimer2" component={Disclaimer2} />
          <Route path="/CreateActive" component={CreateActive} />
          <Route path="/doneActive" component={DoneActive} />
          <Route path="/listActive" component={ListActive} />
          <Route path="/searchAct" component={SearchAct} />
          <Route path="/detailedActive/:actSid" component={DetailedActive} />
          {/* 會員中心 */}
          <Route exact path="/memcenter" component={MemCenter} />
          <Route path="/memcenter/sport" component={MemCenter} />
          <Route path="/memcenter/member" component={MemberChange} />
          <Route path="/memcenter/order" component={OrderCheck} />
          {/* 註冊 */}
          <Route exact path="/signup" component={SignUp} />
          <Route
            exact
            path="/signupsuccess/:memEmail"
            component={SignUpSuccess}
          />
          {/* 忘記密碼 */}
          <Route exact path="/forget" component={Forget} />
          <Route
            exact
            path="/forgetSuccess/:memEmail"
            component={ForgetSuccess}
          />
          {/* 變更密碼 */}
          <Route
            exact
            path="/passwordReset/:memEmail"
            component={PasswordReset}
          />
          {/* {個人資料設定} */}
          <Route path="/memberform/:memEmail" component={MemberForm} />
          {/* 購物中心 */}
          <Route exact path="/store" component={Store} />
          <Route
            path="/store/productdetail/:proSid"
            component={ProductDetail}
          />
          {/* 購物流程 */}
          {/* http://localhost:3000/store/Checkout */}
          <Route exact path="/store/checkout" component={Checkout} />
          {/* http://localhost:3000/store/Checkout2 */}
          <Route exact path="/store/checkout2" component={Checkout2} />
          {/* http://localhost:3000/store/Checkout3 */}
          <Route exact path="/store/checkout3" component={Checkout3} />
          {/* http://localhost:3000/store/Checkout4 */}
          <Route exact path="/store/checkout4" component={Checkout4} />
          {/* http://localhost:3000/store/Pagination */}
          <Route exact path="/store/pagination" component={Pagination} />
          <Route path="/store/pagination/:proTag" component={Pagination} />

          {/* 課程結帳流程 */}
          {/* http://localhost:3000/store/cla_checkout */}
          <Route exact path="/store/cla_checkout" component={ClaCheckout} />
          {/* http://localhost:3000/store/Checkout2 */}
          <Route exact path="/store/cla_checkout2" component={ClaCheckout2} />
          {/* http://localhost:3000/store/Checkout3 */}
          <Route exact path="/store/cla_checkout3" component={ClaCheckout3} />

          {/* <Route path="/store/shoppingcar" component={ShoppingCar} /> */}
          {/* 課程和商品購物車 */}
          <Route path="/allshoppingcar" component={AllShoppingCar} />

 {/* 團隊 */}
  <Route path="/teammates" component={Teammates} />
          {/* {教練申請} */}
          {/* http://localhost:3000/coach/application */}
          <Route exact path="/coach/application" component={Application} />
          {/* http://localhost:3000/coach/application2 */}
          <Route exact path="/coach/application2" component={Application2} />
          {/* http://localhost:3000/coach/application3 */}
          <Route exact path="/coach/application3" component={Application3} />
          {/* http://localhost:3000/coach/application4 */}
          <Route exact path="/coach/application4" component={Application4} />

          {/* {文章} */}
          {/* http://localhost:3000/article */}
          <Route path="/article/article" component={RoArticle} />

          <Footer />
          <MobileFooter />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
