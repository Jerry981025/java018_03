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
	MemberDao mDao;
	
	public MemberServiceImpl(MemberDao mDao) {
		this.mDao = mDao;
	}
	
	
	@Override
	public MemberBean findByMId(Integer mId) {
		MemberBean mb = null;
			mb = mDao.findByMId(mId);
		return mb;
	}

}
