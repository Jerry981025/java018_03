<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

        <!DOCTYPE html>
        <html lang="en">

        <head>
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
            <link rel="stylesheet" href="<c:url value='/css/aboutUs.css'/>">
            <title>關於我們</title>
        </head>

        <body>
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb m-2 p-3">
                    <li class="breadcrumb-item"><a href="<c:url value='/index.jsp'/>">首頁</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">關於我們</li>
                </ol>
            </nav>

            <div class="card">
                <div class="card-header">
                    關於我們
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>網際網路無遠弗屆，人與人溝通不再受地理環境限制，不同國家的人們交流零距離，實踐了「地球村」的概念。但是，每個人都會有需要實體幫助的時候，俗話說在家靠父母，出外靠朋友，但不好請朋友幫忙怎麼辦？沒有朋友幫忙怎麼辦？為了解決這個問題，我們提供一個平台，不管是「I
                            need help ! 」，還是「I can help ! 」，只要使用「幫幫忙」，問題歹就補！</p>
                        <footer class="blockquote-footer">JAVA班018<cite title="Source Title">第三組</cite></footer>
                    </blockquote>
                </div>
            </div>

            <!-- 圖片 -->
            <div class="img">
                <img src="<c:url value='/images/We-can-help-2.jpg'/>" alt="We-can-help">
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
                                <a href="#"><img class="bi bi-twitter m-1" src="../images/svg/twitter-svgrepo-com.svg"
                                        style="height: 40px; width: 40px;"></a>
                                <a href="#"><img class="bi bi-facebook m-1" src="../images/svg/facebook-svgrepo-com.svg"
                                        style="height: 40px; width: 40px;"></a>
                                <a href="#"><img class="bi bi-instagram m-1 rounded-circle"
                                        src="../images/svg/instagram-cat-tail-svgrepo-com.svg"
                                        style="height: 40px; width: 40px; border: 1px solid ; color: #aaa;"></a>
                                <a href="#"><img class="bi bi-linkedin m-1" src="../images/svg/linkedin-svgrepo-com.svg"
                                        style="height: 40px; width: 40px;"></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-6 align-items-center p-2">
                            <h4>其他資訊</h4>
                            <ul class="nav flex-column">
                                <li class="nav-item pt-1">
                                    <a class="nav-link p-0 text-secondary fs-6" aria-current="page"
                                        href="<c:url value='/webapp/index.jsp'/>">首頁</a>
                                </li>
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