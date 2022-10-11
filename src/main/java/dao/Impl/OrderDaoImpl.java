package dao.Impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import dao.OrderDao;
import model.MemberBean;
import model.OrderBean;
import model.OrderItemBean;

@Repository
public class OrderDaoImpl implements OrderDao {

	SessionFactory factory;

	@Autowired
	public OrderDaoImpl(SessionFactory factory) {
		this.factory = factory;
	}

	@Override
	public void addOrder(OrderBean ob) {
		Session session = factory.getCurrentSession();
		for (OrderItemBean item : ob.getItems()) {
			item.setOrderBean(ob);
			MemberBean mb = new MemberBean();
			mb.setmId(ob.getmId());
			ob.setMemberBean(mb);
		}
		session.save(ob);
//		Session session = factory.getCurrentSession();
//		for (OrderItemBean item : ob.getItems()) {
//			item.setOrderBean(ob);
//		}
//		session.save(ob);
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
		list = session.createQuery(hql, OrderBean.class).setParameter("mid", mId).getResultList();
		return list;
	}

	@Override
	public List<OrderBean> findAllOrders() {
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean";
		List<OrderBean> beans = session.createQuery(hql, OrderBean.class).getResultList();
		return beans;
	}

	@Override
	public void updateOrderStatus(OrderBean ob) {
		Session session = factory.getCurrentSession();
		session.update(ob);
	}

	@Override
	public List<OrderBean> findByOrderStatus(String status) {
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.oOrderStatus = :status";
		return session.createQuery(hql, OrderBean.class).setParameter("status", status).getResultList();
	}

	@Override
	public List<OrderBean> findByOrderStatusAndhId(String status, Integer hId) {
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.oOrderStatus = :status AND ob.hId = :hId";
		return session.createQuery(hql, OrderBean.class).setParameter("status", status).setParameter("hId", hId)
				.getResultList();
	}
}
