package dao;

import java.util.List;

import model.MemberBean;

public interface MemberDao {

	MemberBean findByMId(Integer MId);

	void updateDetail(MemberBean memberBean);

	List<Integer> findMemberRankByStatus(String status);
}