package dao;

import model.MemberBean;

public interface MemberDao {

	MemberBean findByMId(String MId);

}