package controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import model.MemberBean;
import service.MemberService;

@Controller
public class RegisterFormController {
	@Autowired
	ServletContext ctx;

	@Autowired
	MemberService memberService;

	@PostMapping("/registerForm")
	public @ResponseBody Map<String, String> addMember(@RequestBody Map<String, String> body) {
		Map<String, String> messageMap = new HashMap<>();
		MemberBean saveBean = new MemberBean();
		saveBean.setmFirstName(body.get("mFirstName"));
		saveBean.setmLastName(body.get("mLastName"));
		saveBean.setmPassword(body.get("mPassword"));
		saveBean.setmEmail(body.get("mEmail"));
		saveBean.setmCellphone(body.get("mCellphone"));
		saveBean.setmAddress(body.get("mAddress"));
		System.out.println(saveBean.getmFirstName() + saveBean.getmLastName() + saveBean.getmPassword() + saveBean.getmAddress()
				+ saveBean.getmEmail() + saveBean.getmCellphone()

		);

		// 檢查輸入資料
		if (saveBean.getmLastName() == null || saveBean.getmLastName().trim().length() == 0) {
			messageMap.put("lastNameError", "請輸入姓氏");
		}
		if (saveBean.getmFirstName() == null || saveBean.getmFirstName().trim().length() == 0) {
			messageMap.put("firstNameError", "請輸入名字");
		}
		if (saveBean.getmEmail() == null || saveBean.getmEmail().trim().length() == 0) {
			messageMap.put("emailError", "請輸入Email");
		}
		if (saveBean.getmPassword() == null || saveBean.getmPassword().trim().length() == 0) {
			messageMap.put("passwordError", "請輸入密碼");
		}
		
		if (body.get("mCheckPassword") == null || body.get("mCheckPassword").trim().length() == 0) {
			messageMap.put("CheckPasswordError", "請輸入確認密碼");
		}
		
		if (!saveBean.getmPassword().equals(body.get("mCheckPassword"))) {
			messageMap.put("passwordNotSameError", "密碼欄與確認密碼不一致");
		}
		
		if (saveBean.getmCellphone() == null || saveBean.getmCellphone().trim().length() == 0) {
			messageMap.put("cellPhoneError", "請輸入手機號碼");
		}

		if (body.get("mBirth") == null || body.get("mBirth").trim().length() == 0) {
			messageMap.put("birthdayError", "請輸入生日");
		}
		
		if (saveBean.getmAddress() == null || saveBean.getmAddress().trim().length() == 0) {
			messageMap.put("addressError", "請輸入地址");
		}

		// 檢查信箱是否重複
//		if (memberService.existsByEmail(saveBean.getmEmail())) == ) {
//			messageMap.put("emailDoubleError","信箱重複，請重新輸入" );
//		}
		
		
		saveBean.setmAccount(saveBean.getmEmail());
		memberService.saveMember(saveBean);
		messageMap.put("fail", "信箱已經存在，請更換信箱");
		
		return messageMap;
	}

}
