package dao.Impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import dao.RecordsDao;
import model.OrderBean;

public class RecordsDaoImpl implements RecordsDao {
	
	SessionFactory factory;
	
	@Autowired
	public RecordsDaoImpl(SessionFactory factory) {
		super();
		this.factory = factory;
	}
	
	@Override
	public OrderBean findById(Integer oId) {
		OrderBean ob = null;
		Session session = factory.getCurrentSession();
		ob = session.get(OrderBean.class, oId);
		return ob;
	}
	
	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		List<OrderBean> list = null;
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.memberId = :mid";
		list = session.createQuery(hql, OrderBean.class)
					  .setParameter("mid", mId)
					  .getResultList();
		return list;
	}
	
}
