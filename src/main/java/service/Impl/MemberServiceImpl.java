package service.Impl;

import org.springframework.stereotype.Service;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

import dao.MemberDao;
import model.MemberBean;
import service.MemberService;

@Transactional
@Service
public class MemberServiceImpl implements MemberService {

//	@Autowired
	MemberDao memberDao;

	public MemberServiceImpl(MemberDao memberDao) {
		this.memberDao = memberDao;
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
}
