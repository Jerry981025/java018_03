package service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dao.MemberDao;
import model.MemberBean;
import service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	MemberDao memberDao;
	
	public MemberServiceImpl() {
	}
	
	@Transactional
	@Override
	public Integer saveMember(MemberBean mb) {
		if (memberDao.existsByEmail(mb.getmEmail())) {
			return -1;
		}
		memberDao.save(mb);
		return 0;
	}
	
	@Transactional
	@Override
	public MemberBean findByMId(Integer mId) {
		return memberDao.findByMId(mId);
	}
	
	@Transactional
	@Override
	public MemberBean findByEmail(String mEmail) {
		return memberDao.findByEmail(mEmail);
	}

	@Override
	public void updateDetail(MemberBean memberBean) {
		memberDao.updateDetail(memberBean);
	}

}
