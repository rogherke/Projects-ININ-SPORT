import React, { Component } from "react";
import PieChart from "react-minimal-pie-chart";
import "./Testimony.scss";

class memTestimony extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="rb-testimony mt-4 pb-5">
          <div className="container">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title mt-5 mb-5">會員心得</h3>

              <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                  <img
                            src={require("../../img/facepic/12.jpg")}
                            alt="Logo"
                            className="img-fluid"
                          />
                
                    <h3>林瑪莉 小姐</h3>
                    <p>上班族</p>
                      
                      <i class="fas fa-arrow-circle-down"></i>
                                
                  </div>

                  <div className="team-back">
                    <span>
                    除暴安良是我們做市民的責任，而行善積德也是我本身的興趣！
<br/><br/>
                    所以參加ININ Sport的課程來增強體力，讓我可以扶老太太過馬路！！
                    </span>
                  </div>
                </div>
              </div>

                   <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                  <img
                            src={require("../../img/facepic/17.jpg")}
                            alt="Logo"
                            className="img-fluid"
                          />
                
                    <h3>陳雪莉 小姐</h3>
                    <p>服務業</p>
                    <i class="fas fa-arrow-circle-down"></i>
                  </div>

                  <div className="team-back">
                    <span>
                      自從參加了ININ SPORT活動和課程，我原本無聊的下班時光頓時充滿喜樂了！
<br/><br/>
                      我的身材更好，記憶力變強，異性緣也跟著紅不讓喔！桃花朵朵開！
                    </span>
                  </div>
                </div>
              </div>

                   <div className="col-lg-4">
                <div className="our-team-main">
                  <div className="team-front">
                  <img
                            src={require("../../img/facepic/26.jpg")}
                            alt="Logo"
                            className="img-fluid"
                          />
                
                    <h3>林水木 先生</h3>
                    <p>科技業</p>
                    <i class="fas fa-arrow-circle-down"></i>
                  </div>

                  <div className="team-back">
                    <span>
                    工作時間過長讓我想放棄運動，但我想起安西教練的話：若是現在放棄了 ，那團肥肉還是會在的!! 
<br/><br/>
                    好在有ININ Sport，讓我能繼續打球!  
                    </span>
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

export default memTestimony;
