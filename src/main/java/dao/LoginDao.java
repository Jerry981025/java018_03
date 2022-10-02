package dao;

import model.MemberBean;

public interface LoginDao {
	
	void save(MemberBean mb);
	
	boolean existsByEmail(String email);
	
	MemberBean findByEmail(String email);


	void updateDetail(MemberBean memberBean);
	
	
}
