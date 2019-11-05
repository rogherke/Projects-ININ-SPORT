import React, { Component } from "react";
// import "./DetailedActive.scss";
import Moment from "react-moment";
import "moment-timezone";
import Modal from "react-responsive-modal";
import Login from "../members/login";

import NormalNav from "../nav/normalNav";
import RecommendAct from "../recommendAct/RecommendAct";
import SimpleSlider2 from "../mall/ro_SimpleSlider2";

class DetailedActive extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
    this.state = {
      detailed: [],
      open: false,
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  gotoStore = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/store");
  };

  gotoMember = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/memcenter");
  };

  gotoInfo = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/allshoppingcar");
  };

  

  componentDidMount() {
    this.handleChange();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange() {
    fetch("http://localhost:3000/api2/active/" + this.props.match.params.actSid)
      .then(res => res.json())
      .then(detailed => {
        console.log(detailed);
        this.setState({ detailed: detailed[0] });
      });
    fetch("http://localhost:3000/pro/productsPage/2")
      .then(res => res.json())
      .then(pro2 => {
        console.log(pro2);
        this.setState({ products: pro2.datas });
      });
  }

  togo2 = evt => {
    evt.preventDefault();
    evt.preventDefault();
    var a = JSON.parse(localStorage.getItem("members"));
    if (!a.isLogin) {
      this.onOpenModal();
    } else {
      var b = this.state.detailed;
      var e = new Date();
      fetch("http://localhost:3000/join/check2", {
        method: "POST",
        body: JSON.stringify({
          memSid: a.members.memSid,
          actSid: b.actSid,
          inCreate: e
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}
        .then(track => {
          console.log(track.message.message);
          alert(track.message.message);
        });
    }
  };

  //追蹤
  collect = evt => {
    evt.preventDefault();
    evt.preventDefault();
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"];
      var num = this.state.detailed["actSid"];
      fetch("http://localhost:3000/track/check3", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          actSid: num
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}
        .then(track => {
          console.log(track.message.message);
          alert(track.message.message);
        });
    } else {
      alert("請先登入");
    }
  };

  render() {
    const { open } = this.state;
    var a = this.state.detailed;
    return (
      <React.Fragment>
        <NormalNav />

        <div className="rb-float-icon">
          <nav class="social">
            <ul>
              <li>
                <a href="ref">
                  <i class="fab fa-facebook-square" />
                  <b>Facebook</b>
                </a>
              </li>
              <li onClick={this.collect}>
                <a href="ref">
                  <i class="fas fa-heart rb-heart" />
                  <b>追蹤</b>
                </a>
              </li>
              <li onClick={this.togo2}>
                <a href="ref">
                  <i class="fas fa-plus-circle" />
                  <b>報名參加</b>
                </a>
              </li>
              <li onClick={this.gotoMember}>
                <a href="ref">
                  <i class="far fa-user-circle" />
                  <b>會員中心</b>
                </a>
              </li>
              <li onClick={this.gotoInfo}>
                <a href="ref">
                  <i class="far fa-bell" />
                  <b>訊息中心</b>
                </a>
              </li>
              <li onClick={this.gotoStore}>
                <a href="ref">
                <i class="fas fa-shopping-bag"></i>
                  <b>購物中心</b>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rb-long-bg-h mt-4 pb-5">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">
                活動詳細資料
              </h3>

              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn rb-cla-style">
                <div>
                  <div className="row ">
                    <div className="col-3 rb-cla-img">
                      <img
                        id="img1"
                        src={`http://localhost:3000/images/${a.actImg}`}
                        alt="圖示"
                        title="圖示"
                      />
                    </div>
                    <div className="col-9">
                      <div className="rb-classTitle">
                        <i class="far fa-grin-beam mr-2" />
                        活動名稱：
                        {a.actName}
                      </div>
                      <div className="rb-classItem">活動項目：{a.actSport}</div>
                      <div className="row d-flex justify-content-between">
                        <div className="col-5 rb-class-block1">
                          <div>主辦人：{a.memName}</div>
                          <div>
                            活動時間：
                            <Moment format="YYYY/MM/DD HH:mm">
                              {a.actTimeUp}
                            </Moment>
                          </div>
                          <div>
                            結束時間：
                            <Moment format="YYYY/MM/DD HH:mm">
                              {a.actTimeEnd}
                            </Moment>
                          </div>
                          <div>
                            開課縣市：{a.actCity}
                            {a.actArea}
                          </div>
                          <div>開課地點：{a.actAddress}</div>
                          <div>性別限制：{a.actGender}</div>
                          <div>課程簡介：{a.actInfo}</div>
                        </div>
                        <div className="col-6 rb-class-block2 mr-3 ">
                          <div>
                            報名截止日期：
                            <Moment format="YYYY/MM/DD HH:mm">
                              {a.actCutoff}
                            </Moment>
                          </div>
                          <div>目前報名人數/人數限制：{a.actPleNum}</div>
                          <Modal open={open} onClose={this.onCloseModal} center>
                            <Login />
                          </Modal>
                          <div className=" rb-classButton d-flex justify-content-end align-items-center mt-5 ">
                            <ul class="socialIcons mr-2 my-0">
                              <li class="facebook">
                                <a href="#">
                                  <i class="fab fa-facebook-f rb-facebook" />
                                  Facebook
                                </a>
                              </li>
                            </ul>

                            <ul class="socialIcons mr-2 my-0">
                              <li class="rb-favStuff">
                                <a href="#" onClick={this.collect}>
                                  <i class="fas fa-heart rb-heart" />
                                  追蹤
                                </a>
                              </li>
                            </ul>
                            <button
                              className="rb-themeBtn-main-w-small"
                              onClick={this.togo2}
                            >
                              <i class="fas fa-plus-circle mr-1" /> 報名參加
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RecommendAct />
        <SimpleSlider2 products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default DetailedActive;
