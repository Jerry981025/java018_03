package service;

import java.util.Map;

import model.MemberBean;

public interface MemberService {

	MemberBean findByMId(Integer mId);

	void updateDetail(MemberBean memberBean);

	boolean existsByEmail(String id);

	Map<String, Object> saveMember(MemberBean mb);

	MemberBean findByEmail(String mEmail);

	MemberBean findByEmailAndPassword(MemberBean mb);
	
	Map<String, Object> findByOrderStatusAndHId(String status, Integer hId);

}