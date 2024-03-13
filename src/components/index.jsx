import React, { Component } from "react";
import "../css/index.css";

class index extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>首頁</li>
              <li>品牌專區</li>
              <li>集點資訊</li>
            </ul>
          </nav>
          <div>
            <img src="../img/banner-3 12.png" alt="首頁大圖" />
          </div>
          <div class="diversion">
            <img src="../img/diversion_01.png" alt="樂味尋味" />
            <img src="../img/diversion_01.png" alt="點訪店鋪" />
            <img src="../img/diversion_01.png" alt="最新消息" />
          </div>
          <div class="search_pa">
            <p class="search_ch">搜尋店家</p>
          </div>
        </header>
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
                        src="../img/class/8_345.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <img src="../img/logo/8.png" class="logo" alt="..." />
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
                        src="../img/class/8_345.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <img src="../img/logo/8.png" class="logo" alt="..." />
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
                        src="../img/class/8_345.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <img src="../img/logo/8.png" class="logo" alt="..." />
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
      </React.Fragment>
    );
  }
}

export default index;
