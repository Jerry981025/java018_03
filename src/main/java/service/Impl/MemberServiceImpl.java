package service.Impl;

import java.util.List;

import org.springframework.stereotype.Service;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

import dao.MemberDao;
import dao.OrderDao;
import model.MemberBean;
import model.OrderBean;
import service.MemberService;

@Transactional
@Service
public class MemberServiceImpl implements MemberService {

//	@Autowired
	MemberDao memberDao;
	
	OrderDao orderDao;

	public MemberServiceImpl(MemberDao memberDao, OrderDao orderDao) {
		this.memberDao = memberDao;
		this.orderDao = orderDao;
	}

	@Override
	public Integer saveMember(MemberBean mb) {
		if (memberDao.existsByEmail(mb.getmEmail())) {
			return -1;
		}
		memberDao.save(mb);
		return 0;
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
		return memberDao.findByEmailAndPassword(mb);
	}

	@Override
	public List<OrderBean> findByOrderStatusAndHId(String status, Integer hId) {
		return orderDao.findByOrderStatusAndhId(status, hId);
	}
}
