import React, { Component } from "react";
import PieChart from "react-minimal-pie-chart";
import "./Trainer.scss";

class Trainer extends Component {
  constructor(props) {
    super(props);
  }

  togo = (evt) => {
    evt.preventDefault();
    window.location.href = '/DetailedClass/22'
  }

  togo2 = (evt) => {
    evt.preventDefault();
    window.location.href = '/DetailedClass/23'
  }

  togo3 = (evt) => {
    evt.preventDefault();
    window.location.href = '/DetailedClass/24'
  }

  render() {
    return (
      <React.Fragment>
        <div className="rb-trainer mt-4 pb-5">
          <div className="container">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title mt-5">精選教練群</h3>

              {/* test */}
              <section id="team">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div
                        className="image-flip"
                        ontouchstart="this.classList.toggle('hover');"
                      >
                        <div className="mainflip">
                          <div className="frontside">
                            <div className="card">
                              <div className="card-body text-center">
                                <p>
                                  <img
                            src={require("../../img/facepic/35.jpg")}
                            alt="card image"
                            className="img-fluid"
                          />
                                </p>
                                <h4 className="card-title">籃球教練 Amy</h4>
                                <p className="card-text text-left">
                                  把過去所學與自己的想法作結合達到更好的訓練效果。
                                </p>
                                <a href="#" className="btn btn-primary btn-sm">
                                  <i className="fa fa-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="backside">
                            <div className="card">
                              <div className="card-body text-center mt-4">
                                <h4 className="card-title">籃球教練 Amy</h4>
                                <p className="card-text text-left">
                                  有著紮實的基礎才能擁有健康的體態
                                  <br />
                                  有過HBL與大專籃球聯賽甲一級的經歷
                                  <br />
                                  EMT-1(初級救護技術員),BLS-I(基本救命術指導員)
                                </p>
                                <button onClick={this.togo} href="#" class="rb-themeBtn">
                教練課程
              </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div
                        className="image-flip"
                        ontouchstart="this.classList.toggle('hover');"
                      >
                        <div className="mainflip">
                          <div className="frontside">
                            <div className="card">
                              <div className="card-body text-center">
                                <p>
                                <img
                            src={require("../../img/facepic/51.jpg")}
                            alt="card image"
                            className="img-fluid"
                          />
                                </p>
                                <h4 className="card-title">瑜珈教練 Betty</h4>
                                <p className="card-text text-left">
                                「努力,是能遇到更好的自己」這是自己的左右銘。
                                </p>
                                <a href="#" className="btn btn-primary btn-sm">
                                  <i className="fa fa-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="backside">
                            <div className="card">
                              <div className="card-body text-center mt-4">
                                <h4 className="card-title">瑜珈教練 Betty</h4>
                                <p className="card-text text-left">
                                時常以「我能多帶給孩子不一樣的甚麼？」提醒自己,盡心為孩子設計適合的教學方式,且把課本中的內容與生活結合讓學習更加活潑、有趣,從不有所保留。<br/>
                                瑜珈聯盟RYT200國家瑜珈師資培訓

                                </p>
                                <button onClick={this.togo2} href="#" class="rb-themeBtn">
                教練課程
              </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div
                        className="image-flip"
                        ontouchstart="this.classList.toggle('hover');"
                      >
                        <div className="mainflip">
                          <div className="frontside">
                            <div className="card">
                              <div className="card-body text-center">
                                <p>
                                <img
                            src={require("../../img/facepic/67.jpg")}
                            alt="card image"
                            className="img-fluid"
                          />
                                </p>
                                <h4 className="card-title">登山嚮導 Jacky</h4>
                                <p className="card-text text-left">
                                一支登山隊伍必須要有相當的能力，才能保證旅程的安全、愉快與成功。
                                </p>
                                <a href="#" className="btn btn-primary btn-sm">
                                  <i className="fa fa-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="backside">
                            <div className="card">
                              <div className="card-body text-center mt-4">
                                <h4 className="card-title">登山嚮導 Jacky</h4>
                                <p className="card-text text-left">
<ul className="p-3">
    <li>台灣各國家公園警察隊雪地搜救訓練教練</li>
    <li>雪地登山安全教育講習教練</li>
    <li>登山學校攀登教練</li>
    <li>台北縣山岳協會山難搜救團隊教官</li>
</ul>

            
                                </p>
                                
                                <button onClick={this.togo3} href="#" class="rb-themeBtn">
                教練課程
              </button>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* test */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {}
}

export default Trainer;
