<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>This for test</title>
</head>
<body>
<a href="<c:url value='MemberCenter/memberCenter.jsp'/>">Jerry Test</a>
<a href="<c:url value='/MemberCenterServlet.do'/>">Jerry Test do</a>
</body>
</html>