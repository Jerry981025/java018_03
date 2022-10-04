package dao.Impl;

import java.util.List;
import java.util.Map;

import javax.persistence.NoResultException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import dao.MemberDao;
import model.MemberBean;
@Repository
public class MemberDaoImpl implements MemberDao {
	
	SessionFactory factory;
	
	public MemberDaoImpl(SessionFactory factory) {
		this.factory = factory;
	}
	
	@Override
	public MemberBean findByMId(Integer MId) {
		MemberBean mb = null;
		String HQL = "From MemberBean Where MId = :mid ";
		Session session = factory.getCurrentSession();
		try {
			mb = (MemberBean)session.createQuery(HQL)
									.setParameter("mid", MId)
									.getSingleResult();
		} catch(NoResultException e) {
			mb = null;
		} 
		return mb;
	}

	@Override
	public void updateDetail(MemberBean memberBean) {
		Session session = factory.getCurrentSession();
		session.update(memberBean);
	}

	@Override
	public List<Integer> findMemberRankByStatus(String status) {
		Session session = factory.getCurrentSession();
		String hql = "SELECT oRanking From orders o WHERE o.oOrderStatus = :status";
		List<Integer> ranks = session.createQuery(hql, Integer.class)
									 .setParameter("status", status)
									 .getResultList();
		return ranks;
	}

	@Override
	public void save(MemberBean mb) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean existsByEmail(String email) {
		MemberBean mb = null;
		String HQL = "From MemberBean Where mAccount = :email ";
		Session session = factory.getCurrentSession();
		try {
			mb = (MemberBean)session.createQuery(HQL)
									.setParameter("email", email)
									.getSingleResult();
		} catch(NoResultException e) {
			mb = null;
		}
		
		return (mb != null);
	}

	@Override
	public MemberBean findByEmail(String email) {
		MemberBean mb = null;
		String HQL = "From MemberBean Where mEmail = :email ";
		Session session = factory.getCurrentSession();
		try {
			mb = (MemberBean)session.createQuery(HQL)
									.setParameter("mEmail", email)
									.getSingleResult();
		} catch(NoResultException e) {
			mb = null;
		} 
		return mb;
	}

	@Override
	public MemberBean findByEmailAndPassword(MemberBean mb) {
		Session session = factory.getCurrentSession();
		String hql = "FROM MemberBean WHERE mEmail = :mail and mPassword = :pswd";
		try {
			return session.createQuery(hql, MemberBean.class)
					.setParameter("mail", mb.getmEmail())
					.setParameter("pswd", mb.getmPassword())
					.getSingleResult();
		} catch(NoResultException e) {
			return null;
		} 
	}

}
