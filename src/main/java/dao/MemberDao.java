package dao;

import model.MemberBean;

public interface MemberDao {

	MemberBean findByMId(Integer MId);

	void updateDetail(MemberBean memberBean);

}