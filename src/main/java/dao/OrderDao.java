package dao;

import java.util.List;

import model.OrderBean;

public interface OrderDao {
	void addOrder(OrderBean ob);

	OrderBean findById(Integer oId);

	List<OrderBean> findByMemberId(Integer mId);
	
	List<OrderBean> findAllOrders();
	
	void updateOrderStatus(OrderBean ob);
	
}
