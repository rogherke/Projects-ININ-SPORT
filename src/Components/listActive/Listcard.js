import React, { Component } from "react";
import $ from "jquery";
import Moment from 'react-moment';
import 'moment-timezone';

class ListCard extends Component {
  constructor(props) {
    super(props)
    // this.state = {

    // }

  }
  togo = (evt) => {
    evt.preventDefault();
    console.log(evt.target.dataset.id)
    window.location.href = '/DetailedActive/' + evt.target.dataset.id
  }

  collect = (evt) => {
    evt.preventDefault()
    evt.preventDefault();
    var c = JSON.parse(localStorage.getItem("members"));
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"]
      var num = this.props.act[0]["actSid"]
      fetch("http://localhost:3000/track/check3", {
        method: "POST",
        body: JSON.stringify({
          memSid: sid,
          actSid: num,
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
        {this.props.act.map(act => (
          <div className="container col-12 mt-3 mb-2 rb-block-w-list py-3 px-3 rb-logIn rb-cla-style">
            <div key={act.actSid}>
              <div className="row">
                <div className="col-3 rb-cla-img">
                  <img
                    id="img1"
                    src={`http://localhost:3000/images/${act.actImg}`}
                    alt="圖示"
                    title="圖示"
                  />
                </div>
                <div className="col-9">
                  <div className="rb-classTitle">
                    <i class="far fa-grin-beam mr-2"></i>
                    活動名稱：
                        {act.actName}
                  </div>
                  <div className="rb-classItem">活動項目：{act.actSport}</div>
                  <div className="row d-flex justify-content-between">
                    <div className="col-5 rb-class-block1">
                      <div>主辦人：{act.memName}</div>
                      <div>活動時間：<Moment format="YYYY/MM/DD HH:mm">{act.actTimeUp}</Moment></div>
                      <div>結束時間：<Moment format="YYYY/MM/DD HH:mm">{act.actTimeEnd}</Moment></div>
                      <div>活動縣市：{act.actCity}{act.actArea}</div>
                      <div>活動地點：{act.actAddress}</div>
                      <div>性別限制：{act.actGender}</div>
                      <div>活動簡介：{act.actInfo}</div>
                    </div>
                    <div className="col-6 rb-class-block2 mr-3">
                      <div>報名截止日期：<Moment format="YYYY/MM/DD HH:mm">{act.actCutoff}</Moment></div>
                      <div>目前報名人數/人數限制：{act.actPleNum}</div>

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
                          onClick={this.togo}
                          data-id={act.actSid}
                        >
                          詳細資料
                            </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}
export default ListCard;    