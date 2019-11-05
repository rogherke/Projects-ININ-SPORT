import React, { Component } from "react";
import "./memCenter.scss";
import { BrowserRouter, Router, Link } from "react-router-dom";
import MallFloatBar from "../nav/mallFloatBar";
import MemNav from "../nav/memNav";
import $ from "jquery";
import 'moment-timezone';
import Moment from 'react-moment';


class MemCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinAct: [],
      joinCla: [],
      act: [],
      cla: []
    }
  }

  componentDidMount() {
    this.getAll()
    $(function () {
      var len = 20; // 超過50個字以"..."取代
      $(".JQellipsis").each(function (i) {
        if ($(this).text().length > len) {
          $(this).attr("title", $(this).text());
          var text =
            $(this)
              .text()
              .substring(0, len - 1) + "...";
          $(this).text(text);
        }
      });
    });
  }

  getAll() {
    var a = JSON.parse(localStorage.getItem("members"))
    fetch("http://localhost:3000/join/cla/" + a.members.memSid)
      .then(res => res.json())
      .then(order => {
        this.setState({ joinCla: order });
      });
    fetch("http://localhost:3000/api2/all/" + a.members.memSid)
      .then(res => res.json())
      .then(order => {
        this.setState({ act: order });
      });
    fetch("http://localhost:3000/join/act/" + a.members.memSid)
      .then(res => res.json())
      .then(order => {
        this.setState({ joinAct: order });
      });
    fetch("http://localhost:3000/api/all/" + a.members.memSid)
      .then(res => res.json())
      .then(order => {
        this.setState({ cla: order });
      });
  }

  dropOut = (evt) => {
    evt.preventDefault()
    var x = evt.target.dataset.get
    fetch("http://localhost:3000/join/join/" + x, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(data => {
        this.getAll();
      });
  }

  cancelAct = (evt) => {
    evt.preventDefault()
    var g = evt.target.dataset.get
    fetch("http://localhost:3000/api2/active/" + g, {
      method: 'PUT',
      body: JSON.stringify({ actActive: 0 }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(data => {
        this.getAll();
      })
  }

  cancelCla = (evt) => {
    evt.preventDefault()
    var g = evt.target.dataset.get
    fetch("http://localhost:3000/api/class/" + g, {
      method: 'PUT',
      body: JSON.stringify({ claActive: 0 }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(data => {
        this.getAll();
      })
  }

  render() {
    var a = this.state.joinAct
    var b = this.state.joinCla
    var c = this.state.act
    var d = this.state.cla
    console.log(this.state)
    return (

      <React.Fragment>
        <MallFloatBar />
        <MemNav />
        <div className="rb-long-bg-h mt-4 pb-5">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">會員中心</h3>
              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn">
                <h5 className="text-center my-3 rb-memberCenterIcon">
                  <i class="far fa-grin-beam d-block my-3" />
                  您目前參加的活動
                </h5>
                {a.map(a => (
                  <div className="row rb-memberCenter">
                    <div className="col-2">
                      <div className="rb-memberCenterImg  mx-auto ">
                        <img
                          src={`http://localhost:3000/images/${a.actImg}`}
                          alt={a.actName}
                          className="pic-2"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <small className="text-black-50">活動名稱：</small>
                      <div className="rb-memberName ">
                        <Link
                          to={`/DetailedActive/${a.actSid}`}
                          title={a.actName}
                          className="JQellipsis"
                        >
                          {a.actName}
                        </Link>
                      </div>
                    </div>
                    <div className="col-2"><small className="text-black-50 d-block">活動項目：</small>{a.actSport}</div>
                    <div className="col-2"><small className="text-black-50 d-block">主辦人：</small>{a.memName}</div>
                    <div className="col-2"><small className="text-black-50 d-block">開始時間：</small><Moment format="YYYY/MM/DD HH:mm">{a.actTimeUp}</Moment></div>
                    <div className="col-1">
                      <i
                        class="fas fa-sign-out-alt rb-memCenter-quit"
                        title="退出" data-get={a.inSid} onClick={this.dropOut}
                      />
                    </div>
                  </div>
                ))}

                <h5 className="text-center my-3 rb-memberCenterIcon">
                  <i class="fas fa-dumbbell d-block my-3" />
                  您目前參加的課程
                </h5>
                {b.map(b => (
                  <div className="row rb-memberCenter">
                    <div className="col-2">
                      <div className="rb-memberCenterImg  mx-auto ">
                        <img
                          src={`http://localhost:3000/images/${b.claImg}`}
                          alt={b.actName}
                          className="pic-2"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <small className="text-black-50">課程名稱：</small>
                      <div className="rb-memberName ">
                        <Link
                          to={`/DetailedClass/${b.claSid}`}
                          title={b.claName}
                          className="JQellipsis"
                        >
                          {b.claName}
                        </Link>
                      </div>
                    </div>
                    <div className="col-2"><small className="text-black-50 d-block">活動項目：</small>{b.claSport}</div>
                    <div className="col-2"><small className="text-black-50 d-block">教練：</small>{b.memName}</div>
                    <div className="col-2"><small className="text-black-50 d-block">開課時間： </small><Moment format="YYYY/MM/DD HH:mm">{b.claTimeUp}</Moment></div>
                    <div className="col-1">
                      <i
                        class="fas fa-sign-out-alt rb-memCenter-quit"
                        title="退出" data-get={b.inSid} onClick={this.dropOut}
                      />
                    </div>
                  </div>
                ))}
                <h5 className="text-center my-3 rb-memberCenterIcon">
                  <i class="far fa-handshake d-block my-3" />
                  您目前主辦的活動和課程
                </h5>
                {c.map(c => (
                  <div className="row rb-memberCenter">
                    <div className="col-2">
                      <div className="rb-memberCenterImg  mx-auto ">
                        <img
                          src={`http://localhost:3000/images/${c.actImg}`}
                          alt={c.actName}
                          className="pic-2"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <small className="text-black-50">活動名稱：</small>
                      <div className="rb-memberName ">
                        <Link
                          to={`/DetailedActive/${c.actSid}`}
                          title={c.actName}
                          className="JQellipsis"
                        >
                          {c.actName}
                        </Link>
                      </div>
                    </div>
                    <div className="col-2"><small className="text-black-50 d-block">活動項目：</small>{c.actSport}</div>
                    <div className="col-2"><small className="text-black-50 d-block">主辦人：</small>{c.memName}</div>
                    <div className="col-2"><small className="text-black-50 d-block">開始時間：</small><Moment format="YYYY/MM/DD HH:mm">{c.actTimeUp}</Moment></div>
                    <div className="col-1">
                      <div className="d-flex justify-content-between">
                        <i
                          className="fas fa-user-times rb-memCenter-quit"
                          title="踢人"
                        />
                        <i
                          className="fas  fa-ban rb-memCenter-quit "
                          title="取消活動" data-get={c.actSid} onClick={this.cancelAct}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {d.map(d => (
                  <div className="row rb-memberCenter">
                    <div className="col-2">
                      <div className="rb-memberCenterImg  mx-auto ">
                        <img
                          src={`http://localhost:3000/images/${d.claImg}`}
                          alt={d.claName}
                          className="pic-2"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <small className="text-black-50">課程名稱：</small>
                      <div className="rb-memberName ">
                        <Link
                          to={`/DetailedClass/${d.claSid}`}
                          title={d.claName}
                          className="JQellipsis"
                        >
                          {d.claName}
                        </Link>
                      </div>
                    </div>
                    <div className="col-2"><small className="text-black-50 d-block">活動項目：</small>{d.claSport}</div>
                    <div className="col-2"><small className="text-black-50 d-block">教練：</small>{d.memName}</div>
                    <div className="col-2"><small className="text-black-50 d-block">開課時間： </small><Moment format="YYYY/MM/DD HH:mm">{d.claTimeUp}</Moment></div>
                    <div className="col-1">
                      <div className="d-flex justify-content-between">
                        <i
                          className="fas fa-user-times rb-memCenter-quit"
                          title="踢人"
                        />
                        <i
                          className="fas  fa-ban rb-memCenter-quit "
                          title="取消活動" data-get={d.claSid} onClick={this.cancelCla}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default MemCenter;
