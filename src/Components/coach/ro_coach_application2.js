import React, { Component } from "react";
import "./ro_coach_application2.scss";
import NormalNav from "../nav/normalNav";



class Application2 extends Component {

  add1 = evt => {
    evt.preventDefault();
    window.location.href = "/Home/";
  };
  add2 = evt => {
    evt.preventDefault();
    window.location.href = "/coach/Application3/";
  };



  render() {
    return (
      <React.Fragment>
        <NormalNav />

        <div className="rb-long-bg-h mt-4 pb-5">
          <div className="rb-long-bg pb-5" />
          <div className="container rb-z">
            <div className="row mb-4">
              <h3 className="text-center rb-session-title-w mt-5">
                申請者守法承諾與義務
              </h3>

              <div className="container col-12 mt-3 rb-block-w py-3 px-3 rb-logIn">
                <p>
                  ININI事業股份有限公司（以下簡稱「ININ」）係依據本服務條款提供服務。當會員完成教練申請後，即表示已閱讀、瞭解並同意接受本服務條款之所有內容。ININ有權於任何時間修改或變更本條款之內容，並公佈於本服務網頁，且不另行通知個別使用者，建議請隨時注意條款修改或變更。若有違反本服務條款時，ININ得隨時依據相關規則暫停或終止您使用本服務，不另行通知。會員於任何修改或變更後繼續使用本服務，視同已閱讀、瞭解並同意接受該等修改或變更。如果不同意本約定書內容，請勿使用本服務。
                </p>
 
                <h3 className="rb-session-title text-center my-4">免責聲明</h3>
                <p>
                  1.
                  廠商或個人可能透過本服務或經由本服務連結之其他網站提供商品買賣、服務或其他交易行為。您若因此與該廠商或個人進行交易，各買賣或其他合約均僅存在您與各該廠商或個人兩造之間。ININ絕不介入您與廠商或個人間的任何買賣、服務或其他交易行為，對於您所獲得的商品、服務或其他交易標的物亦不負任何擔保責任。
                  2.
                  因網路資料傳輸過程牽涉至第三方以上之其他服務供應商，ININ不擔保使用者所上載的資料將被正常顯示、亦不擔保資料傳輸的正確性；如果使用者發現本服務有錯誤或疏失，請立即通知本公司。
                  3.
                  本服務會定期備份資料，但您於使用本服務時宜自行採取防護措施。ININ對於您因使用（或無法使用）本服務而造成的損害，不負任何賠償責任。您對於個人資料、付款資料（包含信用卡資料）及會員密碼等，應妥善保管以避免外洩。所有使用其帳號和密碼進入本系統後之行為，均視為該帳號及密碼持有人之行為。
                  4.
                  ININ對於您使用本服務或經由本服務連結至其他網站而取得之資訊、廣告，不擔保其為完全正確無誤。ININ對於本服務所提供之資訊或建議有權隨時修改或刪除。基於尊重內容提供者之智慧財產權，ININ對內容提供者所提供之內容並不做實質之審查或修改，對該等內容之正確真偽亦不負任何責任。
                </p>

                <div className="d-flex justify-content-center my-3">
                  <button className="rb-themeBtn-w" onClick={this.add1}>
                    取消
                  </button>

                  <button
                    className="rb-themeBtn-main-w ml-3"
                    onClick={this.add2}>
                    確定
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Application2;
