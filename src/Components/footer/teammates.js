import React, { Component } from "react";
import NormalNav from "../nav/normalNav";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SimpleSlider2 from "../mall/ro_SimpleSlider2";

class Teammates extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <NormalNav />

        <div className="rb-teammate rb-long-bg-h mt-4 pb-5">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">團隊成員</h3>

              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn">
                <div class="row mb-2 justify-content-md-center">
                  <div class="col-md-6">
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                      <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2  rb-teammate-title">
                          ININ Sport
                        </strong>
                        <h3 class="mb-2">
                          <a class="text-dark" href="#">
                            共同工作
                          </a>
                        </h3>
                        <div class="mb-1 text-muted">
                          <i class="fas fa-users  mr-1" />
                          團隊
                        </div>

                        <p class="card-text mb-auto border-top pt-3">
                          <div>
                            <small className="mr-1">●</small>文案撰寫
                          </div>
                          <div>
                            <small className="mr-1">●</small>資料蒐集
                          </div>
                          <div>
                            <small className="mr-1">●</small>
                            後端資料庫及API建置
                          </div>
                          <div>
                            <small className="mr-1">●</small> PHP後臺建置
                          </div>
                        </p>
                      </div>
                      <div className="rb-teamImg">
                        <img
                          className="card-img-right flex-auto d-none d-lg-block"
                          data-src="holder.js/200x250?theme=thumb"
                          alt="Thumbnail [200x250]"
                          src={require("../../img/userInin.jpg")}
                          data-holder-rendered="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                      <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2  rb-teammate-title">
                          ININ Sport
                        </strong>
                        <h3 className="mb-2">
                          <a className="text-dark" href="#">
                            何晨瑋
                          </a>
                        </h3>
                        <div className="mb-1 text-muted">
                          <i className="fas fa-user-tie  mr-1" />
                          組長
                        </div>

                        <p className="card-text mb-auto border-top pt-3">
                          <div>
                            <small classNameName="mr-1">●</small> 企劃書撰寫和專案規畫
                          </div>
                          <div>
                            <small className="mr-1">●</small>{" "}
                            UI/UX、網頁設計、RWD
                          </div>
                          <div>
                            <small className="mr-1">●</small> Google
                            地圖API和Nodemailer建置
                          </div>
                        </p>
                      </div>
                      <div className="rb-teamImg">
                        <img
                          className="card-img-right flex-auto d-none d-lg-block"
                          data-src="holder.js/200x250?theme=thumb"
                          alt="Thumbnail [200x250]"
                          src={require("../../img/robin.jpg")}
                          data-holder-rendered="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                      <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2  rb-teammate-title">
                          ININ Sport
                        </strong>
                        <h3 className="mb-2">
                          <a className="text-dark" href="#">
                            陳彥良
                          </a>
                        </h3>
                        <div className="mb-1 text-muted">
                          <i className="fas fa-user-tie  mr-1" />
                          組員
                        </div>

                        <p className="card-text mb-auto border-top pt-3">
                          <div>
                            <small className="mr-1">●</small>課程和活動介面建置
                          </div>
                          <div>
                            <small className="mr-1">●</small>
                            課程和活動報名、篩選等相關功能
                          </div>
                        </p>
                      </div>
                      <div className="rb-teamImg">
                        <img
                          class="card-img-right flex-auto d-none d-lg-block"
                          data-src="holder.js/200x250?theme=thumb"
                          alt="Thumbnail [200x250]"
                          src={require("../../img/gg.jpg")}
                          data-holder-rendered="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-2">
                  <div class="col-md-6">
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                      <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2  rb-teammate-title">
                          ININ Sport
                        </strong>
                        <h3 class="mb-2">
                          <a class="text-dark" href="#">
                            羅佑振
                          </a>
                        </h3>
                        <div class="mb-1 text-muted">
                          <i class="fas fa-user-tie mr-1" /> 組員
                        </div>

                        <p class="card-text mb-auto border-top pt-3">
                          <div>
                            <small className="mr-1">●</small>購物商城介面建置
                          </div>
                          <div>
                            <small className="mr-1">●</small>
                            商品購買和購物車結帳等相關功能建置
                          </div>
                        </p>
                      </div>
                      <div className="rb-teamImg">
                        <img
                          class="card-img-right flex-auto d-none d-lg-block"
                          data-src="holder.js/200x250?theme=thumb"
                          alt="Thumbnail [200x250]"
                          src={require("../../img/roger.jpg")}
                          data-holder-rendered="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                      <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2  rb-teammate-title">
                          ININ Sport
                        </strong>
                        <h3 class="mb-2">
                          <a class="text-dark" href="#">
                            羅聖鈞
                          </a>
                        </h3>
                        <div class="mb-1 text-muted">
                          <i class="fas fa-user-tie mr-1" /> 組員
                        </div>

                        <p class="card-text mb-auto border-top pt-3">
                          <div>
                            <small className="mr-1">●</small>
                            會員註冊、登入等相關功能
                          </div>
                          <div>
                            <small className="mr-1">●</small>後端與前端技術整合
                          </div>
                          <div>
                            <small className="mr-1">●</small>
                            購物商城、課程活動與購物車等相關建置
                          </div>
                        </p>
                      </div>
                      <div className="rb-teamImg">
                        <img
                          class="card-img-right flex-auto d-none d-lg-block"
                          data-src="holder.js/200x250?theme=thumb"
                          alt="Thumbnail [200x250]"
                          src={require("../../img/jj.jpg")}
                          data-holder-rendered="true"
                        />
                      </div>
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
export default Teammates;
