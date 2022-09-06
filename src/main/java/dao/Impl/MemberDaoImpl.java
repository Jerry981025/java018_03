package dao.Impl;

import javax.persistence.NoResultException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import dao.MemberDao;
import model.MemberBean;
import util.HibernateUtils;

public class MemberDaoImpl implements MemberDao {
	
	SessionFactory factory;
	public MemberDaoImpl() {
		factory = HibernateUtils.getSessionFactory();
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
