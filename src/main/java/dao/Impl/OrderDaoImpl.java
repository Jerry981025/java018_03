package dao.Impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

import dao.OrderDao;
import model.OrderBean;
//import model.OrderItemBean;

@Repository
public class OrderDaoImpl implements OrderDao {

//	private static Logger log = LoggerFactory.getLogger(OrderDaoImpl.class);

	SessionFactory factory;

	@Autowired
	public OrderDaoImpl(SessionFactory factory) {
		this.factory = factory;
	}

	@Override
	public void addOrder(OrderBean orderBean) {
		Session session = factory.getCurrentSession();
		session.save(orderBean);
	}

	@Override
	public OrderBean findById(Integer oId) {
		Session session = factory.getCurrentSession();
		return session.get(OrderBean.class, oId);
	}

	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		List<OrderBean> list = null;
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.mId = :mid";
		list = session.createQuery(hql, OrderBean.class)
					  .setParameter("mid", mId)
					  .getResultList();
		return list;
	}

}
