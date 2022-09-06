package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import model.MemberBean;
import service.MemberService;
import service.Impl.MemberServiceImpl;

@WebServlet("/MemberCenterServlet.do")
public class MemberCenterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		System.out.println("正在執行Servlet");
//		MemberService ms = new MemberServiceImpl();
		WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
		MemberService ms = ctx.getBean(MemberService.class);
		MemberBean mb = ms.findByMId("1");
		request.setAttribute("MemberBean", mb);
		System.out.println("搜尋到的: " + mb);
		RequestDispatcher rd = request.getRequestDispatcher("/MemberCenter/memberCenter.jsp");
		rd.forward(request, response);
		return;
	}
}
