import React, { Component } from "react";
import "../css/ledian.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";
import axios from "axios";

class le extends Component {
  state = {
    search: "搜尋店家",
    resultle1: [],
    resultlebrand: [],
    resultle2: [],
    resultle3: [],
    resultle4: [],
    resultle5: [],
  };
  render() {
    return (
      <React.Fragment>
        <div id="header" className="d-flex justify-content-between">
          <div className="col-9 col-sm-7 col-md-6 d-flex ms-2 justify-content-between align-items-center">
            <h4
              id="homeBtn"
              className="my-auto btn headerText text-nowrap"
              onClick={() => {
                window.location = "/index";
              }}
            >
              首頁
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
              className="my-auto btn headerText text-nowrap"
              onClick={this.toggleMemberNav}
            >
              登入/註冊▼
            </h4>
            <div id="memberNav" className="collapse">
              <img
                id="memberNavImg"
                src={require("../img/index/LeDian_LOGO-05.png")}
                alt="logo"
              ></img>
              <div>
                <h4 className="headerText my-3">個人檔案</h4>
                <hr />
                <h4 className="headerText my-3">帳號管理</h4>
                <hr />
                <h4 className="headerText my-3">歷史訂單</h4>
                <hr />
                <h4 className="headerText my-3">載具存取</h4>
              </div>
            </div>
          </div>
        </div>
        <div id="banner" className="d-flex justify-content-center">
          <img
            src={require("../img/index/Home_Banner_01.jpg")}
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
                src={require("../img/index/LeDian_BANNER-01.jpg")}
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
                src={require("../img/index/LeDian_BANNER-02.jpg")}
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
                src={require("../img/index/LeDian_BANNER-05.jpg")}
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
              <div class="col-sm-5 col-md-4 col-lg-3 col-xxl-2">
                <div class="choose_left">
                  <div class="choose_left_1">透過以下分類篩選</div>
                  <div class="choose_classification">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_1"
                        onChange={this.handleCheckboxChange}
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
                        onChange={this.handleCheckboxChange}
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
                        onChange={this.handleCheckboxChange}
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
                        onChange={this.handleCheckboxChange}
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
                        onChange={this.handleCheckboxChange}
                      />
                      <label class="form-check-label" for="classification_5">
                        新鮮探勘
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-7 col-md-8 col-lg-9 col-xxl-10 row choose_right">
                {this.state.resultle1.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div class="card">
                      <div class="image">
                        {/* 動態設定圖片路徑 */}
                        <img
                          src={`/img/class/${item.product_img}.png`}
                          class="card-img-top"
                          alt="..."
                        />
                        {/* 動態設定 logo 路徑 */}
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          class="logo"
                          alt="..."
                        />
                      </div>
                      {/* 動態設定標題 */}
                      <div className="card-title">
                        {this.state.resultlebrand
                          .filter((brand) => brand.brand_id === item.brand_id) // 過濾出符合 brand_id 的品牌
                          .map((brand) => (
                            <span key={brand.brand_id}>{brand.brand_name}</span>
                          ))}
                      </div>

                      {/* 動態設定內容 */}
                      <div class="card-body_la">
                        <p class="card-text">{item.product_name}</p>
                        <p class="price_1">${item.products_price_0}</p>
                        <p class="price_2">${item.products_price_1}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {this.state.resultle2.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div class="card">
                      <div class="image">
                        {/* 動態設定圖片路徑 */}
                        <img
                          src={`/img/class/${item.product_img}.png`}
                          class="card-img-top"
                          alt="..."
                        />
                        {/* 動態設定 logo 路徑 */}
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          class="logo"
                          alt="..."
                        />
                      </div>
                      {/* 動態設定標題 */}
                      <div className="card-title">
                        {this.state.resultlebrand
                          .filter((brand) => brand.brand_id === item.brand_id) // 過濾出符合 brand_id 的品牌
                          .map((brand) => (
                            <span key={brand.brand_id}>{brand.brand_name}</span>
                          ))}
                      </div>

                      {/* 動態設定內容 */}
                      <div class="card-body_la">
                        <p class="card-text">{item.product_name}</p>
                        <p class="price_1">${item.products_price_0}</p>
                        <p class="price_2">${item.products_price_1}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {this.state.resultle3.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div class="card">
                      <div class="image">
                        {/* 動態設定圖片路徑 */}
                        <img
                          src={`/img/class/${item.product_img}.png`}
                          class="card-img-top"
                          alt="..."
                        />
                        {/* 動態設定 logo 路徑 */}
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          class="logo"
                          alt="..."
                        />
                      </div>
                      {/* 動態設定標題 */}
                      <div className="card-title">
                        {this.state.resultlebrand
                          .filter((brand) => brand.brand_id === item.brand_id) // 過濾出符合 brand_id 的品牌
                          .map((brand) => (
                            <span key={brand.brand_id}>{brand.brand_name}</span>
                          ))}
                      </div>

                      {/* 動態設定內容 */}
                      <div class="card-body_la">
                        <p class="card-text">{item.product_name}</p>
                        <p class="price_1">${item.products_price_0}</p>
                        <p class="price_2">${item.products_price_1}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {this.state.resultle4.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div class="card">
                      <div class="image">
                        {/* 動態設定圖片路徑 */}
                        <img
                          src={`/img/class/${item.product_img}.png`}
                          class="card-img-top"
                          alt="..."
                        />
                        {/* 動態設定 logo 路徑 */}
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          class="logo"
                          alt="..."
                        />
                      </div>
                      {/* 動態設定標題 */}
                      <div className="card-title">
                        {this.state.resultlebrand
                          .filter((brand) => brand.brand_id === item.brand_id) // 過濾出符合 brand_id 的品牌
                          .map((brand) => (
                            <span key={brand.brand_id}>{brand.brand_name}</span>
                          ))}
                      </div>

                      {/* 動態設定內容 */}
                      <div class="card-body_la">
                        <p class="card-text">{item.product_name}</p>
                        <p class="price_1">${item.products_price_0}</p>
                        <p class="price_2">${item.products_price_1}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {this.state.resultle5.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div class="card">
                      <div class="image">
                        {/* 動態設定圖片路徑 */}
                        <img
                          src={`/img/class/${item.product_img}.png`}
                          class="card-img-top"
                          alt="..."
                        />
                        {/* 動態設定 logo 路徑 */}
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          class="logo"
                          alt="..."
                        />
                      </div>
                      {/* 動態設定標題 */}
                      <div className="card-title">
                        {this.state.resultlebrand
                          .filter((brand) => brand.brand_id === item.brand_id) // 過濾出符合 brand_id 的品牌
                          .map((brand) => (
                            <span key={brand.brand_id}>{brand.brand_name}</span>
                          ))}
                      </div>

                      {/* 動態設定內容 */}
                      <div class="card-body_la">
                        <p class="card-text">{item.product_name}</p>
                        <p class="price_1">${item.products_price_0}</p>
                        <p class="price_2">${item.products_price_1}</p>
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
              src={require("../img/index/LeDian_LOGO-04.png")}
              alt="footerLogo"
            />
          </div>
          <div className="col-6 d-flex align-items-center">
            <div id="footerlink" className="col-2 d-flex flex-column">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid"
                    src={require("../img/index/facebook.png")}
                    alt="fackbook"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src={require("../img/index/instagram.png")}
                    alt="instagram"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src={require("../img/index/line.png")}
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
    document.getElementById("pointinfo").style.left =
      event.clientX - 250 + "px";
  };

  pointinfoHide = function (event) {
    document.getElementById("pointinfo").style.top = "-500px";
    event.cancelBubble = true;
  };

  toggleMemberNav = () => {
    document.getElementById("memberNav").classList.toggle("collapse");
  };

  componentDidMount = async () => {
    try {
      var resultle1 = await axios.get("http://localhost:8000/le1/product");
      var resultlebrand = await axios.get("http://localhost:8000/le/brand");
      var resultle2 = await axios.get("http://localhost:8000/le2/product");
      var resultle3 = await axios.get("http://localhost:8000/le3/product");
      var resultle4 = await axios.get("http://localhost:8000/le4/product");
      var resultle5 = await axios.get("http://localhost:8000/le5/product");

      this.setState({
        resultle1: resultle1.data,
        resultle2: resultle2.data,
        resultle3: resultle3.data,
        resultle4: resultle4.data,
        resultle5: resultle5.data,
        resultlebrand: resultlebrand.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // handleCheckboxChange = async (event) => {
  //   if (event.target.id === "classification_1" && event.target.checked) {
  //     try {
  //       const resultle1 = await axios.get("http://localhost:8000/le1/product");
  //       const resultlebrand = await axios.get("http://localhost:8000/le/brand");

  //       // 將品牌資料整理成以 brand_id 為鍵的物件，方便後續查找
  //       const brandMap = resultlebrand.data.reduce((acc, brand) => {
  //         acc[brand.brand_id] = brand.brand_name;
  //         return acc;
  //       }, {});

  //       // 將商品資料中的品牌名稱加入
  //       const productsWithBrandNames = resultle1.data.map((product) => ({
  //         ...product,
  //         brand_name: brandMap[product.brand_id], // 根據 brand_id 查找品牌名稱
  //       }));

  //       this.setState({
  //         resultle1: productsWithBrandNames,
  //         resultlebrand: resultlebrand.data,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  // handleCheckboxChange = async (event) => {
  //   const checkboxId = event.target.id;

  //   try {
  //     if (checkboxId === "classification_1" && event.target.checked) {
  //       const resultle1 = await axios.get("http://localhost:8000/le1/product");
  //       const resultlebrand = await axios.get("http://localhost:8000/le/brand");

  //       // 將品牌資料整理成以 brand_id 為鍵的物件，方便後續查找
  //       const brandMap = resultlebrand.data.reduce((acc, brand) => {
  //         acc[brand.brand_id] = brand.brand_name;
  //         return acc;
  //       }, {});

  //       // 將商品資料中的品牌名稱加入
  //       const productsWithBrandNames = resultle1.data.map((product) => ({
  //         ...product,
  //         brand_name: brandMap[product.brand_id], // 根據 brand_id 查找品牌名稱
  //       }));

  //       this.setState({
  //         resultle1: productsWithBrandNames,
  //         resultlebrand: resultlebrand.data,
  //       });
  //     }
  //     // 其他分類的處理邏輯類似...
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  handleCheckboxChange = async (event) => {
    const checkboxId = event.target.id;

    try {
      // Initialize an empty array to hold the selected category data
      let selectedCategoryData = [];

      // Fetch data based on the selected checkbox
      switch (checkboxId) {
        case "classification_1":
          selectedCategoryData = await axios.get(
            "http://localhost:8000/le1/product"
          );
          break;
        case "classification_2":
          selectedCategoryData = await axios.get(
            "http://localhost:8000/le2/product"
          );
          break;
        case "classification_3":
          selectedCategoryData = await axios.get(
            "http://localhost:8000/le3/product"
          );
          break;
        case "classification_4":
          selectedCategoryData = await axios.get(
            "http://localhost:8000/le4/product"
          );
          break;
        case "classification_5":
          selectedCategoryData = await axios.get(
            "http://localhost:8000/le5/product"
          );
          break;
        default:
          // If no checkbox is selected, fetch all products
          selectedCategoryData = await axios.get(
            "http://localhost:8000/all/products"
          );
          break;
      }

      // Update state with the selected category data
      this.setState({
        resultle1:
          checkboxId === "classification_1" ? selectedCategoryData.data : [],
        resultle2:
          checkboxId === "classification_2" ? selectedCategoryData.data : [],
        resultle3:
          checkboxId === "classification_3" ? selectedCategoryData.data : [],
        resultle4:
          checkboxId === "classification_4" ? selectedCategoryData.data : [],
        resultle5:
          checkboxId === "classification_5" ? selectedCategoryData.data : [],
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default le;
