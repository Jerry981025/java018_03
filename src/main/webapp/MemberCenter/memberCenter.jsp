<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>會員中心</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<c:url value='/images/handbag-fill.svg'/>">
    <!-- Boostrap5.0 導入程式 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>

    <!-- 連結內容CSS -->
    <link rel="stylesheet" href="<c:url value='/css/MemberCenter.css'/>">

    <!-- jquery引用 -->
    <script src="<c:url value='/javaScript/jquery.js'/>"></script>
    <script src="<c:url value='/javaScript/MemberCenter.js'/>"></script>
</head>

<body>
    <!-- 導覽列 -->
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
            <!-- 品牌LOGO -->
            <a class="navbar-brand" href="../LoginHome/LoginHome.html">幫幫忙
                <img src="<c:url value='/images/handbag-fill.svg'/>" alt="" width="30" height="24"
                    class="d-inline-block align-text-top">
            </a>
            <!-- 手機版顯示 -->
            <div class="navbar-toggler border-0 p-0">
                <div class="rounded-circle d-flex">
                    <img src="https://picsum.photos/45/30/?random=1" class="rounded-circle" data-bs-toggle="collapse"
                        data-bs-target="#offcanvas">
                    <p class="fs-1 py-2 ps-1 m-0" data-bs-toggle="collapse" data-bs-target="#offcanvas">姓名</p>
                </div>
            </div>
            <!-- 桌機版顯示 -->

            <div class="collapse navbar-collapse" id="linkbar">
                <!-- 內容 -->
                <ul class="navbar-nav me-auto p-2">
                    <li class="nav-item">
                        <a class="nav-link" href="../INeedHelp/INeedHelp.html">提出需求(I need help!)</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../ICanHelp/ICanHelp.html">我要幫忙(I can help!)</a>
                    </li>
                </ul>
                <img src="https://picsum.photos/40/40/?random=1" class="rounded-circle" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            </div>
        </div>
    </nav>

    <!-- 小視窗時點大頭貼的offcanvas -->
    <div class="collapse navbar-collapse bg-light p-2" id="offcanvas">
        <!-- 內容 -->
        <ul class="navbar-nav me-auto bg-light">
            <li class="nav-item">
                <p class="nav-link m-0 fs-5 text-dark">會員中心</p>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../INeedHelp/INeedHelp.html">提出需求(I need help!)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../Login-Home/Login-Home.html">我要幫忙(I can help!)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../CommonProblem/CommonProblem.html">常見問題</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../AboutUs/AboutUs.html">關於我們</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../ContactCustomerService/ContactCustomerService.html">聯絡客服</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">登出</a>
            </li>
        </ul>
    </div>

    <!-- 內容 -->
    <div class="container-fluid px-0 py-3">
        <div class="row">
            <!-- 畫面左側 -->
            <div class="col-lg-2 px-2">
                <div class="accordion-body py-1 px-3">
                    <ul class="list-group">
                        <a href="MemberCenter.html">
                            <li class="list-group-item list-group-item-action list-group-item-light">基本資料</li>
                        </a>
                        <a href="">
                            <li class="list-group-item list-group-item-action list-group-item-light">I need help紀錄</li>
                        </a>
                        <a href="">
                            <li class="list-group-item list-group-item-action list-group-item-light">I can help紀錄</li>
                        </a>
                    </ul>
                </div>
            </div>

            <!-- 畫面右側 -->
            <div class="col-lg-10 px-4">
                <form class=" bg-light rounded-3 px-4">
                    <h1 class="pt-3">會員基本資料</h1>
                    <hr>
                    <!-- 第一列 -->
                    <div class="d-flex my-3">
                        <button class="rounded-circle">
                            <img src="<c:url value='/images/svg/person-svgrepo-com.svg'/>" height="100px" width="100px">
                        </button>
                        <div class="ms-4 mt-1">
                            <p class="fs-2 mb-3">${MemberBean.mFirstName}${MemberBean.mLastName}</p>
                            <p class="fs-6 text-secondary">會員編號</p>
                        </div>
                        <div class="ps-5">
                            <div class="d-flex ps-4 p-3">
                                <p id="rating" class="m-0 me-1 pt-1 fs-5">3.7</p>
                                <div id="starRating" class="d-flex p-2">
                                </div>
                            </div>
                            <a class="m-4" href="#">???筆紀錄</a>
                        </div>
                    </div>
                    <!-- 第二列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">信箱:</p>
                        </div>
                        <div id="accountDiv" class="col-9 d-flex">
                            <p id="account" class="p-0 m-0">abcdefghijk@gmail.com</p>
                            <a id="accountUpdate" class="ms-3" style="width: 35px;" href="#" >修改</a>
                        </div>
                    </div>
                    <hr>
                    <!-- 第三列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">密碼:</p>
                        </div>
                        <div class="col-9 d-flex">
                            <p class="p-0 m-0">********</p>
                            <a class="ms-3" href="#">修改</a>
                        </div>
                    </div>
                    <hr>
                    <!-- 第四列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">生日:</p>
                        </div>
                        <div class="col-5 d-flex">
                            <p id="birthday" class="p-0 m-0">1911-01-01</p>
                            <input style="display: none;" type="date" id="newBirthday">
                            <a id="birthdayUpdate" class="ms-3" style="width: 35px;" href="javascript:;" >修改</a>
                            <a id="birthdayUpdateConfirm" class="ms-3 pt-1" style="width: 35px; display: none;" href="javascript:;" >確認</a>
                            <a id="birthdayUpdateCancel" class="ms-3 pt-1" style="width: 35px; display: none;" href="javascript:;" >取消</a>
                        </div>
                    </div>
                    <hr>
                    <!-- 第五列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">常用地址:</p>
                        </div>
                        <div class="col-5">
                            <p id="commonAddress" class="p-0 m-0">台北科技大學</p>
                        </div>
                    </div>
                    <!-- 第六列 -->
                    <div class="row pt-2">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">儲存地址:</p>
                        </div>
                        <div class="col-9 d-flex">
                            <select id="saveAddress">
                                <option>台北科技大學</option>
                                <option>台北車站</option>
                                <option>光華商場</option>
                                <option>幫幫忙</option>
                            </select>
                            <a id="setCommonAddress" class="ms-3" href="javascript:;">設為常用</a>
                            <a id="dropAddress" class="ms-3" href="javascript:;">刪除地址</a>
                        </div>
                    </div>
                    <!-- 第七列 -->
                    <div class="row">
                        <div class="col-3 col-lg-2">
                            <a id="addAdress" class="d-flex pt-2" href="javascript:;" style="width: 88px;">
                                <img src="<c:url value='/images/svg/add-create-new-plus-svgrepo-com.svg'/>" style="height: 24px;">
                                <p class="m-0 text-dark">新增地址</p>
                            </a>
                        </div>
                        <div class="col-9 pt-2 d-flex">
                            <input style="display: none;" type="text" id="newAddress">
                            <a id="newAddressConfirm" class="ms-3 pt-1" style="width: 35px; display: none;" href="javascript:;" >確認</a>
                            <a id="newAddressCancel" class="ms-3 pt-1" style="width: 35px; display: none;" href="javascript:;" >取消</a>
                        </div>
                    </div>
                    <hr>
                    <!-- 第八列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">行動電話:</p>
                        </div>
                        <div class="col-9 col-lg-2 d-flex">
                            <p class="p-0 m-0">0912345678</p>
                            <a class="ms-3" href="#">修改</a>
                        </div>
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">家用電話:</p>
                        </div>
                        <div class="col-9 col-lg-4 d-flex">
                            <p id="phone" class="p-0 m-0">0212345678</p>
                            <input id="newPhone" style="display: none;" type="text" class="p-0">
                            <a id="phoneUpdate" class="ms-3" style="width: 35px;" href="javascript:;" >修改</a>
                            <a id="phoneUpdateConfirm" class="ms-3 pt-1" style="width: 35px; display: none;" href="javascript:;" >確認</a>
                            <a id="phoneUpdateCancel" class="ms-3 pt-1" style="width: 35px; display: none;" href="javascript:;" >取消</a>
                        </div>
                    </div>
                    <hr>
                    <!-- 第九列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">收款帳號:</p>
                        </div>
                        <div class="col-5 d-flex">
                            <p class="p-0 m-0">****-****-****-0000</p>
                            <a class="ms-3" href="#">修改</a>
                        </div>
                    </div>
                    <hr>
                    <!-- 第十列 -->
                    <div class="row d-flex">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">常用信用卡:</p>
                        </div>
                        <div class="col-5">
                            <p id="commonVisa" class="p-0 m-0">****-****-****-0000</p>
                        </div>
                    </div>
                    <div class="row d-flex pb-4 pt-2">
                        <div class="col-3 col-lg-2">
                            <p class="p-0 m-0">信用卡:</p>
                        </div>
                        <div class="col-5">
                            <select id="saveVisa">
                                <option>****-****-****-0000</option>
                                <option>****-****-****-1111</option>
                            </select>
                            <a id="setCommonVisa" class="ms-3" href="javascript:;">設為常用</a>
                            <a id="dropVisa" class="ms-3" href="javascript:;">刪除信用卡</a>
                            <a class="ms-3" href="#">新增信用卡</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <!-- 大視窗時點大頭貼的offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header pb-0">
            <div class="d-flex">
                <img src="https://picsum.photos/50/50/?random=1" width="55" height="55" class="rounded-circle">
                <div class="ps-3">
                    <p class="fs-4 p-0 m-0">姓名處</p>
                    <p class="fs-6 p-0 mb-2 text-secondary">會員編號</p>
                </div>
                <div class="ps-2">
                    <div class="d-flex ps-4 pb-1">
                        <p id="offcanvasRating" class="m-0 me-1 pt-1 fs-6">3.7</p>
                        <div id="offcanvasStarRating" class="d-flex p-2">
                        </div>
                    </div>
                    <a class="m-4" href="#">???筆紀錄</a>
                </div>
            </div>
        </div>
        <div class="offcanvas-body pt-0">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <p class="nav-link m-0 fs-5 text-dark">會員中心</p>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../CommonProblem/CommonProblem.html">常見問題</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../AboutUs/AboutUs.html">關於我們</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../ContactCustomerService/ContactCustomerService.html">聯絡客服</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">登出</a>
                </li>
            </ul>
        </div>
    </div>

    <!-- 頁尾 -->
    <footer class="footer border-top bg-dark text-light">
        <div class="container">
            <div class="row gy-4">
                <div class="col-lg-5 col-md-12 p-2" href="#">
                    <h4 class="text-nowrap">幫幫忙</h4>
                    <h6>俗話說在家靠父母，出外靠朋友</h6>
                    <h6>但不好請朋友幫忙怎麼辦？沒有朋友幫忙怎麼辦？</h6>
                    <h6>為了解決這個問題，我們提供一個平台，不管是「I need help ! 」</h6>
                    <h6>還是「I can help ! 」，只要使用「幫幫忙」，問題歹就補！</h6>
                    <div class="">
                        <a href="#"><img class="bi bi-twitter m-1" src="<c:url value='/images/svg/twitter-svgrepo-com.svg'/>"
                                style="height: 40px; width: 40px;"></a>
                        <a href="#"><img class="bi bi-facebook m-1" src="<c:url value='/images/svg/facebook-svgrepo-com.svg'/>"
                                style="height: 40px; width: 40px;"></a>
                        <a href="#"><img class="bi bi-instagram m-1 rounded-circle"
                                src="<c:url value='/images/svg/instagram-cat-tail-svgrepo-com.svg'/>"
                                style="height: 40px; width: 40px; border: 1px solid ; color: #aaa;"></a>
                        <a href="#"><img class="bi bi-linkedin m-1" src="<c:url value='/images/svg/linkedin-svgrepo-com.svg'/>"
                                style="height: 40px; width: 40px;"></a>
                    </div>
                </div>
                <div class="col-lg-2 col-6 align-items-center p-2">
                    <h4>其他資訊</h4>
                    <ul class="nav flex-column">
                        <li class="nav-item pt-1">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page"
                                href="../Login-Home/Login-Home.html">首頁</a>
                        </li>
                        <li class="nav-item pt-1">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page"
                                href="../MemberCenter/MemberCenter.html">會員中心</a>
                        </li>
                        <li class="nav-item pt-1">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page" href="#">使用者條款</a>
                        </li>
                        <li class="nav-item pt-1">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page" href="#">隱私權條款</a>
                        </li>
                        <li class="nav-item pt-1">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page"
                                href="../CommonProblem/CommonProblem.html">常見問題</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6 p-2">
                    <h4>我們的服務</h4>
                    <ul class="nav flex-column">
                        <li class="nav-item pt-2">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page"
                                href="../INeedHelp/INeedHelp.html">提出需求(I need
                                help!)</a>
                        </li>
                        <li class="nav-item pt-2">
                            <a class="nav-link p-0 text-secondary fs-6" aria-current="page"
                                href="../Login-Home/Login-Home.html">我要幫忙(I can
                                help!)</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 p-2 text-center text-md-start">
                    <h4 class="text-nowrap">聯絡我們</h4>
                    <p>JAVA班018第三組</p>
                    <p class="m-0">Phone : (xx) xxxx-xxxx</p>
                    <p class="p-0 m-0">Email : 018_team03@xxx.com.tw</p>
                </div>
            </div>
            <div class="container text-center p-1">
                <h6 class="text-nowrap">© 2022 JAVA班018第三組. 版權所有</h6>
            </div>
        </div>
    </footer>


</body>

</html>