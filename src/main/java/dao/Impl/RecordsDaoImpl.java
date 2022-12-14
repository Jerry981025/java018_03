package dao.Impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.RecordsDao;
import model.OrderBean;

@Repository
public class RecordsDaoImpl implements RecordsDao {
	
	SessionFactory factory;
	
	@Autowired
	public RecordsDaoImpl(SessionFactory factory) {
		super();
		this.factory = factory;
	}
	
	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		List<OrderBean> list = null;
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.mId = :mId";
		list = session.createQuery(hql, OrderBean.class)
					  .setParameter("mId", mId)
					  .getResultList();
		return list;
	}

	@Override
	public List<OrderBean> findByHelperId(Integer hId) {
		List<OrderBean> list = null;
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.hId = :hId";
		list = session.createQuery(hql, OrderBean.class)
					  .setParameter("hId", hId)
					  .getResultList();
		return list;
	}

	
}
