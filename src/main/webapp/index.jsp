<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

        <!DOCTYPE html>
        <html lang="en">

        <head>
            <title>首頁</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Boostrap5.0 導入程式 -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                crossorigin="anonymous"></script>
            <!-- 連結內容CSS -->
            <link rel="stylesheet" href="<c:url value='/css/frontPage.css'/>">
        </head>

        <body>
            <!-- 導覽列 -->
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <!-- 品牌LOGO -->
                    <a class="navbar-brand" href="#">幫幫忙
                        <img src="<c:url value='/images/handbag-fill.svg'/>" alt="handbagLogo" width="30" height="24"
                            class="d-inline-block align-text-top">
                    </a>
                    <!-- 手機版顯示-->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#linkbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- 桌機版顯示 -->
                    <div class="collapse navbar-collapse" id="linkbar">
                        <!-- 內容 -->
                        <ul class="navbar-nav">
                            <!--                             <li class="nav-item"> -->
                            <!--                                 <a class="nav-link" href="./frontPage.html">首頁</a> -->
                            <!--                             </li> -->

                            <li class="nav-item">
                                <a class="nav-link" href="<c:url value='/aboutUs/aboutUs.jsp'/>">關於我們</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" data-bs-toggle="modal"
                                    data-bs-target="#loginModal">會員登入</a>
                                <div class="modal fade" id="loginModal">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <!-- Header -->
                                            <div class="modal-header">
                                                <h3>會員登入</h3>
                                                <button type="button" class="btn-close"
                                                    data-bs-dismiss="modal"></button>
                                            </div>
                                            <!-- Body -->
                                            <div class="modal-body">
                                                <!-- 登入表單 -->
                                                <form>
                                                    <!-- email -->
                                                    <div class="form-group">
                                                        <input type="email" class="account form-control"
                                                            placeholder="Email">
                                                    </div>
                                                    <!-- password -->
                                                    <div class="form-group">
                                                        <input type="password" class="password form-control"
                                                            placeholder="Password">
                                                    </div>
                                                    <!-- checkbox -->
                                                    <div class="form-group">
                                                        <input type="checkbox" class="mycheckbox">記住密碼
                                                    </div>
                                                    <!-- 送出按鈕 -->
                                                    <button type="button" class="btn btn-info">登入</button>
                                                </form>
                                                <!-- Footer -->
                                                <div class="modal-footer">
                                                    <div class="signup">
                                                        <span>尚未成為會員</span>
                                                        <a href="<c:url value='/registerForm/registerForm.jsp'/>"
                                                            type="button" class="member">立即加入</a>
                                                    </div>
                                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="<c:url value='/registerForm/registerForm.jsp'/>">會員註冊</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <!-- 首頁動畫 -->
            <div class="container-fluid p-0">
                <video class="bground-video" autoplay loop muted src="<c:url value='/videos/frontpage-googlemap.mp4'/>"	> </video>
            </div>

            <!-- 頁尾 -->
            <footer class="navbar-fixed-bottom border-top bg-dark text-light">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-5 col-md-12 p-2" href="#">
                            <h4 class="text-nowrap">幫幫忙</h4>
                            <h6>俗話說在家靠父母，出外靠朋友</h6>
                            <h6>但不好請朋友幫忙怎麼辦？沒有朋友幫忙怎麼辦？</h6>
                            <h6>為了解決這個問題，我們提供一個平台，不管是「I need help ! 」</h6>
                            <h6>還是「I can help ! 」，只要使用「幫幫忙」，問題歹就補！</h6>
                            <div class="">
                                <a href="#"><img class="bi bi-twitter m-1"
                                        src="<c:url value='/images/svg/twitter-svgrepo-com.svg'/>"
                                        style="height: 40px; width: 40px;"></a>
                                <a href="#"><img class="bi bi-facebook m-1"
                                        src="<c:url value='/images/svg/facebook-svgrepo-com.svg'/>"
                                        style="height: 40px; width: 40px;"></a>
                                <a href="#"><img class="bi bi-instagram m-1 rounded-circle"
                                        src="<c:url value='/images/svg/instagram-cat-tail-svgrepo-com.svg'/>"
                                        style="height: 40px; width: 40px; border: 1px solid ; color: #aaa;"></a>
                                <a href="#"><img class="bi bi-linkedin m-1"
                                        src="<c:url value='/images/svg/linkedin-svgrepo-com.svg'/>"
                                        style="height: 40px; width: 40px;"></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 align-items-center p-2">
                            <h4>其他資訊</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item pt-1">
                                    <a class="nav-link p-0 text-secondary fs-6" aria-current="page" href="#">會員中心</a>
                                </li>
                                <li class="nav-item pt-1">
                                    <a class="nav-link p-0 text-secondary fs-6" aria-current="page" href="#">使用者條款</a>
                                </li>
                                <li class="nav-item pt-1">
                                    <a class="nav-link p-0 text-secondary fs-6" aria-current="page" href="#">隱私權條款</a>
                                </li>
                                <li class="nav-item pt-1">
                                    <a class="nav-link p-0 text-secondary fs-6" aria-current="page" href="#">常見問題</a>
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