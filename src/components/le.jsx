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
    resultle: [],
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
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-md-4 col-lg-3 col-xxl-2">
                <div className="choose_left">
                  <div className="choose_left_1">透過以下分類篩選</div>
                  <div className="choose_classification">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_1"
                        onChange={this.handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_1"
                      >
                        精選推味
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_2"
                        onChange={this.handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_2"
                      >
                        茶品精選
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_3"
                        onChange={this.handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_3"
                      >
                        拿鐵探查
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_4"
                        onChange={this.handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_4"
                      >
                        口感尋覓
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="classification_5"
                        onChange={this.handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="classification_5"
                      >
                        新鮮探勘
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-md-8 col-lg-9 col-xxl-10 row choose_right">
                {this.state.resultle.map((item, index) => (
                  <div key={index} className="col-lg-6 col-xxl-4 my-3">
                    <div className="card">
                      <div className="image">
                        {/* 動態設定圖片路徑 */}
                        <img
                          src={`/img/class/${item.product_img}.png`}
                          className="card-img-top"
                          alt="..."
                        />
                        {/* 動態設定 logo 路徑 */}
                        <img
                          src={`/img/logo/${item.brand_id}.png`}
                          className="logo"
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
                      <div className="card-body_la">
                        <p className="card-text">{item.product_name}</p>
                        <p className="price_1">${item.products_price_0}</p>
                        <p className="price_2">${item.products_price_1}</p>
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
      var resultleall = await axios.get("http://localhost:8000/all/products");

      this.setState({
        resultle1: resultle1.data,
        resultle2: resultle2.data,
        resultle3: resultle3.data,
        resultle4: resultle4.data,
        resultle5: resultle5.data,
        resultlebrand: resultlebrand.data,
        resultleall: resultleall.data,
        resultle: resultleall.data,
      });
      console.log(this.state);
    } catch (error) {
      console.error(error);
    }
  };

  // 可以使用，但無法篩選出重複的品項
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

  // handleCheckboxChange = async (event) => {
  //   const checkboxId = event.target.id;

  //   try {
  //     let selectedCategories = []; // 用來儲存已選擇的分類

  //     // 獲取所有已選擇的分類
  //     const checkboxes = document.querySelectorAll(".form-check-input:checked");
  //     checkboxes.forEach((checkbox) => {
  //       selectedCategories.push(checkbox.id);
  //     });

  //     let selectedCategoryData = []; // 用來儲存已選擇分類的資料

  //     // 根據已選擇的分類獲取資料
  //     for (let category of selectedCategories) {
  //       switch (category) {
  //         case "classification_1":
  //           selectedCategoryData.push(
  //             await axios.get("http://localhost:8000/le1/product")
  //           );
  //           break;
  //         case "classification_2":
  //           selectedCategoryData.push(
  //             await axios.get("http://localhost:8000/le2/product")
  //           );
  //           break;
  //         case "classification_3":
  //           selectedCategoryData.push(
  //             await axios.get("http://localhost:8000/le3/product")
  //           );
  //           break;
  //         case "classification_4":
  //           selectedCategoryData.push(
  //             await axios.get("http://localhost:8000/le4/product")
  //           );
  //           break;
  //         case "classification_5":
  //           selectedCategoryData.push(
  //             await axios.get("http://localhost:8000/le5/product")
  //           );
  //           break;
  //         default:
  //           break;
  //       }
  //     }

  //     // 找出已選擇分類中共同的產品
  //     let commonProducts = [];
  //     if (selectedCategoryData.length > 1) {
  //       commonProducts = selectedCategoryData
  //         .reduce((accumulator, current) => {
  //           return accumulator.filter(({ product_id }) =>
  //             current.data.some(({ product_id: id }) => id === product_id)
  //           );
  //         })
  //         .map(({ data }) => data);
  //     } else {
  //       commonProducts = selectedCategoryData[0].data;
  //     }

  //     // 使用共同的產品來更新狀態
  //     this.setState({
  //       resultle1: commonProducts,
  //       resultle2: commonProducts,
  //       resultle3: commonProducts,
  //       resultle4: commonProducts,
  //       resultle5: commonProducts,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // handleCheckboxChange = async (event) => {
  //   const checkboxId = event.target.id;

  //   try {
  //     let selectedCategoryData = [];

  //     switch (checkboxId) {
  //       case "classification_1":
  //         selectedCategoryData = await axios.get(
  //           "http://localhost:8000/le1/product"
  //         );
  //         break;
  //       case "classification_2":
  //         selectedCategoryData = await axios.get(
  //           "http://localhost:8000/le2/product"
  //         );
  //         break;
  //       case "classification_3":
  //         selectedCategoryData = await axios.get(
  //           "http://localhost:8000/le3/product"
  //         );
  //         break;
  //       case "classification_4":
  //         selectedCategoryData = await axios.get(
  //           "http://localhost:8000/le4/product"
  //         );
  //         break;
  //       case "classification_5":
  //         selectedCategoryData = await axios.get(
  //           "http://localhost:8000/le5/product"
  //         );
  //         break;
  //       default:
  //         // 如果未選擇任何選項，則隨機選擇所有飲料內容
  //         selectedCategoryData = await axios.get(
  //           "http://localhost:8000/all/products"
  //         );
  //         break;
  //     }

  //     // 如果該分類有飲料數據，則隨機選擇一個飲料
  //     if (selectedCategoryData.data.length > 0) {
  //       const randomIndex = Math.floor(
  //         Math.random() * selectedCategoryData.data.length
  //       );
  //       const randomDrink = selectedCategoryData.data[randomIndex];

  //       // Log the selected drink for debugging
  //       console.log("Selected drink:", randomDrink);

  //       // 更新狀態以渲染隨機選擇的飲料內容
  //       this.setState({
  //         selectedDrink: randomDrink,
  //       });
  //     } else {
  //       // 如果該分類下沒有飲料數據，則清空狀態
  //       this.setState({
  //         selectedDrink: null,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
}

export default le;
