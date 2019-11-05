import React, { Component } from "react";
import "./DetailedClass.scss";
import Moment from "react-moment";
import "moment-timezone";

import RecommendAct from "../recommendAct/RecommendAct";
import SimpleSlider2 from "../mall/ro_SimpleSlider2";
import NormalNav from "../nav/normalNav";

class detailedClass extends Component {
  constructor(props) {
    super(props);
    this.state = { detailed: [], products: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.handleChange();
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

  handleChange() {
    fetch("http://localhost:3000/api/class/" + this.props.match.params.claSid)
      .then(res => res.json())
      .then(detailed => {
        this.setState({ detailed: detailed[0] });
      });
    fetch("http://localhost:3000/pro/productsPage/3")
      .then(res => res.json())
      .then(pro2 => {
        console.log(pro2);
        this.setState({ products: pro2.datas });
      });
  }

  togo2 = evt => {
    evt.preventDefault();
    var a = [];
    a.push(this.state.detailed);
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      fetch("http://localhost:3000/join/check", {
        method: "POST",
        body: JSON.stringify({
          memSid: c.members.memSid,
          claSid: this.state.detailed.claSid
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}
        .then(join => {
          console.log(join.message.message);
          if (join.message.message === "參加") {
            localStorage.setItem("cla", JSON.stringify(a));
            window.location.href = "/allshoppingcar/";
          } else {
            alert(join.message.message);
          }
        });
    } else {
      alert("請先登入");
    }
  };

  //追蹤
  collect = evt => {
    evt.preventDefault();
    evt.preventDefault();
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"];
      var num = this.state.detailed["claSid"];
      fetch("http://localhost:3000/track/check2", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          claSid: num
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json()) //{message:"新增成功"}
        .then(track => {
          alert(track.message.message);
        });
    } else {
      alert("請先登入");
    }
  };

  render() {
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
                課程詳細資料
              </h3>

              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn rb-cla-style">
                <div>
                  <div className="row ">
                    <div className="col-3 rb-cla-img">
                      <img
                        id="img1"
                        src={`http://localhost:3000/images/${a.claImg}`}
                        alt="圖示"
                        title="圖示"
                      />
                    </div>
                    <div className="col-9">
                      <div className="rb-classTitle">
                        <i class="fas fa-dumbbell mr-2" />
                        課程名稱：
                        {a.claName}
                      </div>
                      <div className="rb-classItem">活動項目：{a.claSport}</div>
                      <div className="row d-flex justify-content-between">
                        <div className="col-5 rb-class-block1">
                          <div>開課教練：{a.memName}</div>
                          <div>
                            開課時間：
                            <Moment format="YYYY/MM/DD HH:mm">
                              {a.claTimeUp}
                            </Moment>
                          </div>
                          <div>
                            結束時間：
                            <Moment format="YYYY/MM/DD HH:mm">
                              {a.claTimeEnd}
                            </Moment>
                          </div>
                          <div>
                            開課縣市：{a.claCity}
                            {a.claArea}
                          </div>
                          <div>開課地點：{a.claAddress}</div>
                          <div>性別限制：{a.claGender}</div>
                          <div>課程簡介：{a.claInfo}</div>
                        </div>
                        <div className="col-6 rb-class-block2 mr-3 ">
                          <div>課程費用：{a.claCost} </div>
                          <div>
                            報名截止日期：
                            <Moment format="YYYY/MM/DD HH:mm">
                              {a.claCutoff}
                            </Moment>
                          </div>
                          <div>目前報名人數/人數限制：{a.claPleNum}</div>

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
                              <li class="rb-favStuff" onClick={this.collect}>
                                <a href="#">
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
                  <h3 className="text-center rb-session-title my-5">
                    授課教練資訊
                  </h3>

                  <div className="row">
                    <div className="col-3 text-center rb-trainer-block1">
                      <div className="rb-cla-trainer">
                        <img
                          id="img1"
                          src={`http://localhost:3000/images/${a.coaImg}`}
                          alt="圖示"
                          title="圖示"
                        />
                      </div>
                      <div>教練名稱：{a.memName}</div>
                      <div className="rb-skills">
                        專長：<span>{a.coaSport}</span>
                      </div>
                    </div>
                    <div className="col-9">
                      <div>
                        <h5 className="rb-skills-title">教練專長</h5>
                        <p>{a.coaSport}</p>
                      </div>
                      <div>
                        <h5 className="rb-skills-title">教練經歷</h5>
                        <p>{a.coaInfo}</p>
                      </div>
                      <div>
                        <h5 className="rb-skills-title">教練證照</h5>
                        <p>{a.coaLicense}</p>
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

export default detailedClass;
