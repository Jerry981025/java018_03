//package controller;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.PrintWriter;
//
//import javax.servlet.RequestDispatcher;
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import org.springframework.web.context.WebApplicationContext;
//import org.springframework.web.context.support.WebApplicationContextUtils;
//
//import com.google.gson.Gson;
//import com.google.gson.GsonBuilder;
//import com.google.gson.JsonObject;
//
//import model.MemberBean;
//import service.MemberService;
//import service.Impl.MemberServiceImpl;
//
//@WebServlet("/MemberCenterServlet")
//public class MemberCenterServlet extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//	
//	@Override
//	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		System.out.println("正在執行Servlet");
//		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
//		req.setCharacterEncoding("UTF-8");
//		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
//		BufferedReader br = req.getReader();
//		StringBuilder jsonIn = new StringBuilder();
//		String line = null;
//		while ((line = br.readLine()) != null) {
//			jsonIn.append(line);
//		}
//		System.out.println("input: " + jsonIn);
//		JsonObject jsonObject = gson.fromJson(jsonIn.toString(), JsonObject.class);
//		String action = jsonObject.get("action").getAsString();
//		String outStr = "";
//		switch (action) {
//		case "get":
//			MemberService ms = ctx.getBean(MemberService.class);
//			MemberBean mb = ms.findByMId("1");
//			outStr = gson.toJson(mb);
//			break;
//
//		default:
//			break;
//		}
//		resp.setCharacterEncoding("UTF-8");
//		resp.setContentType("application/json");
//		PrintWriter out = resp.getWriter();
//		out.println(outStr);
//		System.out.println("outStr: " + outStr);
//	}
//
//}
