import React, { Component } from 'react';
import "../css/brand.css";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMedal } from "react-icons/pi";
import { PiCoins } from "react-icons/pi";
import { GiCancel } from "react-icons/gi";


class index extends Component {
    state = { 
        search:'搜尋店家',
     } 
    render() { 
        return (<React.Fragment>
            <div id='header' className='d-flex justify-content-between'>
                <div className='col-9 col-sm-7 col-md-6 d-flex ms-2 justify-content-between align-items-center'>
                    <h4 id='homeBtn' className='my-auto btn headerText text-nowrap' onClick={()=>{window.location="/index"}}>首頁</h4>
                    <h4 className='my-auto p-0 btn headerText menuBtn d-flex align-items-center justify-content-center'><HiOutlineShoppingBag className='fs-4'/>購物車</h4>
                    <h4 className='my-auto p-0 btn headerText menuBtn d-flex align-items-center justify-content-center' onClick={()=>{window.location="/brand"}}><PiMedal className='fs-4'/>品牌專區</h4>
                    <h4 className='my-auto p-0 btn headerText menuBtn d-flex align-items-center justify-content-center' onClick={this.pointinfoShow}><PiCoins className='fs-4'/>集點資訊</h4>
                </div>
                <div id="pointinfo">
                    <button  id="pointinfoclose" onClick={this.pointinfoHide}><GiCancel   className='fs-2 text-light' /></button>
                    <h1>集點資訊</h1>
                    <p>．每消費20元即可累積1點。</p>
                    <p>．每點可折抵1元消費金額。</p>
                    <p>．點數可在下次消費時折抵使用。</p>
                    <p>．點數不可轉讓，不可兌換現金，不可合併使用。</p>
                    <p>．本集點活動以公告為準，如有更改，恕不另行通知。</p>
                </div>


                <div className='d-flex me-2  align-items-center'>
                    <h4 id='loginBtn' className='my-auto btn headerText text-nowrap' onClick={this.toggleMemberNav}>登入/註冊▼</h4>
                    <div id='memberNav' className='collapse'>
                        <img id='memberNavImg' src={require("../img/index/LeDian_LOGO-05.png")} alt='logo'></img>
                        <div>
                            <h4 className='headerText my-3'>個人檔案</h4><hr />
                            <h4 className='headerText my-3'>帳號管理</h4><hr />
                            <h4 className='headerText my-3'>歷史訂單</h4><hr />
                            <h4 className='headerText my-3'>載具存取</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div id='banner' className='d-flex justify-content-center'><img src={require("../img/index/Home_Banner_01.jpg")} alt='homeBanner' className='img-fluid'></img></div>
            <div className="container">
                <div className='navbar row'>
                    <div className='navImg col-4 btn'><img src={require("../img/index/LeDian_BANNER-01.jpg")} alt='navImg' className='img-fluid'></img></div>
                    <div className='navImg col-4 btn'><img src={require("../img/index/LeDian_BANNER-02.jpg")} alt='navImg' className='img-fluid'></img></div>
                    <div className='navImg col-4 btn' onClick={()=>{window.location="/news"}}><img src={require("../img/index/LeDian_BANNER-05.jpg")} alt='navImg' className='img-fluid'></img></div>
                </div>
                <input type="text" id='search' name='search' onChange={this.searchChange} value={this.state.search}  className="form-control rounded-pill ps-4 bg-secondary-subtle"></input>
                <h2 className='text-center mainColor m-2'>品牌專區</h2>
                <div id='brandArea' className='row'>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/1.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>迷克夏</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/2.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>得正</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/3.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>烏弄</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/4.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>五桐號</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/5.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>麻古茶坊</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/6.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>龜記茗品</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/7.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>茶湯會</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/8.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>八曜和茶</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/9.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>50嵐</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/10.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>TEA TOP第一味</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1 '>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/11.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>大苑子</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/12.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>可不可熟成紅茶</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/13.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>大茗本位製茶堂</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/14.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>清心福全</h3>
                    </div>
                    <div className='brandCard col-3 d-flex flex-column align-items-center my-1'>
                        <div className='brandImg rounded-circle m-1' onClick={()=>{window.location="/branch"}}>
                            <img src={require("../img/logo/15.png")} alt='navImg' className='img-fluid'></img>
                        </div>
                        <h3 className='brandText my-1'>Mr.Wish</h3>
                    </div>
                </div>
            </div>
            <div id="footer" className='d-flex'>
                <div id="footerLogo" className='col-3'>
                    <img id='"footerImg"' className='img-fluid' src={require("../img/index/LeDian_LOGO-04.png")} alt="footerLogo" />
                </div>
                <div className='col-6 d-flex align-items-center'>
                    <div  id='footerlink' className='col-2 d-flex flex-column'>
                        <div className='d-flex'>
                            <div><img className='img-fluid' src={require("../img/index/facebook.png")} alt="fackbook" /></div>
                            <div><img className='img-fluid' src={require("../img/index/instagram.png")} alt="instagram" /></div>
                            <div><img className='img-fluid' src={require("../img/index/line.png")} alt="line" /></div>
                        </div>
                        <p className='text-white text-nowrap footerText'>信箱: ledian.tw@gmail.com</p>
                    </div>
                </div>
                <div id='footerInfo' className='col-3 d-flex row align-items-center justify-content-center'>   
                    <div className='col-3 col-sm-6 d-flex flex-column align-items-center'>
                        <p className='footerText m-0 py-1 text-nowrap text-white'>意見回饋</p>
                        <p className='footerText m-0 py-1 text-nowrap text-white'>常見問題</p>
                    </div>
                    <div className='col-4 col-sm-6 d-flex flex-column align-items-start'>
                        <p className='footerText m-0 py-1 text-nowrap text-white'>使用者條款</p>
                        <p className='footerText m-0 py-1 text-nowrap text-white'>隱私權條款</p>
                        <p className='footerText m-0 py-1 text-nowrap text-white'>信用卡條款</p>
                    </div>
                </div>
            </div>
            </React.Fragment>);
    }
    searchChange = (e) => {
        var newState = {...this.state};
        newState.search = e.target.value   
        this.setState(newState);
    }
    pointinfoShow = function (event) {
        document.getElementById("pointinfo").style.top = event.clientY + "px";
        document.getElementById("pointinfo").style.left = event.clientX-250 + "px";
    } 

    pointinfoHide = function (event) {
        document.getElementById("pointinfo").style.top = "-500px";
        event.cancelBubble = true;
    }

    toggleMemberNav = () => {
        document.getElementById('memberNav').classList.toggle('collapse');
    }
    test = () => {
        alert('ok')
    }
}
 
export default index;