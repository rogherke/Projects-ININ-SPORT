import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./account.scss";



class Account_login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order:[],
      joinAct : [],
      joinCla :[],
      act : [],
      cla : []
    }
  }

  gotoMember = evt => {
    evt.preventDefault();
    window.location.assign("http://localhost:3001/memcenter");
  };

  componentDidMount() {
    this.getAll()
  }

  getAll() {
    var a = JSON.parse(localStorage.getItem("members"))
    fetch("http://localhost:3000/order/all/" + a.members.memSid )
      .then(res => res.json())
      .then(order => {
        this.setState({ order: order });
      });
    fetch("http://localhost:3000/join/cla/" + a.members.memSid )
      .then(res => res.json())
      .then(order => {
        this.setState({ joinCla: order });
      });
    fetch("http://localhost:3000/api2/all/" + a.members.memSid )
      .then(res => res.json())
      .then(order => {
        this.setState({ act: order });
      });
    fetch("http://localhost:3000/join/act/" +a.members.memSid )
      .then(res => res.json())
      .then(order => {
        this.setState({ joinAct: order });
      });
    fetch("http://localhost:3000/api/all/" + a.members.memSid )
      .then(res => res.json())
      .then(order => {
        this.setState({ cla: order });
      });
      
  }

  render() {
    var a = JSON.parse(localStorage.getItem("members"))
    console.log(a.members)
    return (
      <React.Fragment>
        <div className=" p-5 rb-account">
          <div className="row">
            <div className="col-5">
              <figure className="rb-account-info">
              {  }
                <img
                  src={("../images/testHead.jpg")}
                  alt="account face"
                />
              </figure>
            </div>
            <div className="col-7 text-light">
              <h3>{a.members.memName}</h3>
              <p>{a.members.memCity}  {a.members.memArea}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="list-group list-group-flush rb-account-log">
                <li className="list-group-item d-block">
                  我參加的活動：
                  <a className="rb-account-message float-right ">{this.state.joinAct.length}</a>
                </li>
                <li className="list-group-item d-block">
                  我的課程清單：
                  <a className="rb-account-message float-right ">{this.state.joinCla.length}</a>
                </li>
                {/* <li className="list-group-item d-block">
                  我的場地清單：
                  <a className="rb-account-message float-right ">9+</a>
                </li> */}
                <li className="list-group-item d-block">
                  我開的活動/課程：
                  <a className="rb-account-message float-right ">{this.state.act.length + this.state.cla.length}</a>
                </li>
                <li className="list-group-item d-block">
                  我的購物清單：
                  <a className="rb-account-message float-right ">{this.state.order.length}</a>
                </li>
                <li className="list-group-item d-block" />
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 mb-0">
            <button href="#" className="rb-themeBtn text-center rb-member-btn" onClick={this.gotoMember}>
              會員中心
              </button>
          </div>



        </div>
      </React.Fragment>
    );
  }
}

export default Account_login;
