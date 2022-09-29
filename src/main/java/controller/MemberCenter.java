package controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

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
	String noImagePath = "C:/_SpringBoot/workspace/java018_03/src/main/webapp/images/Noimages.png";
	@Autowired
	MemberService memberService;

	@GetMapping("/memberCenter")
	public String loadMemberCenter() {
		return "MemberCenter/memberCenter";
	}

	@GetMapping("/member")
	public @ResponseBody MemberBean memberDetail(@CookieValue(name = "mId", required = false) Integer mId) {
		if (mId == null || mId == 0) {
			mId = (int) (Math.random() * 5) + 1;
		}
		return memberService.findByMId(mId);
	}

	@GetMapping("/memberPicture")
	public @ResponseBody Map<String, String> memberPicture(
			@RequestParam(name = "mId", required = false) String StrmId) {
		File file = new File(noImagePath);
		Map<String, String> map = new HashMap<>();
		String mineType = null;
		Integer mId = Integer.valueOf(StrmId);
		MemberBean bean = memberService.findByMId(mId);
		Blob blob = bean.getmPicture();
		String base64 = null;
		byte[] b = null;
		try {
			b = blob.getBytes(1, (int) blob.length());
			mineType = bean.getmMineType();
			if (b.length == 1 || b.length ==0) {
				try (FileInputStream fis = new FileInputStream(file)) {
					b = new byte[(int) file.length()];
					fis.read(b);
					mineType = "image/png";
					System.out.println("bitch");
				} catch (IOException e) {
					e.printStackTrace();
					e.getMessage();
				}
			}
			base64 = Base64.getEncoder().encodeToString(b);
		} catch (SQLException e) {
			e.printStackTrace();
			e.getMessage();
		}
		map.put("mineType", mineType);
		map.put("base64", base64);
		return map;
	}

	@PutMapping("/member")
	public @ResponseBody Map<String, String> updateMemberDetail(@RequestBody Map<String, String> maps) {
		Map<String, String> map = new HashMap<>();
		MemberBean memberBean = null;
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mPicture = maps.get("mPicture");
		if (mId != null) {
			memberBean = memberService.findByMId(mId);
		}
		if (mPicture != null) {
			String mineType = mPicture.split(":")[1].split(";")[0];
			String base64 = mPicture.split(":")[1].split(";")[1].split(",")[1];
			memberBean.setmMineType(mineType);
			byte[] decodeBase64 = Base64.getDecoder().decode(base64);
			try {
				memberBean.setmPicture(new SerialBlob(decodeBase64));
			} catch (SerialException e) {
				e.printStackTrace();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		try {
			memberService.updateDetail(memberBean);
			map.put("success", "更新成功");
		} catch (Exception e) {
			e.printStackTrace();
			map.put("fail", "更新失敗");
		}
		return map;
	}
}
