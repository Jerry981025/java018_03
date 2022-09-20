package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import service.MemberService;

@Controller
public class MemberCenter {

	@GetMapping({"/memberCenter", "/memberCenter/MemberCenter"})
	public String loadMemberCenter() {
		return "MemberCenter/memberCenter";
	}
	
	
	
}
