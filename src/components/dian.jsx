import React, { Component } from "react";
import "../css/ledian.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";
import GradeIcon from "@mui/icons-material/Grade";
import axios from "axios";

class dian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      content: [],
      score: [],
    };
  }

  componentDidMount() {
    // 初始化資料，預設獲取中區的商家資料
    this.handleOptionChange("400");
  }

  handleOptionChange = async (selectedOption) => {
    try {
      this.setState({ score: "" });

      let url = ""; // 請修改為相應的路徑或端點
      // 根據選項設置不同的路徑
      if (selectedOption === "400") {
        url = "http://localhost:8000/dian/address_400";
      } else if (selectedOption === "401") {
        url = "http://localhost:8000/dian/address_401";
      } else if (selectedOption === "402") {
        url = "http://localhost:8000/dian/address_402";
      } else if (selectedOption === "403") {
        url = "http://localhost:8000/dian/address_403";
      } else if (selectedOption === "404") {
        url = "http://localhost:8000/dian/address_404";
      }
      // 發送請求
      const response = await axios.get(url);
      this.setState({ selectedOption: selectedOption, content: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleScoreChange = async (selectedScore) => {
    try {
      this.setState({ selectedOption: "" });

      let url = ""; // 请修改为相应的路径或端点
      // 根据选择的评分设置不同的路径
      if (selectedScore === "4.5") {
        url = "http://localhost:8000/dian/score_4.5";
      } else if (selectedScore === "4.0") {
        url = "http://localhost:8000/dian/score_4.0";
      } else if (selectedScore === "3.5") {
        url = "http://localhost:8000/dian/score_3.5";
      } else if (selectedScore === "3.0") {
        url = "http://localhost:8000/dian/score_3.0";
      }
      // 发送请求
      const response = await axios.get(url);
      this.setState({ score: selectedScore, content: response.data });
    } catch (error) {
      console.error("获取数据时出错:", error);
    }
  };

  render() {
    const { selectedOption, content } = this.state;
    const shuffledContent = content.sort(() => Math.random() - 0.5);

    return (
      <React.Fragment>
        <div
          id="header"
          style={{
            boxShadow: "1px 3px 10px #cccccc",
            marginBottom: "4px",
          }}
          className="d-flex justify-content-between"
        >
          <div className="col-7 col-sm-7 col-md-6 col-xl-5 d-flex ms-2 justify-content-between align-items-center">
            <div id="menu" className="col-8">
              <h2
                className="btn text-start  my-auto fs-4"
                onClick={this.toggleMenuNav}
              >
                ☰
              </h2>
            </div>
            <h4
              id="homeBtn"
              className="my-auto btn"
              onClick={() => {
                window.location = "/index";
              }}
            >
              <img id="logo" src="/img/index/LeDian_LOGO-05.png"></img>
            </h4>
            <h4 className="my-auto p-0 btn headerText menuBtn d-flex align-items-center justify-content-center">
              <HiOutlineShoppingBag className="fs-4" />
              購物車
            </h4>
            <h4
              className="my-auto p-0 btn headerText menuBtn d-flex align-items-center justify-content-center"
              onClick={() => {
                window.location = "/brand";
              }}
            >
              <PiMedal className="fs-4" />
              品牌專區
            </h4>
            <h4
              className="my-auto p-0 btn headerText menuBtn d-flex align-items-center justify-content-center"
              onClick={this.pointinfoShow}
            >
              <PiCoins className="fs-4" />
              集點資訊
            </h4>
          </div>
          <div id="pointinfo">
            <button id="pointinfoclose" onClick={this.pointinfoHide}>
              <GiCancel className="fs-2 text-light" />
            </button>
            <h1>集點資訊</h1>
            <p>．每消費20元即可累積1點。</p>
            <p>．每點可折抵1元消費金額。</p>
            <p>．點數可在下次消費時折抵使用。</p>
            <p>．點數不可轉讓，不可兌換現金，不可合併使用。</p>
            <p>．本集點活動以公告為準，如有更改，恕不另行通知。</p>
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
                src={"/img/index/LeDian_LOGO-05.png"}
                alt="logo"
              ></img>
              <div>
                <h4 className="headerText text-center my-3">個人檔案</h4>
                <hr />
                <h4 className="headerText text-center my-3">帳號管理</h4>
                <hr />
                <h4 className="headerText text-center my-3">歷史訂單</h4>
                <hr />
                <h4 className="headerText text-center my-3">載具存取</h4>
                <hr />
                <h4 className="headerText text-center my-3">登出</h4>
              </div>
            </div>
          </div>
        </div>
        <div
          id="menuNav"
          className="menuNav d-flex flex-column align-items-center"
        >
          <h4 className="menuText my-3 mainColor border-bottom border-secondary">
            <HiOutlineShoppingBag className="fs-4" />
            購物車
          </h4>
          <h4
            className="menuText my-3 mainColor border-bottom border-secondary"
            onClick={() => {
              window.location = "/brand";
            }}
          >
            <PiMedal className="fs-4" />
            品牌專區
          </h4>
          <h4
            className="menuText my-3 mainColor border-bottom border-secondary"
            onClick={this.pointinfoShow}
          >
            <PiCoins className="fs-4" />
            集點資訊
          </h4>
        </div>

        <div id="banner" className="d-flex justify-content-center">
          <img
            id="bannerImg"
            src={"/img/index/Home_Banner_01.jpg"}
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
                src={"/img/index/LeDian_BANNER-01.jpg"}
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
                src={"/img/index/LeDian_BANNER-02.jpg"}
                alt="navImg"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="navImg col-4 btn"
              onClick={() => {
                window.location = "/news";
              }}
            >
              <img
                src={"/img/index/LeDian_BANNER-05.jpg"}
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
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-md-4 col-lg-3 col-xxl-2 justify-content-center">
                <div className="choose_left_de">
                  <div className="choose_left_1">透過以下分類篩選</div>
                  <div className="choose_classification_1">
                    <div className="classification_title">快速篩選</div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="classification_1"
                        checked={selectedOption === "nearby"}
                        onChange={() => this.handleOptionChange("nearby")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_1"
                      >
                        附近店家
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value=""
                        id="classification_2"
                        checked={this.state.score === "4.0"}
                        onChange={() => this.handleScoreChange("4.0")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_2"
                      >
                        星評優選
                      </label>
                    </div>
                  </div>
                  <div className="choose_classification_2">
                    <div className="classification_title">台中探索</div>
                    <div className="addressall">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          id="address_1"
                          value="中區"
                          data-postcode
                          checked={selectedOption === "400"}
                          onChange={() => this.handleOptionChange("400")}
                        />
                        <label className="form-check-label" htmlFor="address_1">
                          {" "}
                          中區{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          id="address_2"
                          value="東區"
                          checked={selectedOption === "401"}
                          onChange={() => this.handleOptionChange("401")}
                        />
                        <label className="form-check-label" htmlFor="address_2">
                          {" "}
                          東區{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          id="address_3"
                          value="南區"
                          checked={selectedOption === "402"}
                          onChange={() => this.handleOptionChange("402")}
                        />
                        <label className="form-check-label" htmlFor="address_3">
                          {" "}
                          南區{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          id="address_4"
                          value="西區"
                          checked={selectedOption === "403"}
                          onChange={() => this.handleOptionChange("403")}
                        />
                        <label className="form-check-label" htmlFor="address_4">
                          {" "}
                          西區{" "}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="address"
                          id="address_5"
                          value="北區"
                          checked={selectedOption === "404"}
                          onChange={() => this.handleOptionChange("404")}
                        />
                        <label className="form-check-label" htmlFor="address_5">
                          {" "}
                          北區{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="choose_classification_3">
                    <div className="classification_title">尋星饗宴</div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="score"
                        id="score_1"
                        checked={this.state.score === "4.5"}
                        onChange={() => this.handleScoreChange("4.5")}
                      />
                      <label className="form-check-label" htmlFor="score_1">
                        <GradeIcon className="me-1 iconColor" /> 4.5以上
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="score"
                        id="score_2"
                        checked={this.state.score === "4.0"}
                        onChange={() => this.handleScoreChange("4.0")}
                      />
                      <label className="form-check-label" htmlFor="score_2">
                        <GradeIcon className="me-1 iconColor" /> 4.0以上
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="score"
                        id="score_2"
                        checked={this.state.score === "3.5"}
                        onChange={() => this.handleScoreChange("3.5")}
                      />
                      <label className="form-check-label" htmlFor="score_2">
                        <GradeIcon className="me-1 iconColor" /> 3.5以上
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="score"
                        id="score_2"
                        checked={this.state.score === "3.0"}
                        onChange={() => this.handleScoreChange("3.0")}
                      />
                      <label className="form-check-label" htmlFor="score_2">
                        <GradeIcon className="me-1 iconColor" /> 3.0以上
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-md-8 col-lg-9 col-xxl-10 row choose_right justify-content-center">
                {/* 台中探索、尋星饗宴、星評優選 */}
                {shuffledContent.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div className="card">
                      <div className="image">
                        <img
                          src={`/img/mainproduct/${item.brand_id}.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          className="logo"
                          alt="..."
                        />
                      </div>
                      <div className="card-body">
                        <div className="row information">
                          <p className="col-3 score align-items-center d-flex align-items-center justify-content-center">
                            <GradeIcon className="me-1 iconColor" />
                            {item.branch_score.toFixed(1)}
                          </p>
                          <p className="col-5 time">10:00~23:00</p>
                          <p className="col-4 kilometre">約 0.2 公里</p>
                        </div>
                        <p className="card-title lh-sm">
                          {`${item.brand_id} ${item.branch_name}`}
                          <br />
                          <a
                            href={`https://www.google.com/maps/place/${item.branch_address}`}
                          >
                            {item.branch_address}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <div id="footer" className="d-flex">
          <div id="footerLogo" className="col-3">
            <img
              id='"footerImg"'
              className="img-fluid"
              src={"/img/index/LeDian_LOGO-04.png"}
              alt="footerLogo"
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div id="footerlink" className="col-2 d-flex flex-column">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid"
                    src={"/img/index/facebook.png"}
                    alt="fackbook"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src={"/img/index/instagram.png"}
                    alt="instagram"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src={"/img/index/line.png"}
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
            className="col-3 d-flex row align-items-center justify-content-center pe-1"
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
  pointinfoShow = (event) => {
    document.getElementById("pointinfo").style.top = event.clientY + 50 + "px";
    document.getElementById("pointinfo").style.left =
      event.clientX - 150 + "px";
  };

  pointinfoHide = (event) => {
    document.getElementById("pointinfo").style.top = "-500px";
    event.cancelBubble = true;
  };

  toggleMemberNav = () => {
    document.getElementById("memberNav").classList.toggle("collapse");
  };

  toggleMenuNav = () => {
    document.getElementById("menuNav").classList.toggle("menuNav");
  };
}

export default dian;
