package service;

import java.util.List;

import model.MemberBean;
import model.OrderBean;

public interface MemberService {

	MemberBean findByMId(Integer mId);

	void updateDetail(MemberBean memberBean);

	boolean existsByEmail(String id);

	Integer saveMember(MemberBean mb);

	MemberBean findByEmail(String mEmail);

	MemberBean findByEmailAndPassword(MemberBean mb);
	
	List<OrderBean> findByOrderStatusAndHId(String status, Integer hId);

}