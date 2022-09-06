package service.Impl;

import org.springframework.stereotype.Service;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;

import dao.MemberDao;
import model.MemberBean;
import service.MemberService;

@Transactional
@Service
public class MemberServiceImpl implements MemberService {
	
	MemberDao mDao;
//	SessionFactory factory;
	
//	public MemberServiceImpl() {
//		mDao = new MemberDaoImpl();
//		factory = HibernateUtils.getSessionFactory();
//	}
	public MemberServiceImpl(MemberDao mDao) {
		this.mDao = mDao;
	}
	
	
	@Override
	public MemberBean findByMId(String mId) {
		MemberBean mb = null;
//		Session session = factory.getCurrentSession();
//		Transaction tx = null;
//		try {
//			tx = session.beginTransaction();
			mb = mDao.findByMId(mId);
//			tx.commit();
//		} catch (Exception e) {
//			if (tx != null) 
//				tx.rollback();
//			e.printStackTrace();
//			throw new RuntimeException(e);
//		}
		return mb;
	}

}
