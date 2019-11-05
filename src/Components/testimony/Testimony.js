import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../rbFormalStyle/rbBreakpoint.scss";
import PieChart from "react-minimal-pie-chart";

import "./Testimony.scss";

class Testimony extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="rb-testimony mt-4 pb-5">
          <div className="container">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title mt-5">全台活動紀錄</h3>

              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-3 rb-mob-round">
                <div class="project-hover p-4 position-relative">
                  <h2 className="position-absolute rb-round-title">330<span className="small">場</span></h2>
                  <PieChart
                    data={[
                      { title: "One", value: 90, color: "#A3002D" },
                      { title: "Two", value: 20, color: "#FF5A81" }
                    ]}
                    lineWidth={10}
                    rounded
                    animate
                  />
                </div>
                <h4 className="text-center">活動數</h4>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 rb-mob-round">
                <div class="project-hover p-4 position-relative">
                  <h2 className="position-absolute rb-round-title">220<span className="small">堂</span></h2>
                  <PieChart
                    data={[
                      { title: "One", value: 60, color: "#A3002D" },
                      { title: "Two", value: 40, color: "#FF5A81" }
                    ]}
                    lineWidth={10}
                    rounded
                    animate
                  />
                </div>
                <h4 className="text-center">課程數</h4>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 rb-mob-round">
                <div class="project-hover p-4 position-relative">
                  <h2 className="position-absolute rb-round-title">120<span className="small">位</span></h2>
                  <PieChart
                    data={[
                      { title: "One", value: 40, color: "#A3002D" },
                      { title: "Two", value: 60, color: "#FF5A81" }
                    ]}
                    lineWidth={10}
                    rounded
                    animate
                  />
                </div>
                <h4 className="text-center">教練數</h4>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 rb-mob-round">
                <div class="project-hover p-4 position-relative">
                  <h2 className="position-absolute rb-round-title">260<span className="small">間</span></h2>
                  <PieChart
                    data={[
                      { title: "One", value: 75, color: "#A3002D" },
                      { title: "Two", value: 25, color: "#FF5A81" }
                    ]}
                    lineWidth={10}
                    rounded
                    animate
                  />
                </div>
                <h4 className="text-center">場地數</h4>
              </div>

         
             
              
            </div>
          </div>
        </div>
     
      </React.Fragment>
    );
  }
}

export default Testimony;
