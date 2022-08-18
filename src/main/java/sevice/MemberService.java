package sevice;

import dao.MemberDao;
import model.MemberBean;

public class MemberService {
	MemberDao mDao;
	
	public MemberService() {
		mDao = new MemberDao();
	}
	
	public MemberBean findByMId(Integer mId) {
		return mDao.findByMId(mId);
	}
}
