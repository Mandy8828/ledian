import React, { Component } from "react";
import "../css/index.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";

class le extends Component {
  state = {
    search: "搜尋店家",
  };
  render() {
    return (
      <React.Fragment>
        <div id="header" className="d-flex justify-content-between">
          <div className="col-6  d-flex ms-2 justify-content-between align-items-center">
            <h4
              id="homeBtn"
              className="my-auto btn headerText"
              onClick={() => {
                window.location = "/index";
              }}
            >
              首頁
            </h4>
            <h4 className="my-auto p-0 btn headerText menuBtn">
              <HiOutlineShoppingBag className="fs-6" />
              購物車
            </h4>
            <h4
              className="my-auto p-0 btn headerText menuBtn"
              onClick={() => {
                window.location = "/brand";
              }}
            >
              <PiMedal className="fs-6" />
              品牌專區
            </h4>
            <h4
              className="my-auto p-0 btn headerText menuBtn"
              onClick={this.pointinfoShow}
            >
              <PiCoins className="fs-6" />
              集點資訊
            </h4>
          </div>
          <div id="pointinfo">
            <button id="pointinfoclose" onClick={this.pointinfoHide}>
              <GiCancel className="fs-2    text-light" />
            </button>
            <h1>集點資訊</h1>
            <p>．每消費20元即可累積1點。</p>
            <p>．每點可折抵1元消費金額。</p>
            <p>．點數可在下次消費時折抵使用。</p>
            <p>．點數不可轉讓，不可兌換現金，不可合併使用。</p>
            <p>．本集點活動以本站公告為準，如有更改，恕不另行通知。</p>
          </div>
          <div className="d-flex me-2  align-items-center">
            <h4
              id="loginBtn"
              className="my-auto btn headerText"
              onClick={this.toggleMemberNav}
            >
              登入/註冊▼
            </h4>
            <div id="memberNav" className="collapse">
              <img
                id="memberNavImg"
                src={require("../img/LeDian_LOGO-05.png")}
                alt="logo"
              ></img>
              <div>
                <h4 className="headerText my-2">個人檔案</h4>
                <h4 className="headerText my-2">帳號管理</h4>
                <h4 className="headerText my-2">歷史訂單</h4>
                <h4 className="headerText my-2">載具存取</h4>
              </div>
            </div>
          </div>
        </div>
        <div id="banner" className="d-flex justify-content-center">
          <img
            src={require("../img/Home Banner_01.jpg")}
            alt="homeBanner"
            className="img-fluid"
          ></img>
        </div>
        <div className="container">
          <div className="navbar row">
            <div
              className="navImg col-4 btn"
              onClick={() => {
                window.location = "/le";
              }}
            >
              <img
                src={require("../img/LeDian_BANNER-01.jpg")}
                alt="navImg"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="navImg col-4 btn"
              onClick={() => {
                window.location = "/dian";
              }}
            >
              <img
                src={require("../img/LeDian_BANNER-02.jpg")}
                alt="navImg"
                className="img-fluid"
              ></img>
            </div>
            <div className="navImg col-4 btn">
              <img
                src={require("../img/LeDian_BANNER-05.jpg")}
                alt="navImg"
                className="img-fluid"
              ></img>
            </div>
          </div>
          <input
            type="text"
            id="search"
            name="search"
            onChange={this.searchChange}
            value={this.state.search}
            className="form-control rounded-pill ps-4 bg-secondary-subtle"
          ></input>
        </div>

        <main>
          <div class="container">
            <div class="row">
              <div class="col-2">
                <div class="choose_left">
                  <div class="choose_left_1">透過以下分類篩選</div>
                  <div class="choose_classification">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_1"
                      />
                      <label class="form-check-label" for="classification_1">
                        精選推味
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_2"
                      />
                      <label class="form-check-label" for="classification_2">
                        茶品精選
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_3"
                      />
                      <label class="form-check-label" for="classification_3">
                        拿鐵探查
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_4"
                      />
                      <label class="form-check-label" for="classification_4">
                        口感尋覓
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_5"
                      />
                      <label class="form-check-label" for="classification_5">
                        新鮮探勘
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-10 row choose_right">
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/class/8_345.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-title">八曜和茶</div>
                    <div class="card-body_la">
                      <p class="card-text">極上307</p>
                      <p class="price_1">$37</p>
                      <p class="price_2">$37</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/class/8_345.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-title">八曜和茶</div>
                    <div class="card-body_la">
                      <p class="card-text">極上307</p>
                      <p class="price_1">$37</p>
                      <p class="price_2">$37</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/class/8_345.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-title">八曜和茶</div>
                    <div class="card-body_la">
                      <p class="card-text">極上307</p>
                      <p class="price_1">$37</p>
                      <p class="price_2">$37</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/class/8_345.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-title">八曜和茶</div>
                    <div class="card-body_la">
                      <p class="card-text">極上307</p>
                      <p class="price_1">$37</p>
                      <p class="price_2">$37</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/class/8_345.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-title">八曜和茶</div>
                    <div class="card-body_la">
                      <p class="card-text">極上307</p>
                      <p class="price_1">$37</p>
                      <p class="price_2">$37</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/class/8_345.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-title">八曜和茶</div>
                    <div class="card-body_la">
                      <p class="card-text">極上307</p>
                      <p class="price_1">$37</p>
                      <p class="price_2">$37</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div id="footer" className="d-flex">
          <div id="footerLogo" className="col-3">
            <img
              id='"footerImg"'
              className="img-fluid"
              src={require("../img/LeDian_LOGO-04.png")}
              alt="footerLogo"
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div id="footerlink" className="col-2 d-flex flex-column">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid"
                    src={require("../img/facebook.png")}
                    alt="fackbook"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src={require("../img/instagram.png")}
                    alt="instagram"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src={require("../img/line.png")}
                    alt="line"
                  />
                </div>
              </div>
              <p className="text-white text-nowrap footerText">
                信箱: ledian.tw@gmail.com
              </p>
            </div>
          </div>
          <div
            id="footerInfo"
            className="col-3 d-flex row align-items-center justify-content-center"
          >
            <div className="col-3 col-sm-6 d-flex flex-column align-items-center">
              <p className="footerText m-0 py-1 text-nowrap text-white">
                意見回饋
              </p>
              <p className="footerText m-0 py-1 text-nowrap text-white">
                常見問題
              </p>
            </div>
            <div className="col-4 col-sm-6 d-flex flex-column align-items-start">
              <p className="footerText m-0 py-1 text-nowrap text-white">
                使用者條款
              </p>
              <p className="footerText m-0 py-1 text-nowrap text-white">
                隱私權條款
              </p>
              <p className="footerText m-0 py-1 text-nowrap text-white">
                信用卡條款
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  searchChange = (e) => {
    var newState = { ...this.state };
    newState.search = e.target.value;
    this.setState(newState);
  };
  pointinfoShow = function (event) {
    document.getElementById("pointinfo").style.top = event.clientY + "px";
  };

  pointinfoHide = function (event) {
    document.getElementById("pointinfo").style.top = "-500px";
    event.cancelBubble = true;
  };

  toggleMemberNav = () => {
    document.getElementById("memberNav").classList.toggle("collapse");
  };
}

export default le;
