<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
        <!DOCTYPE html>
        <html>

        <head>
            <title>會員註冊</title>
            <meta charset="UTF-8">
            <!-- 響應式網站 -->
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- Boostrap5.0 導入程式 -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                crossorigin="anonymous"></script>

            <!-- 連結內容CSS -->
            <link rel="stylesheet" href="<c:url value='/css/registerForm.css'/>">
            <!-- 連結內容js -->
            <script src="<c:url value='/javaScript/registerForm.js'/>"></script>

        </head>

        <body>
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb m-3 p-2">
                    <li class="breadcrumb-item"><a href="<c:url value='/index.jsp'/>">首頁</a></li>
                    <li class="breadcrumb-item active" aria-current="page">會員註冊</li>
                </ol>
            </nav>

            <div class="container">
                <form action="">
                    <h1>會員註冊</h1>
                    <hr>
                    <!-- 姓名 -->
                    <div class="row">
                        <div class="col-sm-3 gy-4">
                            <label for="validationDefault01" class="form-label">姓氏</label>
                            <input type="text" class="form-control" id="validationDefault01" placeholder="" required>
                        </div>
                        <div class="col-sm-3 p-1 gy-4">
                            <label for="validationDefault02" class="form-label">名字</label>
                            <input type="text" class="form-control" id="validationDefault02" placeholder="" required>
                        </div>
                    </div>
                    <br>
                    <!-- 密碼 -->
                    <div class="row">
                        <div class="col-sm-6">
                            <label>密碼</label>
                            <div class="form-floating">
                                <input type="password" class="form-control" placeholder="密碼">
                                <label>輸入密碼</label>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-floating">
                                <input type="password" class="form-control" placeholder="確認密碼">
                                <label>確認密碼</label>
                            </div>
                        </div>
                    </div>
                    <br>
                    <!-- 生日 -->
                    <div class="row">
                        <div class="col-sm-6">
                            <label>生日</label>
                            <input type="date" placeholder="生日" class="form-control" required>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-6">
                            <label for="inputEmail4" class="form-label">電子信箱</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="name@example.com"
                                required>
                        </div>
                    </div>
                    <br>
                    <!-- 第四列 -->
                    <div class="row">
                        <div class="col-sm-6">
                            <label>行動電話</label>
                            <input name="mobile" id="mobile" class="form-control" maxlength="10"
                                placeholder="0912-345678" required>
                        </div>
                    </div>
                    <br>
                    <!-- 第五列 -->
                    <div class="row">
                        <div class="col-sm-6">
                            <label for="inputArea" class="form-label">國家</label>
                            <input type="text" list="state" name="State" placeholder="請選擇..." class="form-control"
                                required>
                            <datalist id="state">
                                <option value="台灣">台灣</option>
                                <option value="美國">美國</option>
                                <option value="日本">日本</option>
                            </datalist>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="inputZip" class="form-label">地址</label>
                            <input type="text" class="form-select" id="inputZip" placeholder="郵遞區號">
                        </div>
                        <div class="col-sm-4">
                            <label for="inputArea" class="form-label">地區</label>
                            <input type="text" list="area" name="Area" placeholder="請選擇地區" class="form-control"
                                required>
                            <datalist id="area">
                                <option value="基隆市">基隆市</option>
                                <option value="新北市">新北市</option>
                                <option value="台北市">台北市</option>
                                <option value="桃園市">桃園市</option>
                                <option value="新竹縣">新竹縣</option>
                                <option value="新竹市">新竹市</option>
                                <option value="苗栗縣">苗栗縣</option>
                                <option value="台中市">台中市</option>
                                <option value="彰化縣">彰化縣</option>
                                <option value="南投縣">南投縣</option>
                                <option value="雲林縣">雲林縣</option>
                                <option value="嘉義縣">嘉義縣</option>
                                <option value="嘉義市">嘉義市</option>
                                <option value="台南市">台南市</option>
                                <option value="高雄市">高雄市</option>
                                <option value="屏東縣">屏東縣</option>
                                <option value="宜蘭縣">宜蘭縣</option>
                                <option value="花蓮縣">花蓮縣</option>
                                <option value="台東縣">台東縣</option>
                                <option value="澎湖縣">澎湖縣</option>
                                <option value="金門縣">金門縣</option>
                                <option value="連江縣">連江縣</option>
                            </datalist>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 p-2">
                            <label></label>
                            <input type="text" placeholder="路名街道巷弄名稱" class="form-control" required>
                        </div>
                    </div>
                    <br>
                    <!-- 第五列  驗証碼-->
                    <div class="vcode">
                        <div class="row">
                            <div class="col-sm-6" class="input_code" required>
                                <label for="inputCode">驗證碼：</label>
                                <input type="text" id="inputCode" />
                                <span id="text_show"></span>
                            </div>
                            <div class="col-sm-6" class="code_show">
                                <span class="code" id="checkCode"></span>
                                <a id="linkbt" class="p-3">重新整理</a>
                            </div>
                        </div>
                        <input id="Button1" type="button" value="確定" />
                    </div>
            </div>

            <!-- 第六列 -->
            <div class="row">
                <div class="col-sm-6 p-2">
                    <input type="checkbox">
                    <a href="../../Java18-03 Project/privacyPolicy/privacy.html" class="link-dark">我已閱讀，並同意隱私政策</a>
                </div>
            </div>
            <br>
            <br>
            <!-- 第七列 -->
            <div class="row">
                <div class="col-sm-4"></div>
                <button type="submit" class="btn btn-primary">
                    送出
                </button>
            </div>
            </form>
            </div>
            <br>
            <br>
            <!--================================= 頁尾 ===================================-->
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
                                        href="../../Java18-03 Project/frontPage/frontPage.html">首頁</a>
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