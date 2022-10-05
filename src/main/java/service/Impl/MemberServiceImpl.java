package service.Impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

import dao.MemberDao;
import dao.OrderDao;
import global.GlobalService;
import model.MemberBean;
import model.OrderBean;
import service.MemberService;

@Transactional
@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	MemberDao memberDao;
	OrderDao orderDao;

	@Override
	public Map<String, Object> saveMember(MemberBean mb) {
		Map<String, Object> messageMap = new HashMap<>();
		// 檢查輸入資料
		if (mb.getmLastName() == null || mb.getmLastName().trim().length() == 0) {
			messageMap.put("lastNameError", "請輸入姓氏");
		}
		if (mb.getmFirstName() == null || mb.getmFirstName().trim().length() == 0) {
			messageMap.put("firstNameError", "請輸入名字");
		}
		if (mb.getmEmail() == null || mb.getmEmail().trim().length() == 0) {
			messageMap.put("emailError", "請輸入Email");
		} else {
			if (memberDao.existsByEmail(mb.getmEmail())) {
				messageMap.put("emailError", "信箱已經存在，請更換信箱");
			}
		}
		if (mb.getmPassword() == null || mb.getmPassword().trim().length() == 0) {
			messageMap.put("passwordError", "請輸入密碼");
		}

		if (mb.getmCheckPassword() == null || mb.getmCheckPassword().trim().length() == 0) {
			messageMap.put("CheckPasswordError", "請輸入確認密碼");
		}

		if (!mb.getmPassword().equals(mb.getmCheckPassword())) {
			messageMap.put("passwordNotSameError", "密碼欄與確認密碼不一致");
		}

		if (mb.getmCellphone() == null || mb.getmCellphone().trim().length() == 0) {
			messageMap.put("cellPhoneError", "請輸入手機號碼");
		}

		if (mb.getmBirth() == null) {
			messageMap.put("birthdayError", "請輸入生日");
		}

		if (mb.getmAddress() == null || mb.getmAddress().trim().length() == 0) {
			messageMap.put("addressError", "請輸入地址");
		}

		if (messageMap.size() != 0) {
			return messageMap;
		}

		mb.setmPassword(enPassword(mb.getmPassword()));
		memberDao.save(mb);
		final Integer mId = mb.getmId();
		if (mId != null) {
			messageMap.put("emailCorrect", "註冊成功");
			messageMap.put("successful", true);
		} else {
			messageMap.put("emailError", "註冊失敗");
			messageMap.put("successful", false);
		}
		return messageMap;
	}

	@Override
	public boolean existsByEmail(String id) {
		boolean exist = false;
		exist = memberDao.existsByEmail(id);

		return exist;
	}

	@Override
	public MemberBean findByEmail(String mEmail) {
		return memberDao.findByEmail(mEmail);
	}

	@Override
	public MemberBean findByMId(Integer mId) {
		return memberDao.findByMId(mId);
	}

	@Override
	public void updateDetail(MemberBean memberBean) {
		memberDao.updateDetail(memberBean);
	}

	@Override
	public MemberBean findByEmailAndPassword(MemberBean mb) {
		mb.setmPassword(enPassword(mb.getmPassword()));
		return memberDao.findByEmailAndPassword(mb);
	}

	@Override
	public Map<String, Integer> findByOrderStatusAndHId(String status, Integer hId) {
		Map<String, Integer> map = new HashMap<>();
		List<OrderBean> orders = orderDao.findByOrderStatusAndhId(status, hId);
		Integer rank = 0;
		for (OrderBean order : orders) {
			rank += order.getoRanking();
		}
		map.put("count", orders.size());
		map.put("rank", rank);
		return map;
	}
	
	private String enPassword(String password) {
		String encryptStr = GlobalService.encryptString(password);
		return GlobalService.getMD5Endocing(encryptStr);
	}
}
