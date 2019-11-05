import React, { Component } from "react";
import "./ro_coach_application.scss";
import NormalNav from "../nav/normalNav";
import Modal from "react-responsive-modal";
import Login from "../members/login";

class Application extends Component {

  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  add1 = evt => {
    evt.preventDefault();
    window.location.href = "/Home/";
  };

  add2 = evt => {
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("members"))
    if (a.isLogin) {
      window.location.href = "/coach/application2/";
    } else {
      this.onOpenModal()
    }
  };


  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <NormalNav />

        <div className="rb-long-bg-h mt-4 pb-5">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">
                教練申請需知
              </h3>

              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn">
                <div className="coa-pic col-12">
                  <div className="row">
                    <div className="col-12 col-lg-4"></div>
                    <div className="col-12 col-lg-4"></div>
                    <div className="col-12 col-lg-4">
                      <p className="coa-txt">
                        <h2>專屬於你</h2>

                        成為教練享有<br />

                        不定期的商品折扣優惠<br />

                        甚至還有機會<br />

                        能成為ININ特約教練 <br />
                      </p>

                      <div className="d-flex justify-content-start my-3">
                        <button className="rb-themeBtn-w" onClick={this.add1}>
                          取消
                        </button>
                        <button className="rb-themeBtn-main-w ml-3" onClick={this.add2}>
                          申請
                        </button>
                      </div>
                      <Modal open={open} onClose={this.onCloseModal} center>
                        <Login />
                      </Modal>
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
export default Application;
