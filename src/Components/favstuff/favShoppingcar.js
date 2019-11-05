import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./favShoppingcar.scss";
import $ from "jquery";
import Moment from "react-moment";
import "moment-timezone";
import FavPro from "./favPro";
import FavCla from "./favCla";
import FavAct from "./favAct";

import Modal from "react-responsive-modal";
import Login from "../members/login";

var c = JSON.parse(localStorage.getItem("members"));

class favShoppingcar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claFav: [],
      actFav: [],
      proFav: []
     
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
    this.getFav();
  }

  


  getFav = () => {
    if (c["isLogin"]) {
      fetch("http://localhost:3000/track/shop/" + c.members.memSid)
        .then(res => res.json())
        .then(FavEvt => {
          this.setState({
            proFav: FavEvt
          });
        });
      fetch("http://localhost:3000/track/cla/" + c.members.memSid)
        .then(res => res.json())
        .then(FavEvt => {
          this.setState({ claFav: FavEvt });
        });
      fetch("http://localhost:3000/track/act/" + c.members.memSid)
        .then(res => res.json())
        .then(FavEvt => {
          this.setState({ actFav: FavEvt });
        });
    }
  };



  gotoClaCheckout = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store/cla_checkout");
  };

  //   清除
  delete = fav => {
    fetch("http://localhost:3000/track/track/" + fav, {
      method: "delete",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.getFav();
      });
  };

  gotoCla = evt => {
    window.location.href = "/ListClass/";
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          {c["isLogin"] ? (
            <div>
              <FavPro proFav={this.state.proFav} delete={this.delete} />
              <FavCla claFav={this.state.claFav} delete={this.delete} />
              <FavAct actFav={this.state.actFav} delete={this.delete} />
            </div>
          ) : (
            <div class="rb-noItemCart">
            <i class="far fa-user rb-bigIcon my-4"></i>
             
              <h6 className="mb-3">您尚未登入</h6>
              <button className="rb-themeBtn-w"  onClick={this.onOpenModal}>
                <i class="fas fa-running" />
                去登入
              </button>
              <Modal open={open} onClose={this.onCloseModal} center>
                      <Login />
                    </Modal>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default favShoppingcar;
