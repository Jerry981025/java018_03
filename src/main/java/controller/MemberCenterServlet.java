package controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.MemberBean;
import sevice.MemberService;

@WebServlet("/MemberCenterServlet.do")
public class MemberCenterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
		System.out.println("正在執行Servlet");
		MemberService ms = new MemberService();
		MemberBean mb = ms.findByMId("5");
		request.setAttribute("MemberBean", mb);
		RequestDispatcher rd = request.getRequestDispatcher("/MemberCenter/memberCenter.jsp");
		rd.forward(request, response);
		return;
	}
}
