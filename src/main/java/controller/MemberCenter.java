package controller;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import model.MemberBean;
import service.MemberService;

@Controller
public class MemberCenter {
	
	@Autowired
	MemberService memberService;
	
	@GetMapping("/memberCenter")
	public String loadMemberCenter() {
		return "MemberCenter/memberCenter";
	}
	
	@GetMapping("/member")
	public @ResponseBody MemberBean memberDetail(
			@CookieValue(name = "mId", required = false) Integer mId
			) {
		if (mId == null || mId == 0) {
			mId = (int)(Math.random() * 5) + 1;
		}
		return memberService.findByMId(mId);
	}
	
	@GetMapping("/memberPicture")
	public @ResponseBody String memberPicture(
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
	
	@PutMapping("/member")
	public @ResponseBody Map<String, String> updateMemberDetail(
			@RequestBody Map<String, String> maps
			) {
//		Set<String> set = map1.keySet();
//		Iterator<String> it = set.iterator();
//		while(it.hasNext()) {
//			String key = it.next();
//			System.out.println(key + ": " + map1.get(key));
//		}
		if (maps.get("mPicture") != null) {
			System.out.println(maps.get("mPicture"));
		}
		
		Map<String, String> map = new HashMap<>();
//		Integer mId = Integer.valueOf(StrmId);
//		MemberBean memberBean = memberService.findByMId(mId);
//		if(mPicture != null) {
			
//		}
//		if(mPhone != null) {
//		memberBean.setmPhone(mPhone);
//		}
//		byte[] b = Base64.getDecoder().decode(mPicture);
//		try {
//			Blob blob = new SerialBlob(b);
//			memberBean.setmPicture(blob);
//		} catch (SerialException e) {
//			e.printStackTrace();
//		} catch (SQLException e) {
//			e.printStackTrace();
//		}
		try {
//			memberService.updateDetail(memberBean);
			map.put("success", "更新成功");
		} catch (Exception e) {
			e.printStackTrace();
			map.put("fail", "更新失敗");
		}
		return map;
	}
}
