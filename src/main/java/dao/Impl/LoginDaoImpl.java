package dao.Impl;

import javax.persistence.NoResultException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.LoginDao;
import model.MemberBean;


@Repository
public class LoginDaoImpl implements LoginDao{
	
	@Autowired
	SessionFactory factory;

	public LoginDaoImpl() {
		
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
	public void updateDetail(MemberBean memberBean) {
		Session session = factory.getCurrentSession();
		session.update(memberBean);
		
	}

}
