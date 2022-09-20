package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import model.MemberBean;
import service.MemberService;

@Controller
public class MemberCenter {
	
	@Autowired
	MemberService memberService;
	
	@GetMapping({"/memberCenter", "/memberCenter/MemberCenter"})
	public String loadMemberCenter() {
		return "MemberCenter/memberCenter";
	}
	
	@GetMapping("/GETMember")
	public @ResponseBody MemberBean GETMemberDetail(
			@CookieValue(name = "mId", required = false) Integer mId
			) {
		if (mId == null || mId == 0) {
			mId = (int)(Math.random() * 5);
		}
		return memberService.findByMId(mId);
	}
	
}
