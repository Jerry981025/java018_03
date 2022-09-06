package service.Impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

import dao.MemberDao;
import dao.Impl.MemberDaoImpl;
import model.MemberBean;
import service.MemberService;
import util.HibernateUtils;

public class MemberServiceImpl implements MemberService {
	
	MemberDao mDao;
	SessionFactory factory;
	
	public MemberServiceImpl() {
		mDao = new MemberDaoImpl();
		factory = HibernateUtils.getSessionFactory();
	}
	
	@Override
	public MemberBean findByMId(String mId) {
		MemberBean mb = null;
		Session session = factory.getCurrentSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			mb = mDao.findByMId(mId);
			tx.commit();
		} catch (Exception e) {
			if (tx != null) 
				tx.rollback();
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		return mb;
	}
}
