import React, { Component } from "react";
import "../css/index.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";
import GradeIcon from "@mui/icons-material/Grade";

class dian extends Component {
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
            <div className="navImg col-4 btn">
              <img
                src={require("../img/LeDian_BANNER-01.jpg")}
                alt="navImg"
                className="img-fluid"
              ></img>
            </div>
            <div className="navImg col-4 btn">
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
                <div class="choose_left_de">
                  <div class="choose_left_1">透過以下分類篩選</div>
                  <div class="choose_classification_1">
                    <div className="classification_title">快速篩選</div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_1"
                      />
                      <label class="form-check-label" for="classification_1">
                        附近店家
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
                        星評優選
                      </label>
                    </div>
                  </div>
                  <div class="choose_classification_2">
                    <div className="classification_title">台中探索</div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="address"
                        id="address_1"
                      />
                      <label class="form-check-label" for="address_1">
                        {" "}
                        中區{" "}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="address"
                        id="address_2"
                        checked
                      />
                      <label class="form-check-label" for="address_2">
                        {" "}
                        東區{" "}
                      </label>
                    </div>
                  </div>
                  <div class="choose_classification_3">
                    <div className="classification_title">尋星饗宴</div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="score"
                        id="score_1"
                      />
                      <label class="form-check-label" for="score_1">
                        <GradeIcon className="me-1" /> 4.5以上
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="score"
                        id="score_2"
                        checked
                      />
                      <label class="form-check-label" for="score_2">
                        <GradeIcon className="me-1" /> 4.0以上
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="score"
                        id="score_2"
                        checked
                      />
                      <label class="form-check-label" for="score_2">
                        <GradeIcon className="me-1" /> 3.5以上
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="score"
                        id="score_2"
                        checked
                      />
                      <label class="form-check-label" for="score_2">
                        <GradeIcon className="me-1" /> 3.0以上
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
                        src={require("../img/mainproduct/8.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <div class="row information">
                        <p class="col-3 score align-items-center d-flex align-items-center justify-content-center">
                          <GradeIcon className="me-1" />
                          4.3
                        </p>
                        <p class="col-5 time">10:00~23:00</p>
                        <p class="col-4 kilometre">約 0.2 公里</p>
                      </div>
                      <p class="card-title lh-sm">
                        八曜和茶 台中五權門市店
                        <br />
                        <a href="https://www.google.com/maps/place/台中市北區五權路238號">
                          台中市北區五權路238號
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/mainproduct/8.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <div class="row information">
                        <p class="col-3 score align-items-center d-flex align-items-center justify-content-center">
                          <GradeIcon className="me-1" />
                          4.3
                        </p>
                        <p class="col-5 time">10:00~23:00</p>
                        <p class="col-4 kilometre">約 0.2 公里</p>
                      </div>
                      <p class="card-title lh-sm">
                        八曜和茶 台中五權門市店
                        <br />
                        <a href="https://www.google.com/maps/place/台中市北區五權路238號">
                          台中市北區五權路238號
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xxl-4 my-3">
                  <div class="card">
                    <div class="image">
                      <img
                        src={require("../img/mainproduct/8.png")}
                        class="card-img-top"
                        alt="..."
                      />
                      <img
                        src={require("../img/logo/8.png")}
                        class="logo"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <div class="row information">
                        <p class="col-3 score align-items-center d-flex align-items-center justify-content-center">
                          <GradeIcon className="me-1" />
                          4.3
                        </p>
                        <p class="col-5 time">10:00~23:00</p>
                        <p class="col-4 kilometre">約 0.2 公里</p>
                      </div>
                      <p class="card-title lh-sm">
                        八曜和茶 台中五權門市店
                        <br />
                        <a href="https://www.google.com/maps/place/台中市北區五權路238號">
                          台中市北區五權路238號
                        </a>
                      </p>
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

export default dian;
