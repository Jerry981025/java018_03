package service;

import model.MemberBean;

public interface MemberService {

	boolean existsByEmail(String id);
	Integer saveMember(MemberBean mb);
	
	MemberBean findByMId(Integer mId);
	MemberBean findByEmail(String mEmail);
	
	MemberBean findByEmailAndPassword(MemberBean mb) ;
	
	void updateDetail(MemberBean memberBean);

}
