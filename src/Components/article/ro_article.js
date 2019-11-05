import React, { Component } from "react";
import "./ro_article.scss";
import NormalNav from "../nav/normalNav";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SimpleSlider2 from "../mall/ro_SimpleSlider2";

class RoArticle extends Component {
  add1 = evt => {
    evt.preventDefault();
    window.location.href = "/Home/";
  };
  add2 = evt => {
    evt.preventDefault();
    window.location.href = "/createClass/";
  };

  constructor(props) {
    super(props)
    this.state = {
      products3: [],
    }
  }

  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch("http://localhost:3000/pro/productsPage/7")
      .then(res => res.json())
      .then(pro3 => {
        console.log(pro3)
        this.setState({ products3: pro3.datas })
      })
  }

  render() {
    return (
      <React.Fragment>
        <NormalNav />

        <div className="rb-long-bg-h mt-4 pb-5">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">
                運動知識分享
              </h3>

              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn">
                <h3 className="rb-session-title text-center my-4">多日登山重裝備必備清單</h3>
                <div className="row">
                  <div className="knowledge-pic col-6">
                    <img
                      src={("../../images/shutterstock_570715150.jpg")}
                      alt="多日登山重裝備必備清單"
                      className="know-pic"
                    />
                  </div>

                  <div className="col-6 mt-5">
                    多日登山過程兩天以上，需背起重裝，且行走在不太明顯的路跡上，山的起伏有明顯爬升、下降，自己在山中炊煮，夜晚與繁星或月光在山屋、帳篷邂逅。
                    以下是你因應多日登山所需要的裝備:
                  </div>
                </div>

                <h5>1. 行走裝備</h5>
                <p>
                  登山背包 （50公升以上）
                  背包雨套：下雨時可以防止包濕掉，沒下雨時可以防塵。
                  手電筒或頭燈：路程來回可能長達六到十小時，天色必暗！
                  一副登山杖：輔助你在登山行進中支撐、前進。
                  工具手套：增加手部防護。
                  手錶：隨時注意時間下山。
                </p>

                <h5>2. 建議衣著</h5>
                <p>
                  排汗衣（裡層）：建議選擇聚酯纖維材質，速乾，避免失溫。
                  快乾排汗長褲（裡層）：建議選擇聚酯纖維材質，速乾，避免失溫。
                  禦寒衣物/保暖衣（中層）：抵達山屋或者攻頂時，身體停止散熱，需要的加強保暖。
                  雨衣／雨褲（外層）
                  襪子：最好是具備吸濕排汗功能或羊毛襪。
                  登山鞋：最好是中高筒，避免腳踝扭到。
                  保暖帽：高海拔溫度較低，可提供保暖。
                  遮陽帽：除了可以遮擋高山的紫外線，也可以避免蜘蛛絲或昆蟲直接降落在你頭上。
                  頭巾：避免冷空氣直接吸入體內。
                </p>

                <h5>3. 紮營裝備</h5>
                <p>
                  睡袋：可根據實際需求，選擇適合的睡袋。
                  睡墊：避免直接與地面接觸，提升舒適度。
                  帳篷：防水抗風帳篷，重量越輕越好。
                </p>

                <h5>4. 食糧與水</h5>
                <p>
                  水瓶、水袋：第一日建議準備2公升的水。
                  糧食：待在山上的正餐食物。
                  行動糧：隨時補充體力的食物，如肉乾、葡萄乾、能量棒、小糖果…等。
                  個人餐具
                  高山瓦斯罐：請配合自己的爐頭購買。
                  爐頭：讓你在高山上也能開火，吃到熱食。
                  炊具：越輕越好。
                  打火機-點火用
                  瑞士刀
                </p>

                <h5>5. 方向定位</h5>
                <p>
                  目標地點的IGN地圖：避免迷路。
                  指南針：幫助辨別方向。
                </p>

                <h5>6. 安全</h5>
                <p>
                  健保卡
                  錢
                  一隻充好電的手機以及可用的緊急電話號碼表（在山區若有需要撥打110、112、119）
                  急救包（繃帶、紗布、透氣膠帶、OK繃、碘酒、棉片、個人藥品…等）
                  高山症藥
                  急難用毯子：緊急使用，避免失溫。
                  哨子
                  鹽巴：防止抽筋、身體沒鹽分。
                </p>

                <h5>7. 其他</h5>
                <p>
                  入山、入園證：有些山需要提前申請入山
                  垃圾袋：自己的垃圾自己帶下山，說不定還可以淨山。
                  備用電池：任何電器都會有沒電的時候，備用著更安心。
                  衛生紙
                  防曬乳
                  防曬唇膏
                </p>
                <br />
                這個基本的清單當然可再依據個人尋求來進行調整，讓清單變得更加完整喔！


                <h5 className="extreading mt-5 mb-5">延伸閱讀>><Link to="">裝備打包技巧、如何調整登山背包？</Link></h5>

                <hr/>

                  <div className="artlogo mt-5 mb-5 col-12 ">
                    <div className="row">
                      <div className="col-12 col-lg-3">
                        <img
                          src="../../images/ininsportlogo.png"
                          alt="art-logo"
                          className="artlogo-pic"
                          />
                      </div>
                      <div className="col-12 col-lg-9">
                        <h5 className="edit">ININ Sport 小編</h5>
                        <p>一群前端工程師所組成的團隊，瘋狂爆肝卻熱愛運動，希望藉由運動讓人與人之間的距離變為零的目標邁進。</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <SimpleSlider2 products={this.state.products3} />
      </React.Fragment>
    );
  }
}
export default RoArticle;
