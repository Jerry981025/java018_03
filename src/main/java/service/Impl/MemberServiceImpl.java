package service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.MemberDao;
import model.MemberBean;
import service.MemberService;

@Transactional
@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	MemberDao memberDao;
	
	public MemberServiceImpl() {
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
	public MemberBean findByMId(Integer mId) {
		return memberDao.findByMId(mId);
	}
	
	@Override
	public MemberBean findByEmail(String mEmail) {
		return memberDao.findByEmail(mEmail);
	}

	@Override
	public void updateDetail(MemberBean memberBean) {
		memberDao.updateDetail(memberBean);
	}

}
