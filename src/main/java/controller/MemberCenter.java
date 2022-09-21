package controller;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
			mId = (int)(Math.random() * 5) + 1;
		}
		return memberService.findByMId(mId);
	}
	
	@GetMapping("/GETMemberPicture")
	public @ResponseBody String GETMemberPicture(
			@RequestParam(name = "mId", required = false) String StrmId
			) {
		System.out.println(StrmId);
		Integer mId = Integer.valueOf(StrmId);
		MemberBean bean = memberService.findByMId(mId);
		Blob blob = bean.getmPicture();
		byte[] b = null;
		try {
			b = blob.getBytes(1, (int)blob.length());
		} catch (SQLException e) {
			e.printStackTrace();
			e.getMessage();
		}
		String base64 = Base64.getEncoder().encodeToString(b);
		return base64;


	}
	
	
	
}
