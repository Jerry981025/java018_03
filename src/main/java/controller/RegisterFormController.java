package controller;

import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import model.MemberBean;
import service.MemberService;;

@Controller
public class RegisterFormController {
	@Autowired
	ServletContext ctx;

	@Autowired
	MemberService memberService;

	@PostMapping("/registerForm")
	public @ResponseBody Map<String, Object> addMember(@RequestBody MemberBean mb) {
		return memberService.saveMember(mb);
	}
}
