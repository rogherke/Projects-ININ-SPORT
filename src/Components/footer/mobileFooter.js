import React, { Component } from "react";
import "./Footer.scss";

class MobileFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="rb-mobile-Footer fixed-bottom">
          <div className="d-flex justify-content-around my-2">
            <div className="text-center">
              <i class="far fa-user-circle" />
              <div>會員中心</div>
            </div>

            <div className="text-center">
              <i class="far fa-bell" />
              <div>訊息中心</div>
            </div>

            <div className="text-center">
              <i class="fas fa-shopping-bag" />
              <div>購物中心</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MobileFooter;
