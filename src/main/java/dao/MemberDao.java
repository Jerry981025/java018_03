package dao;

import java.util.List;

import model.MemberBean;

public interface MemberDao {

	void save(MemberBean mb);

	boolean existsByEmail(String email);

	MemberBean findByMId(Integer mid);

	MemberBean findByEmail(String email);

	MemberBean findByEmailAndPassword(MemberBean mb);

	void updateDetail(MemberBean memberBean);

	List<Integer> findMemberRankByStatus(String status);
}
