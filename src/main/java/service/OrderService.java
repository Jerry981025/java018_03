package service;

import java.util.List;

import model.OrderBean;


public interface OrderService {
	
	void addOrder(OrderBean ob);
	
	OrderBean findById(Integer oId);

	List<OrderBean> findByMemberId(Integer mId);
	
	List<OrderBean> findAllOrders();
}
