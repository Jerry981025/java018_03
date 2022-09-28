package dao.Impl;

import java.sql.SQLException;

import javax.naming.NamingException;
import javax.persistence.NoResultException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.MemberDao;
import model.MemberBean;

@Repository
public class MemberDaoImpl implements MemberDao {
	
	@Autowired
	SessionFactory factory;

	public MemberDaoImpl() throws NamingException, SQLException { 
	}
	
	@Override
	public void save(MemberBean mb) {
		Session session = factory.getCurrentSession();
		System.out.println("dao");
		session.save(mb);
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
		
//		if (mb != null) {
//			return true;
//		} else {
//			return false;
//		}
		return (mb != null);
	}
	
	@Override
	public MemberBean findByMId(Integer mid) {
		MemberBean mb = null;
		String HQL = "From MemberBean Where MId = :mid ";
		Session session = factory.getCurrentSession();
		try {
			mb = (MemberBean)session.createQuery(HQL)
									.setParameter("mid", mid)
									.getSingleResult();
		} catch(NoResultException e) {
			mb = null;
		} 
		return mb;
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
}
