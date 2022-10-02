package controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import global.GlobalService;
import model.MemberBean;
import service.MemberService;


@RestController
public class LoginController {

	String loginForm = "/index.html";

	MemberService memberService;

	@Autowired
	public LoginController(MemberService memberService) {
		this.memberService = memberService;
	}

	public String login(HttpServletRequest request, Model model,
			@CookieValue(value = "email", required = false) String email,
			@CookieValue(value = "password", required = false) String password,
			@CookieValue(value = "rm", required = false) Boolean rm) {
		if (email == null)
			email = "";
		if (password == null) {
			password = "";
		} else {
			password = GlobalService.decryptString(GlobalService.KEY, password);
		}

		if (rm != null) {
			rm = Boolean.valueOf(rm);
		} else {
			rm = false;
		}

		MemberBean saveBean = new MemberBean();
		model.addAttribute(saveBean);
		return loginForm;
	}

	
//	@GetMapping("test")
//	public MemberBean Test(HttpSession session) {
//		MemberBean memberBean = (MemberBean) session.getAttribute("member");
//		return memberBean;
//	}
	
	@PostMapping("/login")
	public Map<String, Object> checkAccount(@RequestBody MemberBean mb, HttpSession session
			 ) {
		mb = memberService.findByEmailAndPassword(mb);
		if (mb != null) {
			session.setAttribute("member", mb);
		}
		
		Map<String, Object> respMap = new HashMap<>();
		respMap.put("mEmail", mb.getmEmail());
		respMap.put("mPassword", mb.getmPassword());
		return respMap;

	}
}
