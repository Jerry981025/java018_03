package service;

import model.MemberBean;

public interface MemberService {

	MemberBean findByMId(Integer mId);

	void updateDetail(MemberBean memberBean);

}