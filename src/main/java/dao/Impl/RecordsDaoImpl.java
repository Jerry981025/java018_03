package dao.Impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import dao.RecordsDao;
import model.OrderBean;

public class RecordsDaoImpl implements RecordsDao {
	
	private static Logger log = LoggerFactory.getLogger(RecordsDaoImpl.class);
	
	SessionFactory factory;
	
	@Autowired
	public RecordsDaoImpl(SessionFactory factory) {
		super();
		this.factory = factory;
	}
	
	@Override
	public OrderBean findById(Integer oId) {
		log.info("依照oId編號讀取特定一筆訂單的所有資料之Dao, orderId=" + oId);
		OrderBean ob = null;
		Session session = factory.getCurrentSession();
		ob = session.get(OrderBean.class, oId);
		return ob;
	}
	
	@Override
	public List<OrderBean> findByMemberId(Integer mId) {
		log.info("讀取某位會員所有訂單之Dao: 開始");
		List<OrderBean> list = null;
		Session session = factory.getCurrentSession();
		String hql = "FROM OrderBean ob WHERE ob.memberId = :mid";
		list = session.createQuery(hql, OrderBean.class)
					  .setParameter("mid", mId)
					  .getResultList();
		log.info("讀取某位會員所有訂單之Dao: 讀取完畢");
		return list;
	}
	
}
