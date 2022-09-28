package service;

import model.MemberBean;

public interface MemberService {

	Integer saveMember(MemberBean mb);
	
	MemberBean findByMId(Integer mId);
	MemberBean findByEmail(String mEmail);
}
