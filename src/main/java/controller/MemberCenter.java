package controller;

import java.sql.Blob;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import global.GlobalService;
import model.MemberBean;
import service.AddressService;
import service.MemberService;

@Controller
public class MemberCenter {
	MemberService memberService;
	AddressService addressService;

	@Autowired
	public MemberCenter(MemberService memberService, AddressService addressService) {
		this.memberService = memberService;
		this.addressService = addressService;
	}
	
	@GetMapping("/footer")
	public String footer(@SessionAttribute MemberBean member) {
		if(member == null) {
			return "logoutfooter";			
		}else {
			return "footer";
		}
	}
	
	@GetMapping("/nav")
	public String nav(@SessionAttribute MemberBean member) {
		if(member == null) {
			return "logoutnav";
		}else {
			return "nav";
		}
	}

	@GetMapping("/MemberCenter")
	public String loadMemberCenter() {
		return "memberCenter";
	}

	@GetMapping("/member")
	public @ResponseBody MemberBean memberDetail(@SessionAttribute MemberBean member) {
		return memberService.findByMId(member.getmId());
	}

	@GetMapping("/memberPicture")
	public @ResponseBody Map<String, String> memberPicture(
			@SessionAttribute MemberBean member) {
		Map<String, String> map = new HashMap<>();
		String mineType = null;
		MemberBean bean = memberService.findByMId(member.getmId());
		Blob blob = bean.getmPicture();
		String base64 = null;
		byte[] b = null;
		try {
			if (blob != null && blob.length() != 0) {
				b = blob.getBytes(1, (int) blob.length());
				mineType = bean.getmMineType();
				base64 = Base64.getEncoder().encodeToString(b);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			e.getMessage();
		}
		map.put("mineType", mineType);
		map.put("base64", base64);
		return map;
	}

	@PutMapping("/memberPicture")
	public @ResponseBody Map<String, String> updatePicture(@RequestBody Map<String, String> maps) {
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
			map.put("success", "????????????");
		} catch (Exception e) {
			e.printStackTrace();
			map.put("fail", "????????????");
		}
		return map;
	}

	@PutMapping("/memberBirthday")
	public @ResponseBody Map<String, String> updatebirthday(@RequestBody Map<String, String> maps) {
		Map<String, String> map = new HashMap<>();
		MemberBean memberBean = null;
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mBirthday = maps.get("mBirthday");
		if (mId != null) {
			memberBean = memberService.findByMId(mId);
		}
		if (mBirthday != null && !mBirthday.isEmpty() && mBirthday.trim().length() != 0) {
			try {
				memberBean.setmBirth(new SimpleDateFormat("yyyy-MM-dd").parse(mBirthday));
			} catch (ParseException e) {
				e.printStackTrace();
				e.getMessage();
			}
		} else {
			map.put("BirthdayError", "???????????????");
		}
		if (map.isEmpty()) {
			try {
				memberService.updateDetail(memberBean);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		return map;
	}

	@PutMapping("/memberAddress")
	public @ResponseBody Map<String, String> updateAddress(@RequestBody Map<String, String> maps) {
		Map<String, String> map = new HashMap<>();
		MemberBean memberBean = null;
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mAddress = maps.get("mAddress");
		if (mId != null) {
			memberBean = memberService.findByMId(mId);
		}
		if (mAddress != null) {
			memberBean.setmAddress(mAddress);
		}

		if (map.isEmpty()) {

			try {
				memberService.updateDetail(memberBean);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		return map;
	}

	@DeleteMapping("/address")
	public @ResponseBody Map<String, String> deleteAddress(
			@RequestParam(name = "mId",required = true)Integer mId,
			@RequestParam(name = "aId",required = true)Integer aId,
			@RequestParam(name = "saveAddress",required = true)String saveAddress,
			@RequestParam(name = "commonAddress",required = true)String commonAddress) {
		MemberBean memberBean = null;
		Map<String, String> map = new HashMap<>();
		if (saveAddress.equals(commonAddress)) {
			memberBean = memberService.findByMId(mId);
			memberBean.setmAddress(null);
			try {
				memberService.updateDetail(memberBean);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		addressService.deleteAddress(aId);
		return map;
	}
	
	@PostMapping("/address")
	public @ResponseBody Map<String, String> addAddress(@RequestBody Map<String, String> maps){
		Map<String, String> map = new HashMap<>();
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mAddress = maps.get("mAddress");
		if (mAddress == null || mAddress.trim().length() == 0 ) {
			map.put("fail", "???????????????");
		}
		if (map.isEmpty()) {
				int n = addressService.saveAddress(mId, mAddress);
				if( n == 1) {
					
					map.put("success", "????????????");
				} else {
					map.put("fail", "????????????");
				}
		}
		return map;
	}

	@PutMapping("/memberCellphone")
	public @ResponseBody Map<String, String> updateCellphone(@RequestBody Map<String, String> maps) {
		Map<String, String> map = new HashMap<>();
		MemberBean memberBean = null;
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mCellphone = maps.get("mCellphone");
		if (mId != null) {
			memberBean = memberService.findByMId(mId);
		}
		if (mCellphone.matches("^([0]{1}[9]{1}-?[0-9]{4}-?[0-9]{4})$")) {
			memberBean.setmCellphone(mCellphone);
		} else {
			map.put("fail", "?????????????????????");
		}

		if (map.isEmpty()) {
			try {
				memberService.updateDetail(memberBean);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		return map;
	}

	@PutMapping("/memberPhone")
	public @ResponseBody Map<String, String> updatePhone(@RequestBody Map<String, String> maps) {
		Map<String, String> map = new HashMap<>();
		MemberBean memberBean = null;
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mphone = maps.get("mPhone");
		if (mId != null) {
			memberBean = memberService.findByMId(mId);
		}
		if (mphone.matches("^([0]{1}[0-9]{1}-?[0-9]{4}-?[0-9]{4})$")) {
			memberBean.setmPhone(mphone);
		} else {
			map.put("fail", "?????????????????????");
		}

		if (map.isEmpty()) {
			try {
				memberService.updateDetail(memberBean);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		return map;
	}
	
	@PutMapping("/memberBank")
	public @ResponseBody Map<String, String> updateBank(@RequestBody Map<String, String> maps) {
		Map<String, String> map = new HashMap<>();
		MemberBean memberBean = null;
		Integer mId = Integer.valueOf(maps.get("mId"));
		String mBank = maps.get("mBank");
		if (mId != null) {
			memberBean = memberService.findByMId(mId);
		}
		if (mBank.matches("^([0-9]{10}|[0-9]{11}|[0-9]{12}|[0-9]{13}|[0-9]{14}|[0-9]{15}|[0-9]{16})$")) {
			memberBean.setmBank(mBank);
		} else {
			map.put("fail", "?????????10-16??????");
		}

		if (map.isEmpty()) {
			try {
				memberService.updateDetail(memberBean);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		return map;
	}
	
	@PutMapping("/memberPassword")
	public @ResponseBody Map<String, String> updatePassword(@RequestBody Map<String, String> maps,
			@SessionAttribute MemberBean member) {
		Map<String, String> map = new HashMap<>();
		String mPassword = maps.get("mPassword");
		if (mPassword.matches("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(.{6,})$")) {
			member.setmPassword(mPassword);
		} else {
			map.put("errorPassword", "????????????6?????????????????????????????????????????????????????????");
		}

		if (map.isEmpty()) {
			try {
				member.setmPassword(GlobalService.getMD5Endocing(GlobalService.encryptString(mPassword)));
				memberService.updateDetail(member);
				map.put("success", "????????????");
			} catch (Exception e) {
				e.printStackTrace();
				map.put("fail", "????????????");
			}
		}
		return map;
	}
	
	@GetMapping("/star")
	@ResponseBody
	public Map<String, Object> getRank(@SessionAttribute MemberBean member) {
		Map<String, Object> map = memberService.findByOrderStatusAndHId("?????????", member.getmId());
		map.put("mId", member.getmId());
		map.put("name", member.getmLastName() + member.getmFirstName());
		return map;
	}
}
