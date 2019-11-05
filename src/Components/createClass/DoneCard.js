import React, { Component } from "react";
import "./DoneCard.scss";
import Moment from "react-moment";
import "moment-timezone";

class doneCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  togo = evt => {
    evt.preventDefault();
    window.location.href = "/listClass/";
  };

  togo2 = evt => {
    evt.preventDefault();
    window.location.href = "/CreateClass/";
  };

  togo3 = evt => {
    evt.preventDefault();
    window.location.href = "/Home/";
  };

  go = (evt) => {
    evt.preventDefault();
    window.location.href = '/DetailedClass/' + this.props.dones[0].claSid
  }

  //追蹤
  collect = (evt) => {
    evt.preventDefault()
    evt.preventDefault();
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"]
      var num = this.props.dones[0]["claSid"]
      fetch("http://localhost:3000/track/check2", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          claSid: num,
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
      <React.Fragment>
        {this.props.dones.map(done => (
          <div className="rb-long-bg-h mt-4 pb-5">
            <div className="rb-long-bg pb-5" />
            <div className="container rb-z">
              <div className="row mb-4">
                <h3 className="text-center rb-session-title-w mt-5">
                  開課完成
                </h3>

                <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn rb-cla-style">
                  <div key={done.claSid}>
                    <div className="row">
                      <div className="col-3 rb-cla-img">
                        <img
                          id="img1"
                          src={`http://localhost:3000/images/${done.claImg}`}
                          alt="圖示"
                          title="圖示"
                        />
                      </div>
                      <div className="col-9">
                        <div className="rb-classTitle">
                          <i class="fas fa-dumbbell mr-2" />
                          課程名稱：
                          {done.claName}
                        </div>
                        <div className="rb-classItem">
                          活動項目：{done.claSport}
                        </div>
                        <div className="row d-flex justify-content-between">
                          <div className="col-5 rb-class-block1">
                            <div>開課教練：{done.memName}</div>
                            <div>
                              開課時間：
                              <Moment format="YYYY/MM/DD HH:mm">
                                {done.claTimeUp}
                              </Moment>
                            </div>
                            <div>
                              結束時間：
                              <Moment format="YYYY/MM/DD HH:mm">
                                {done.claTimeEnd}
                              </Moment>
                            </div>
                            <div>開課縣市：{done.claCity}</div>
                            <div>開課地點：{done.claArea}{done.claAddress}</div>
                            <div>性別限制：{done.claGender}</div>
                            <div>課程簡介：{done.claInfo}</div>
                          </div>
                          <div className="col-6 rb-class-block2 mr-3 ">
                            <div>課程費用：{done.claCost} </div>
                            <div>
                              報名截止日期：
                              <Moment format="YYYY/MM/DD HH:mm">
                                {done.claCutoff}
                              </Moment>
                            </div>
                            <div>目前報名人數/人數限制：{done.claPleNum}</div>

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
                                  <a href="#" onClick={this.collect} >
                                    <i class="fas fa-heart rb-heart" />
                                    追蹤
                                  </a>
                                </li>
                              </ul>
                              <button
                                className="rb-themeBtn-main-w-small"
                                onClick={this.go}
                              >
                                詳細資料
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mb-3 mt-5">
                    <button className="rb-themeBtn-w" onClick={this.togo}>
                      返回課程列表
                    </button>

                    <button
                      className="rb-themeBtn-main-w ml-3"
                      onClick={this.togo2}
                    >
                      繼續開課
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default doneCard;
