package service;

import java.util.Map;

import model.MemberBean;

public interface MemberService {

	MemberBean findByMId(Integer mId);

	void updateDetail(MemberBean memberBean);

	boolean existsByEmail(String id);

	Integer saveMember(MemberBean mb);

	MemberBean findByEmail(String mEmail);

	MemberBean findByEmailAndPassword(MemberBean mb);
	
	Map<String, Integer> findByOrderStatusAndHId(String status, Integer hId);

}