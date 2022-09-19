package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberCenter {
	
	@GetMapping({"/memberCenter", "/memberCenter/MemberCenter"})
	public String loadMemberCenter() {
		return "MemberCenter/memberCenter";
	}
	
	
	
}
