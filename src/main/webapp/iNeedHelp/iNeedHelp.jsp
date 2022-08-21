<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>I need help</title>
</head>
<body>
<div style="color: #eee; background-color: #000000;">
		<h1>幫幫忙</h1>
		<br>
	</div>

	<h1 align='center'>I need help</h1>
	
	<form method=get>	
	需要幫忙的選項:
	<input type="checkbox" name="checkboxhelp" value="代買" size="10">代買
	<input type="checkbox" name="checkboxhelp" value="代排" size="10">代排
	<input type="checkbox" name="checkboxhelp" value="到府服務" size="10">到府服務
	<br>
	送件地址：
	<input type="text" name="deliveryaddress" size="50">
	<br>
	收件地址:
	<input type="text" name="receiveaddress" size="50">
	<br>
	品牌:
	<input type="text" name="brand" size="10">
	<br>
	產品細項:
	<input type="text" name="product" size="10">
	<br>
	數量:
	<input type="text" name="quantity" size="10">
	<br>
	預估價格:
	<input type="text" name="price" size="10">
	<br>
	DeadLine:
		<input type="week" name="deadLine" size="10">
		<br>
	照片上傳(選項):
		<input type="file" name="image" size="10">
		<br>	
	跑腿費：(功能：金額填寫):
		<input type="text" name=tip>
		<br>		
		<input type=submit value="送出訂單">
			
			
			
	</form>
	<h1>
		<%
		try {
		
		// 				DeadLine:
		// 					<input type="week" name="deadLine" size="10">
		//						照片上傳(選項):
		// 					<input type="file" name="image" size="10">

			
		String[] values = request.getParameterValues("checkboxhelp");
			out.println(values[0] + "<br>");	
			
		String deliveryaddress = request.getParameter("deliveryaddress");			
			out.println("送件地址:" + deliveryaddress + "<br>");	
		String receiveaddress = request.getParameter("receiveaddress");			
			out.println("收件地址:" + receiveaddress + "<br>");	
		String brand = request.getParameter("brand");			
			out.println("品牌:" + brand + "<br>");	
		String product = request.getParameter("product");			
			out.println("產品細項:" + product + "<br>");		
		int quantity = Integer.parseInt(request.getParameter("quantity"));
			out.println("數量:" + quantity + "<br>");
		int price = Integer.parseInt(request.getParameter("price"));
			out.println("預估價格:" + price + "<br>");
		int tip = Integer.parseInt(request.getParameter("tip"));
			out.println("跑腿費:" + tip);

		} catch (Exception e) {
		}
		%>
	</h1>
	

</body>
</html>