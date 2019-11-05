import React, { Component } from "react";

import $ from "jquery";
// import Moment from "moment";
import Moment from 'react-moment';
import 'moment-timezone';


class ListCard extends Component {
  constructor(props) {
    super(props)
  }
  
  togo = (evt) => {
    evt.preventDefault();
    window.location.href = '/DetailedClass/' + evt.target.dataset.id
  }

  //追蹤
  collect = (evt) => {
    evt.preventDefault()
    evt.preventDefault();
    var b = parseInt(evt.target.dataset.id)
    var c = JSON.parse(localStorage.getItem("members"));
    var result = this.props.Cla.filter(v => {
      return (v.claSid === b)
    })
    if (c["isLogin"]) {
      var sid = c["members"]["memSid"]
      var num = result[0]["claSid"]
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
    console.log(this.props.Cla)
    return (
      <React.Fragment>
        {this.props.Cla.map(cla => (
          <div className="container col-12 mt-3 mb-2 rb-block-w-list py-3 px-3 rb-logIn rb-cla-style">
            <div key={cla.claSid}>
              <div className="row">
                <div className="col-3 rb-cla-img">
                  <img
                    id="img1"
                    src={`http://localhost:3000/images/${cla.claImg}`}
                    alt="圖示"
                    title="圖示"
                  />
                </div>
                <div className="col-9">
                  <div className="rb-classTitle">
                    <i class="fas fa-dumbbell mr-2" />
                    課程名稱：
                    {cla.claName}
                  </div>
                  <div className="rb-classItem">活動項目：{cla.claSport}</div>
                  <div className="row d-flex justify-content-between">
                    <div className="col-5 rb-class-block1">
                      <div>開課教練：{cla.memName}</div>
                      <div>開課時間：<Moment format="YYYY/MM/DD HH:mm">{cla.claTimeUp}</Moment></div>
                      <div>結束時間：<Moment format="YYYY/MM/DD HH:mm">{cla.claTimeEnd}</Moment></div>
                      <div>開課縣市：{cla.claCity}{cla.claArea}</div>
                      <div>開課地點：{cla.claAddress}</div>
                      <div>性別限制：{cla.claGender}</div>
                      <div>課程簡介：{cla.claInfo}</div>
                    </div>
                    <div className="col-6 rb-class-block2 mr-3">
                      <div>課程費用：{cla.claCost} </div>
                      <div>報名截止日期：<Moment format="YYYY/MM/DD HH:mm">{cla.claCutoff}</Moment></div>
                      <div>目前報名人數/人數限制：{cla.claPleNum}</div>

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
                          <li class="rb-favStuff" >
                            <a href="#" data-id={cla.claSid} onClick={this.collect} >
                              <i class="fas fa-heart rb-heart" />
                              追蹤
                            </a>
                          </li>
                        </ul>
                        <button
                          className="rb-themeBtn-main-w-small"
                          onClick={this.togo}
                          data-id={cla.claSid}
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
    );
  }
}
export default ListCard;
