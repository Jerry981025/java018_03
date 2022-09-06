package dao.Impl;

import javax.persistence.NoResultException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import dao.MemberDao;
import model.MemberBean;
import util.HibernateUtils;
@Repository
public class MemberDaoImpl implements MemberDao {
	
	SessionFactory factory;
//	public MemberDaoImpl() {
//		factory = HibernateUtils.getSessionFactory();
//	}
	public MemberDaoImpl(SessionFactory factory) {
		this.factory = factory;
	}
	
	@Override
	public MemberBean findByMId(String MId) {
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

}